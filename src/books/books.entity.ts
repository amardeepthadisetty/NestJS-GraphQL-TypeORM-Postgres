import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('book_tbl')
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    genre:String;

    @Column()
    authorId: number;
}