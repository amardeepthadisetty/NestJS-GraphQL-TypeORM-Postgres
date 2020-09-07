import { Resolver ,Query, Mutation, Args, ResolveField, Parent} from '@nestjs/graphql';
import { AuthorEntity } from './author.entity';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { InputAuthor } from './input/input-author';
import { UpdateAuthorInput } from './input/update-author-input';
import { BooksService } from 'src/books/books.service';

@Resolver( of => CreateAuthorDTO)
export class AuthorResolver {
    constructor(private authorService: AuthorService, private bookService: BooksService){}

    @Query( () => [ CreateAuthorDTO ])
    async getAuthors(){
        return this.authorService.getAllAuthors();
    }

    @Query( () => CreateAuthorDTO)
    async author( @Args('id') id: number){
        return this.authorService.getAuthorBasedOnId(id);
    }

    @ResolveField()
    async getbooks(@Parent() author: CreateAuthorDTO) {
       const { id } = author;
       return await this.bookService.getBooksBasedOnAuthorId(id);
       //return '';
    }

    @Mutation(() => CreateAuthorDTO)
    async createAuthor( @Args('data') data: InputAuthor){
        return this.authorService.createAuthor(data);
    }

    @Mutation(() => CreateAuthorDTO)
    async updateAuthor( @Args('id') id: number, @Args('data') updateAuthorData: UpdateAuthorInput){
        return this.authorService.updateAuthor( id, updateAuthorData );
    }


}
