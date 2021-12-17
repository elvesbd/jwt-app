import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Vaibem@123',
      database: 'jwtapp',
      entities: join[__dirname + '/**/*.entity{.js,.ts}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
