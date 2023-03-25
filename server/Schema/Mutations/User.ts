import { GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/User";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password, email } = args;
        await Users.insert({ name, username, password, email });
        return args;
    },
};
