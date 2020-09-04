import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class CreateAuthorDTO {
    @Field()
    readonly id?:number;

    @Field()
    readonly name:String;

    @Field()
    readonly age: number;
}