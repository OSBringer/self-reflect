import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
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

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany((type) => Categories, (category) => category.id)
    categories!: Categories[];

    @ManyToOne((type) => Users, (user) => user.id)
    user!: Users;
    // Many answers to one user

    @OneToOne((type) => Questions)
    @JoinColumn()
    questions!: Questions;
}

export default Answers;
