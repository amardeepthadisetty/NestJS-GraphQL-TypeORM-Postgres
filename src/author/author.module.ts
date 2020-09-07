import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { BooksService } from 'src/books/books.service';
import { BookEntity } from 'src/books/books.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity, BookEntity])
  ],
  exports: [ AuthorService],
  providers: [AuthorResolver, AuthorService, BooksService]
})
export class AuthorModule {}
