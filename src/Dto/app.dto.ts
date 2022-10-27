import { IsBoolean, IsString } from "class-validator";

export class AppDto{

    @IsString()
    SlackUsername: string;

    @IsString()
     Backend: string;
  
    @IsString()
    Age: string;

    @IsString()
     Bio: string;
}