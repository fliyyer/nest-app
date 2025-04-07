import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    findAll(): string {
        return 'Tampilkan semua article';
    }

    @Get('/:id')
    findOne(@Param() params: any): string {
        return `Tampilkan article berdasarkan id: ${params.id}`;
    }

    @Post()
    create(): string {
        return 'Buat article baru';
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
