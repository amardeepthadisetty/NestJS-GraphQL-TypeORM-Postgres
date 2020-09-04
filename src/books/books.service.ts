import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './books.entity';
import { Repository, getConnection } from 'typeorm';
import { InputBook } from './inputs/input-book';
import { CreateBookDTO } from './dto/create-book-dto';
import { UpdateBookInput } from './inputs/update-book';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(BookEntity) private readonly BooksRepository: Repository<BookEntity>){}

    async getBooks():Promise<BookEntity[]> {
        return await this.BooksRepository.find();
    }

    async createBook(data:InputBook): Promise<BookEntity>{
        const book = new BookEntity();

        book.name = data.name;
        book.genre = data.genre;
        book.authorId = data.authorId;

        return await this.BooksRepository.save(book);
    }

    async getBookBasedOnId(id:number){
        const bookExists = await this.BooksRepository.findOne({id: id});
        if( !bookExists){
            throw new Error('Book Does not exists');
        }

        return bookExists;
    }

    async updateBook(id:number,dataToUpdate:UpdateBookInput){
        const bookExists = await this.BooksRepository.findOne({id: id});
        if( !bookExists){
            throw new Error('Book Does not exists');
        }
        //console.log("data to udpate is: ", dataToUpdate);
       // const thingsToUpdate: any = {}

        Object.assign(bookExists, dataToUpdate);

        /* if(dataToUpdate.name) thingsToUpdate.name = dataToUpdate.name;
        if(dataToUpdate.genre) thingsToUpdate.genre = dataToUpdate.genre;
        if(dataToUpdate.authorId) thingsToUpdate.authorId = dataToUpdate.authorId; */
        //console.log("thingsToUpdate udpate is: ", thingsToUpdate);
        await this.BooksRepository.save(bookExists);
       // const result = await  getConnection().createQueryBuilder().update(BookEntity).set(thingsToUpdate)
       //  .where('id = :id', {id : id}).execute();

        //console.log("result is: ", bookExists);
        return bookExists;
    }
}
