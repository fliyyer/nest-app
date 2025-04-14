import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticleService } from './article.service';
import { IArticle } from './interface/article.interface';
import { createArticleDto } from './dto/create-article.dto';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {

    }

    @Get()
    findAll(): IArticle[] {
        return this.articleService.findAllArticle();
    }

    @Get('/:id')
    findOne(@Param() params: any): string {
        return `Tampilkan article berdasarkan id: ${params.id}`;
    }

    @Post()
    create(@Body() createArticleDto: createArticleDto): IArticle {
        return this.articleService.createArticle(createArticleDto);
    }

    @Put('/:id')
    update(@Param() params: any): string {
        return `Update article berdasarkan id: ${params.id}`;
    }

    @Delete('/:id')
    remove(@Param() params: any): string {
        return `Hapus article berdasarkan id: ${params.id}`;
    }
}
