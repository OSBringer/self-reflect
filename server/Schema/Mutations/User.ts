import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import MessageType from "../TypeDefs/Message";
import Users from "../../Entities/User";

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

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const result = await Users.delete({ id: args.id });
        if (result.affected === 0) {
            throw new Error("User not found");
        }
        return { state: true, message: "User deleted successfully" };
    },
};

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        newpassword: { type: GraphQLString },
    },
    async resolve(args: any) {
        const { username, password, newpassword } = args;
        const user = await Users.findOne({ where: { username } });
        if (!user) throw new Error("User not found");
        const userPassword = user?.password;
        if (password !== userPassword) {
            throw new Error("Password is incorrect");
        }
        Users.update({ username }, { password: newpassword });
        return { state: true, message: "Password updated successfully" };
    },
};
