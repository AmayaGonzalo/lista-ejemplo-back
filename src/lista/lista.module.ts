import { Module } from '@nestjs/common';
import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lista } from './entities/lista.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Lista])],
  controllers: [ListaController],
  providers: [ListaService],
})
export class ListaModule {}
