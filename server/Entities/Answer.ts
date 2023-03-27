import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
} from "typeorm";
import Categories from "./Category";
import Questions from "./Question";
import Users from "./User";

@Entity()
class Answers extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    date!: string;

    @ManyToMany((type) => Categories, (category) => category.id)
    @JoinTable()
    categories!: Categories[];

    @ManyToOne((type) => Users, (user) => user.id)
    user!: Users;
    // Many answers to one user

    @OneToOne((type) => Questions)
    @JoinColumn()
    questions!: Questions;
}

export default Answers;
