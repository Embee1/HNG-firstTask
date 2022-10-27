import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './Dto/app.dto';
import { AppEntity } from './Dto/app.entity';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

//   @Post('payload')
//  getDetails(
  
//    @Body(' SlackUsername')  SlackUsername: string,
//    @Body('Backend')  Backend: boolean,
//    @Body('Age')    Age  : number,
//    @Body(' Bio')  Bio : string,


//   ) {
//    return this.appService.getDetails(SlackUsername, Backend, Age, Bio)
//   }

@Get('payload')
 getDetails(@Body() createApp: AppDto) {
   return this.appService.getDetails(createApp)
  }
}
