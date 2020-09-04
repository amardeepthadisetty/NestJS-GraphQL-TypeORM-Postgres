//import { Field, ObjectType} from 'type-graphql';
import { ObjectType, Field, InputType } from '@nestjs/graphql';


@ObjectType()
export class CreateBookDTO {
    @Field()
    readonly id?:number;

    @Field()
    readonly name:string;

    @Field()
    readonly genre:string;

    @Field()
    readonly authorId:number;


}