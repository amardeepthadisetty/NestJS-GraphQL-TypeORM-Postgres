import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { BookEntity } from './books.entity';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book-dto';
import { InputBook } from './inputs/input-book';
import { UpdateBookInput } from './inputs/update-book';
import { AuthorService } from 'src/author/author.service';



@Resolver((of) => CreateBookDTO)
export class BooksResolver {
    constructor(private bookService: BooksService, private authorService: AuthorService){}

    @Query( () => [CreateBookDTO] )
    async books(){
        return this.bookService.getBooks();
    }

    @Query( () => CreateBookDTO )
    async book(@Args('id') id: number){
        return this.bookService.getBookBasedOnId(id);
    }

    @ResolveField()
    async getAuthor(@Parent() book: CreateBookDTO){
        const { authorId } =  book;
        return await this.authorService.getAuthorBasedOnId(authorId);

    }

    @Mutation(() => CreateBookDTO)
    async createBook(@Args('data') data: InputBook){
        return this.bookService.createBook(data);
    }

    @Mutation(() => CreateBookDTO )
    async updateBook(@Args('id') id: number, @Args('dataToUpdate') dataToUpdate: UpdateBookInput){
        return this.bookService.updateBook(id,dataToUpdate);
    }
}
