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
            area:area
            
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
        const hospital=req.body.hospital.nombre;
        const nombre=req.body.nombre;
        const cedula=req.body.cedula;
        const eps=req.body.ideps;
        const fecha1=req.body.fechai;
        const fecha2=req.body.fechas;
        const idcama=req.body.idcama;
        const alta=req.body.alta;

        console.log(hospital)
         // Json 
         const data = {
            hospital:hospital,
            nombre: nombre,
            cedula:cedula,
            eps:eps,
            fechaingreso:fecha1,
            fechasalida:fecha2,
            camaasignada:idcama,
            usuarioalta:alta
        }
        await pool.query('INSERT INTO configuracion.paciente set ?',data);
        await pool.query("UPDATE configuracion.camas set estado='Ocupado' WHERE identificacioncama = ?",idcama);
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
        if (alta==1){
            await pool.query("UPDATE configuracion.camas set estado='Libre' WHERE identificacioncama = ?",idcama);
        }
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
    
        const urgencia=req.body.urgencia;
        const uci=req.body.uci;
        const maternidad=req.body.maternidad;
        const cirugia=req.body.cirugia;
      
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
            urgencia:urgencia,
            uci:uci,
            maternidad:maternidad,
            cirugia:cirugia
        }
        
        await pool.query('INSERT INTO configuracion.hospital set ?',data);
        res.json("Agregado");
        
    
    }

    public async prueba (req: Request,res: Response){
        const nombre=req.body.nombre;
         
        const data = await pool.query("SELECT d.area, c.identificacioncama, c.estado "+
        "FROM configuracion.camas as c "+
        "JOIN configuracion.areahospital as d ON d.area = c.id "+
        "WHERE d.nombre = "+"'"+nombre+"'")
        res.json(data);
    }
}

export const datacontroller = new dataController();