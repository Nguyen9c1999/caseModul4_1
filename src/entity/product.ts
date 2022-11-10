import {Column,PrimaryGeneratedColumn,Entity} from "typeorm";
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    idProduct:number;
    @Column()
    name : string;
    @Column({type:'double'})
    price: number;
    @Column()
    amount:number;
    @Column()
    image:string;
    @Column()
    idCategory:number
    @Column()
    description :string

}