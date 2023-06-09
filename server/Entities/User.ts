import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from "typeorm";
import Answers from "./Answer";

@Entity()
class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    username!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    birthdate!: string;

    @Column()
    country!: string;

    @OneToMany((type) => Answers, (answer) => answer.id)
    answers!: Answers[];
}

export default Users;
