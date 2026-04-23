import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';


@Module({imports: [
    // 3. Añade esto para habilitar el repositorio de Task en este módulo
    TypeOrmModule.forFeature([Task]), 
  ],
  
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
