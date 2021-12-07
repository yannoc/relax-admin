import {Controller, Get, Param, Put} from '@nestjs/common';
import {Work} from './work.entity';
import {WorkService} from "./work.service";

@Controller('api/work')
export class WorkController {

    constructor(private readonly service: WorkService) {
    }

    @Get("getAll")
    getAll() {
        return this.service.findAll()
    }

    @Put("save")
    addWork(@Param() work: Work) {
        return this.service.add(work)
    }
}
