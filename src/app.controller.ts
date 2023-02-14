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
import KutyaDto from './kutyus.dto';

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
    return repo.find();
  }

  @Delete('api/kutya/:id')
  async deleteKutya(@Param('id') id: number) {
    const repo = this.dataSource.getRepository(Kutya);
    await repo.delete(id);
  }

  @Post('api/kutya')
  async postKutya(@Body() kutya: KutyaDto) {
    const repo = this.dataSource.getRepository(Kutya);
    return await repo.save(kutya);
  }
}
