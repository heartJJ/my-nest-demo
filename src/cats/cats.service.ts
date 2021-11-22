import { Injectable } from '@nestjs/common';
import * as CatInterface from './interfaces/cat.interface';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
    private connection: Connection,
  ) {}

  async create(cat: CatInterface.Cat) {
    // 直接创建
    // await this.catsRepository.save(cat);

    // 显示控制事务
    // const queryRunner = this.connection.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   await queryRunner.manager.insert(Cat, cat);
    //   await queryRunner.commitTransaction();
    // } catch (err) {
    //   await queryRunner.rollbackTransaction();
    // } finally {
    //   await queryRunner.release();
    // }

    // 隐式控制事务
    await this.connection.transaction(async (manager) => {
      await manager.insert(Cat, cat);
    });
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }
}
