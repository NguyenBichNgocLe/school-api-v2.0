import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateUpdateClassDTO } from './dto/create-update-class.dto';

@Controller('class')
export class ClassController {
    constructor(
        private readonly classService: ClassService,
    ) { }

    @Post('/')
    addClass(@Body() createClassDto: CreateUpdateClassDTO) {
        return this.classService.create(createClassDto.className);
    }

    @Get('/:id')
    getClassById(@Param('id') id: string) {
        return this.classService.getClassById(+id);
    }

    @Patch('/:id')
    updateClass(
        @Param('id') id: string,
        @Body() updateClassDto: CreateUpdateClassDTO
    ) {
        return this.classService.update(+id, updateClassDto.className);
    }

    @Delete('/:id')
    deleteClass(@Param('id') id: string) {
        return this.classService.delete(+id);
    }
}