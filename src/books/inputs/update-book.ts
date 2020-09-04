import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBookInput {
    @Field({ nullable: true })
    readonly name?: String;

    @Field({ nullable: true })
    readonly genre?: String;

    @Field({ nullable: true })
    readonly authorId?: number
}