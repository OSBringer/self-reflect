import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    JoinTable,
    ManyToMany,
} from "typeorm";

import Answers from "./Answer";
import Categories from "./Category";

@Entity()
class Questions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    date!: string;

    @ManyToMany((type) => Categories, (category) => category.id)
    @JoinTable()
    categories!: Categories[];

    @OneToOne((type) => Answers)
    @JoinColumn()
    answers?: Answers;
}

export default Questions;
