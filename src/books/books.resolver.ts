import { Resolver, Query } from '@nestjs/graphql';
import { BookEntity } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book-dto';



@Resolver((of) => BookEntity)
export class BooksResolver {
    constructor(private bookService: BooksService){

    }


    @Query( () => [CreateBookDTO] )
    async books(): Promise<BookEntity[]>{
        return this.bookService.getBooks();
    }
}
