import { Resolver ,Query, Mutation, Args} from '@nestjs/graphql';
import { AuthorEntity } from './author.entity';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/create-author.dto';
import { InputAuthor } from './input/input-author';
import { UpdateAuthorInput } from './input/update-author-input';

@Resolver((of) => AuthorEntity)
export class AuthorResolver {
    constructor(private authorService: AuthorService){}

    @Query( () => [ CreateAuthorDTO ])
    async getAuthors(){
        return this.authorService.getAllAuthors();
    }

    @Query( () => CreateAuthorDTO)
    async author( @Args('id') id: number){
        return this.authorService.getAuthorBasedOnId(id);
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
