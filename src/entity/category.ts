import {Column,PrimaryGeneratedColumn,Entity} from "typeorm";
@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    idCategory:number;
    @Column()
    name : string;
    @Column()
    image:string
}