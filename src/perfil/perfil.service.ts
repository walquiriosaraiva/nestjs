import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  create(createPerfilDto: CreatePerfilDto) {
    return {
      message: `create This action perfil `,
      data: createPerfilDto,
    };
  }

  findAll() {
    return `findAll This action returns all perfil`;
  }

  findOne(id: number) {
    return `findOne This action returns a #${id} perfil`;
  }

  update(id: number, updatePerfilDto: UpdatePerfilDto) {
    return {
      message: `update This action updates a #${id} perfil `,
      data: updatePerfilDto,
    };
  }

  updatePerfil(id: number, updatePerfilDto: UpdatePerfilDto) {
    return {
      message: `updatePerfil This action updates a #${id} perfil `,
      data: updatePerfilDto,
    };
  }

  remove(id: number) {
    return `remove This action removes a #${id} perfil`;
  }

  removePerfil(id: number) {
    return `removePerfil This action removes a #${id} perfil`;
  }
}
