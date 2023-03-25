const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const bodyParser = require("body-parser");
const { buildSchema } = require("graphql");
const app = express();
app.use(bodyParser.json());
app.use("/graphql", graphqlHTTP({
    schema: buildSchema(`

        type File{
            filename: String!
            mimetype: String!
            encoding: String!
        }

        input fileInput {
            filename: String!
            mimetype: String!
            encoding: String!
        }

        input AnswerInput {
            question: String!
            answerText: String
            answerFile: fileInput
            date: String!
        }

        type Answer{
            id: ID!
            question: String!
            answerText: String
            answerFile: File
            date: String!
        }

        type RootQuery {
            answer: Answer!
        }

        type RootMutation {
            createAnswer(answerInput: AnswerInput! ): Answer!
            removeAnswer(id: ID!): Answer!
            editAnswer(answerInput: AnswerInput!): Answer!
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }
        `),
    rootValue: {
        answer: () => ({
            id: "sss",
            question: "What is your name?",
            answerText: "My name is John",
            answerFile: {
                filename: "test.txt",
                mimetype: "text/plain",
                encoding: "7bit",
            },
            date: "2021-01-01",
        }),
        createAnswer: (args) => {
            const answer = {
                id: Math.random().toString(),
                question: args.answerInput.question,
                answerText: args.answerInput.answerText,
                answerFile: args.answerInput.answerFile,
                date: args.answerInput.date,
            };
            return answer;
        },
    },
    graphiql: true,
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=app.js.map