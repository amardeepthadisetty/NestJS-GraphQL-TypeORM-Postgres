import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(BookEntity) private readonly BooksRepository: Repository<BookEntity>){}

    async getBooks():Promise<BookEntity[]> {
        return await this.BooksRepository.find();
    }
}
