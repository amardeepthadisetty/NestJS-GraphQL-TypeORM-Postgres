import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class InputBook{
    @Field()
    readonly name:String;

    @Field()
    readonly genre: String;

    @Field()
    readonly authorId: number;
}