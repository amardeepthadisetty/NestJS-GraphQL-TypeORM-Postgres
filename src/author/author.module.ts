import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity])
  ],
  providers: [AuthorResolver, AuthorService]
})
export class AuthorModule {}
