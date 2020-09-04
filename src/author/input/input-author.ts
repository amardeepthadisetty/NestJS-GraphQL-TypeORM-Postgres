import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class InputAuthor {
    @Field()
    name: String;

    @Field()
    age: number;
}