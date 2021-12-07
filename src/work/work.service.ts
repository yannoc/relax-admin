import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Work} from "./work.entity";

@Injectable()
export class WorkService {

    constructor(
        @InjectRepository(Work)
        private workRepository: Repository<Work>
    ) {
    }

    getCount(): Promise<number> {
        return this.workRepository.count();
    }

    add(work: Work): Promise<Work> {
        return this.workRepository.save(work)
    }

    // update(work: Work): Promise<Work> {
    //     return this.workRepository.update(work)
    // }

    findAll(): Promise<Work[]> {
        return this.workRepository.find();
    }

    findOne(id: string): Promise<Work> {
        return this.workRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.workRepository.delete(id);
    }


}
