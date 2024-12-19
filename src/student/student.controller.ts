import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDTO } from './dto/create-student.dto';
import { UpdateStudentDTO } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService: StudentService,
    ) {}

    @Post('/')
    addStudent(@Body() createStudentDto: CreateStudentDTO) {
        return this.studentService.create(createStudentDto.studentName, createStudentDto.className);
    }

    @Patch('/:id')
    updateStudent(
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDTO,
    ) {
        return this.studentService.update(+id, updateStudentDto);
    }

    @Delete('/:id')
    deleteStudent(@Param('id') id: string) {
        return this.studentService.delete(+id);
    }

    @Get('/usingID/:id')
    getStudentById(@Param('id') id: string) {
        return this.studentService.getStudentById(+id);
    }

    @Get('/usingName')
    filterStudents(@Query('searchString') searchString: string) {
        return this.studentService.filterStudent(searchString);
    }

    @Get('/all')
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    @Get('/inOneClass')
    getStudentInSameClass(@Query('className') className: string) {
        return this.studentService.getStudentInSameClass(className);
    }
}
