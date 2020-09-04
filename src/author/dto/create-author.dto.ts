import { ObjectType, Field } from "@nestjs/graphql";
import { CreateBookDTO } from "src/books/dto/create-book-dto";

@ObjectType()
export class CreateAuthorDTO {
    @Field()
    readonly id?:number;

    @Field()
    readonly name:String;

    @Field()
    readonly age: number;

    @Field( type => [CreateBookDTO])
    readonly getbooks?: CreateBookDTO[];
}