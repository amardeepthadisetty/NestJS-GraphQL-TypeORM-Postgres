
import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";
import { ObjectType } from "@nestjs/graphql";

@Entity('author_tbl')
@ObjectType()
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    age:number;
}