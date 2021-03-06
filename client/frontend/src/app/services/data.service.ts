import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI = 'http://ec2-18-228-196-243.sa-east-1.compute.amazonaws.com:3000/api';
  

  constructor(private http: HttpClient) { }

  getHospital(){
    return this.http.get(`${this.API_URI}/hospital`)
  }

  crearAreas(nombre:string,area:number,camas:number){
    return this.http.post(`${this.API_URI}/hospital/area`,{nombre,area,camas})
  }

  crearCamas(nombre:string,area:number,idcama:string,ubicacion:string,estado:string){
    return this.http.post(`${this.API_URI}/hospital/camas`,{nombre,area,idcama,ubicacion,estado})
  }

  crearPaciente(hospital:string,nombre:string,cedula:number,ideps:number,fechai:string,fechas:string,idcama:string,alta:boolean){
    return this.http.post(`${this.API_URI}/hospital/paciente`,{hospital,nombre,cedula,ideps,fechai,fechas,idcama,alta})
  }

  actualizarPaciente(cedula:number,ideps:number,fechas:string,idcama:string,alta:boolean){
    return this.http.put(`${this.API_URI}/hospital/paciente`,{cedula,ideps,fechas,idcama,alta})
  }

  crearHospital(nombre:string,direccion:string,ciudad:string,departamento:string,
    latitud:number,longitud:number,ideps:number,nivel:number,urgencia:number,uci:number,maternidad:number,cirugia:number){
    return this.http.post(`${this.API_URI}/hospital`,{nombre,direccion,ciudad,departamento,
      latitud,longitud,ideps,nivel,urgencia,uci,maternidad,cirugia})
      
  }
}
