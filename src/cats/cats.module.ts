import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 导出 CatsService 后，每个导入 CatsModule 的模块均可访问 CatsService (单例)
})
export class CatsModule {}
