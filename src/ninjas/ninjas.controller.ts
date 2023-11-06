import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        const service = new NinjasService();
        return service.getNinja(weapon)
    }


    @Get(':id')
    getOneNinjas(@Param('id') id:string ) {
        return {id}
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name,
        }
    }

    @Put(':id')
    updateNinja(@Param('id') id:string, @Body() updateNInjaDto: UpdateNinjDto) {
        return {
            id,
            name: updateNInjaDto.name,
            message: "Ok tl"
        }
    }

    @Delete(':id')
    removeNinja() {
        return "Deleted Ninja"
    }
}
