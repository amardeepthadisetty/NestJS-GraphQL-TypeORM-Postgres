import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './books.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([BookEntity])],
  providers: [BooksResolver, BooksService],
  exports: [BooksService]
})
export class BooksModule {}
