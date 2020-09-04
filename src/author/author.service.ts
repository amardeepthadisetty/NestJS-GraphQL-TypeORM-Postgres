import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { Repository } from 'typeorm';
import { CreateBookDTO } from 'src/books/dto/create-book-dto';
import { InputAuthor } from './input/input-author';
import { UpdateAuthorInput } from './input/update-author-input';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Injectable()
export class AuthorService {
    constructor( @InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity> ){}

    async getAllAuthors(){
        return await this.authorRepository.find();
    }

    async createAuthor(data: InputAuthor):Promise<AuthorEntity>{
        const author = new AuthorEntity();
        author.name = data.name;
        author.age = data.age;

        return await this.authorRepository.save(author);
    }

    async getAuthorBasedOnId(id: number):Promise<CreateAuthorDTO>{
        return await this.authorRepository.findOne({ id: id });
    }

    async updateAuthor( id: number, updateAuthorData: UpdateAuthorInput){
        const authorExists = await this.authorRepository.findOne({id: id});
        if( !authorExists){
            throw new Error('Book Does not exists');
        }
        //console.log("data to udpate is: ", dataToUpdate);
       // const thingsToUpdate: any = {}

        Object.assign(authorExists, updateAuthorData);

        /* if(dataToUpdate.name) thingsToUpdate.name = dataToUpdate.name;
        if(dataToUpdate.genre) thingsToUpdate.genre = dataToUpdate.genre;
        if(dataToUpdate.authorId) thingsToUpdate.authorId = dataToUpdate.authorId; */
        //console.log("thingsToUpdate udpate is: ", thingsToUpdate);
        await this.authorRepository.save(authorExists);
       // const result = await  getConnection().createQueryBuilder().update(BookEntity).set(thingsToUpdate)
       //  .where('id = :id', {id : id}).execute();

        //console.log("result is: ", authorExists);
        return authorExists;

    }
}
