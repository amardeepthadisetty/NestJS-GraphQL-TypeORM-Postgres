import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './books.entity';
import { AuthorService } from 'src/author/author.service';
import { AuthorEntity } from 'src/author/author.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([BookEntity, AuthorEntity])],
  providers: [BooksResolver, BooksService, AuthorService],
  exports: [BooksService]
})
export class BooksModule {}
