import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-hospital-reg',
  templateUrl: './hospital-reg.component.html',
  styleUrls: ['./hospital-reg.component.css']
})
export class HospitalRegComponent implements OnInit {

  constructor(private dataservice: DataService) { }


  data ={
    nombre:"",
    direccion:"",
    ciudad:"",
    departamento:"",
    latitud:0,
    longitud:0,
    eps:"",
    nivel:0,
    urgencia:false,
    maternidad:false,
    uci:false,
    cirugia:false
  };

  eps:number=0;

  urgencia:number=0;
  uci:number=0;
  maternidad:number=0;
  cirugia:number=0;
  
  registrar(){
    console.log(this.data);
    switch (this.data.eps){

      case "Sura":
        this.eps=1;
      break;
      case "Comeva":
        this.eps=2;
      break;
      case "SaludTotal":
        this.eps=3;
      break;
      case "Publica":
        this.eps=4;
      break;
    }

    if(this.data.urgencia==true){
      this.urgencia = 1; // agregar los cambios en las tablas de areas
    }
    if(this.data.maternidad==true){
      this.maternidad=1;
    }
    if(this.data.uci==true){
      this.uci=1;
    }
    if(this.data.cirugia==true){
      this.cirugia=1;
    }
    
    this.dataservice.crearHospital(this.data.nombre,this.data.direccion,this.data.ciudad,this.data.departamento,
      this.data.latitud,this.data.longitud,this.eps,this.data.nivel,this.urgencia,this.uci,this.maternidad,this.cirugia).subscribe(
      res => {console.log(res)
      },
      err => console.error(err)
    );
    this.cirugia=0;
    this.uci=0;
    this.cirugia=0;
    this.maternidad=0;
  }
  

  ngOnInit() {
  
  }

}
