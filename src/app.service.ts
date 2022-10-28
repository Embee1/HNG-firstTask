import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppDto } from './Dto/app.dto';
import { AppEntity } from './Dto/app.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(AppEntity) private readonly appRepository: Repository<AppEntity>){}



  // getDetails(SlackUsername: string, Backend: boolean, Age: number, Bio: string){
  //   return this.appRepository.(SlackUsername, Backend, Age, Bio);

  // }

  getDetails(data: AppDto){
    return this.appRepository.save(data);

  }

  async users(){
    return {
      name: "John Doe",
      email: "johndoe@gmail.com"
    }
  }
}
