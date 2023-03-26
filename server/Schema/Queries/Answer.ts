import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Answer } from "../../Entities/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(): Promise<Users[]> {
        return Users.find();
    },
};
