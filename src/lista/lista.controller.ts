import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaService } from './lista.service';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { Lista } from './entities/lista.entity';

@Controller('lista')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}

  @Post('nuevo')
  async createNewPerson(@Body() createListaDto: CreateListaDto):Promise<Lista> {
    return await this.listaService.create(createListaDto);
  }

  @Get()
  async findAll(): Promise<Lista[]> {
    return await this.listaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaDto: UpdateListaDto) {
    return this.listaService.update(+id, updateListaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaService.remove(+id);
  }
}
