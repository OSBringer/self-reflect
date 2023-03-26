import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Categories extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    category!: string;
}

export default Categories;
