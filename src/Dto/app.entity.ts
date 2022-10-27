import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {   IsBoolean, IsString,  } from "class-validator";
@Entity()
export class AppEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    SlackUsername: string;

  
    @Column()
    Backend: string;
  
    @IsString()
    @Column()
    Age: string;

    @IsString()
    @Column()
    Bio: string;

}