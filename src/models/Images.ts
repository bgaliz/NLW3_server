import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('orphanages')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.image, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}