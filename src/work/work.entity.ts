import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Work {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name?: string;

    @Column()
    subName?: string;

    @Column()
    author?: string;
    @Column()
    creationTime?: Date;

    @Column()
    picture?: string;

    @Column()
    desc?: string;

    @Column()
    tools?: string;

    @Column()
    releaseTime?: Date;
}