import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";

import Answers from "./Answer";

@Entity()
class Questions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    date!: string;

    @Column()
    category!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToOne((type) => Answers)
    @JoinColumn()
    answers?: Answers;
}

export default Questions;
