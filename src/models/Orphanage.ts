//models, todas as classes são uma representação das tabelas em classes.

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Images'

//Decorator é basicamente usado em propriedades, classes ou em funções.

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    lontitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image=> image.orphanage)
    @JoinColumn({name:'orphanages_id'})
    image: Image[]
}