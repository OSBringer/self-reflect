import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinTable,
    ManyToMany,
} from "typeorm";
import Questions from "./Question";
import Answers from "./Answer";

@Entity()
class Categories extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    category!: string;

    @ManyToMany((type) => Questions, (question) => question.id)
    @JoinTable()
    question!: Questions;

    @ManyToMany((type) => Answers, (answer) => answer.id)
    @JoinTable()
    answer!: Answers;
}

export default Categories;
