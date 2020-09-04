
import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('author_tbl')
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    age:number;
}