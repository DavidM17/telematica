import { Request, Response } from 'express';

import pool from '../database';
import { isDeepStrictEqual } from 'util';
class dataController{

    public async conseguir (req: Request,res: Response){
        const data = await pool.query('SELECT nombre FROM configuracion.hospital');
       
        res.json(data);

    }
    public async creararea (req: Request,res: Response){
        const nombre=req.body.nombre;
        const area=req.body.area;
        const camas=req.body.camas;
         // Json 
         const data = {
            nombre: nombre,
            camasasignadas:camas,
            area: area,
            
        }
        await pool.query('INSERT INTO configuracion.areahospital set ?',data);
        res.json("Agregado");
    }

    public async crearcama (req: Request,res: Response){
        const nombre=req.body.nombre;
        const area=req.body.area;
        const idcamas=req.body.idcama;
        const ubicacion=req.body.ubicacion;
        const estado=req.body.estado;
         
        await pool.query("INSERT INTO configuracion.camas (id, areaasociada, identificacioncama, ubicacion,estado) "+
        "SELECT configuracion.hospital.idhospital, '"+area+"', '"+idcamas+"', '"+ubicacion+"','"+estado+"' "+
        "FROM configuracion.hospital "+
        "WHERE configuracion.hospital.nombre = "+"'"+nombre+"'"+"")
        res.json("Agregado");
    }

    public async crearpaciente (req: Request,res: Response){
        const nombre=req.body.nombre;
        const cedula=req.body.cedula;
        const eps=req.body.ideps;
        const fecha1=req.body.fechai;
        const fecha2=req.body.fechas;
        const idcama=req.body.idcama;
        const alta=req.body.alta;

         // Json 
         const data = {
            nombre: nombre,
            cedula:cedula,
            eps:eps,
            fechaingreso:fecha1,
            fechasalida:fecha2,
            camaasignada:idcama,
            usuarioalta:alta
        }
        await pool.query('INSERT INTO configuracion.paciente set ?',data);
        res.json("Agregado");
    }

    public async actualizarpaciente (req: Request,res: Response){
        const cedula=req.body.cedula;
        const eps=req.body.ideps;
        const fecha2=req.body.fechas;
        const idcama=req.body.idcama;
        const alta=req.body.alta;

         // Json 
         const data = {
            eps:eps,
            fechasalida:fecha2,
            camaasignada:idcama,
            usuarioalta:alta
        }
        await pool.query('UPDATE configuracion.paciente set ? WHERE cedula = ?',[data,cedula]);
        res.json("Agregado");
    }

    public async crear (req: Request,res: Response){

        const nombre=req.body.nombre;
        const direccion=req.body.direccion;
        const ciudad=req.body.ciudad;
        const departamento=req.body.departamento;
        const latitud=req.body.latitud;
        const longitud=req.body.longitud;
        const eps=req.body.ideps;
        const nivel=req.body.nivel;
        const areas=req.body.idareas;
      
        // Json 
        const data = {
            nombre: nombre,
            direccion: direccion,
            ciudad: ciudad,
            departamento: departamento,
            latitud:latitud,
            longitud:longitud,
            ideps:eps,
            nivel:nivel,
            idareas:areas
        }
        
        await pool.query('INSERT INTO configuracion.hospital set ?',data);
        res.json("Agregado");
        
    
    }
}

export const datacontroller = new dataController();