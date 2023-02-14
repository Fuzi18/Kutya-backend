import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import Kutya from './kutya.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('api/kutya')
  async listKutya() {
    const repo = this.dataSource.getRepository(Kutya);
  }

  @Delete('api/kutya/:id')
  deleteKutya(@Param('id') id: number) {
    const repo = this.dataSource.getRepository(Kutya);
  }

  @Post('api/kutya')
  postKutya(@Body() kutya: Kutya) {
    const repo = this.dataSource.getRepository(Kutya);
    repo.save(kutya);
  }
}
