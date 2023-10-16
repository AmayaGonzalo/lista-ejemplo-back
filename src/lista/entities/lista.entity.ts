import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lista {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;
    
    @Column()
    nacionalidad:string;

    constructor(nombre:string, apellido:string, nacionalidad:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
    }

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }
    
    public setApellido(apellido:string):void{
        this.apellido = apellido;
    }

    public getApellido():string{
        return this.apellido;
    }

    public setNacionalidad(nacionalidad:string):void{
        this.nacionalidad = nacionalidad;
    }

    public getNacionlidad():string{
        return this.nacionalidad;
    }
}
