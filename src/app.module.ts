import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEntity } from './Dto/app.entity';
@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'hngp',
      entities: [AppEntity],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([AppEntity])
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
