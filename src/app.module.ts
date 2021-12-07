import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {WorkModule} from './work/work.module';
import {FileService} from './core/file/file.service';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({

    imports: [
        TypeOrmModule.forRoot({
            autoLoadEntities: true,
        }),
        WorkModule
    ],
    controllers: [AppController],
    providers: [AppService, FileService],
})
export class AppModule {
}
