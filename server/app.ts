import express from "express";
import { graphqlHTTP } from "express-graphql";
import bodyParser from "body-parser";
import { buildSchema } from "graphql";
import cors from "cors";
import { DataSource } from "typeorm";
import { schema } from "./Schema";
import Users from "./Entities/User";
import Answers from "./Entities/Answer";
import Questions from "./Entities/Question";
import Categories from "./Entities/Category";

const main = async () => {
    const AppDataSource = new DataSource({
        type: "mysql",
        database: "self_reflect",
        username: "root",
        password: "wowko231",
        logging: true,
        synchronize: true,
        entities: [Users, Answers, Questions, Categories],
        host: "localhost",
        port: 3306,
    });
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(
        "/graphql",
        graphqlHTTP({
            schema,
            graphiql: true,
        })
    );
    // app.use(
    //     "/graphql",
    //     graphqlHTTP({
    //         schema: buildSchema(`
    //         type File{
    //             filename: String!
    //             mimetype: String!
    //             encoding: String!
    //         }

    //         input fileInput {
    //             filename: String!
    //             mimetype: String!
    //             encoding: String!
    //         }

    //         input AnswerInput {
    //             question: String!
    //             answerText: String
    //             answerFile: fileInput
    //             date: String!
    //         }

    //         type Answer{
    //             id: ID!
    //             question: String!
    //             answerText: String
    //             answerFile: File
    //             date: String!
    //         }

    //         type RootQuery {
    //             answer: Answer!
    //         }

    //         type RootMutation {
    //             createAnswer(answerInput: AnswerInput! ): Answer!
    //             removeAnswer(id: ID!): Answer!
    //             editAnswer(answerInput: AnswerInput!): Answer!
    //         }

    //         schema{
    //             query: RootQuery
    //             mutation: RootMutation
    //         }
    //         `),
    //         rootValue: {
    //             answer: () => ({
    //                 id: "sss",
    //                 question: "What is your question?",
    //                 answerText: "My name is John",
    //                 answerFile: {
    //                     filename: "test.txt",
    //                     mimetype: "text/plain",
    //                     encoding: "7bit",
    //                 },
    //                 date: "2021-01-01",
    //             }),
    //             createAnswer: (args) => {
    //                 const answer = {
    //                     id: Math.random().toString(),
    //                     question: args.answerInput.question,
    //                     answerText: args.answerInput.answerText,
    //                     answerFile: args.answerInput.answerFile,
    //                     date: args.answerInput.date,
    //                 };
    //                 return answer;
    //             },
    //         },
    //         graphiql: true,
    //     })
    // );

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
};

main().catch((err) => {
    console.warn(err);
});
