import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

const MessageType = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
        state: { type: GraphQLBoolean },
        message: { type: GraphQLString },
    }),
});
export default MessageType;
