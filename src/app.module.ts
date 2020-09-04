import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
    }),
    BooksModule,
    AuthorModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
