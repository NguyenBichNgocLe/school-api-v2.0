import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './class/class.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ClassModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
