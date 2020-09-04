import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateAuthorInput{
    @Field({ nullable: true})
    name?: String;

    @Field({ nullable: true})
    age?: number;
}