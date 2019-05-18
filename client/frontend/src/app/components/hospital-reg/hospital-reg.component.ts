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

  area:number=1;
  eps:number=0;

  
  registrar(){
    console.log(this.data);
    switch (this.data.eps){

      case "Eps 1":
        this.eps=1;
      break;
      case "Eps 2":
        this.eps=2;
      break;
      case "Eps 3":
        this.eps=3;
      break;
      case "Eps 4":
        this.eps=4;
      break;
    }

    if(this.data.urgencia==true){
      this.area = this.area*2;
    }
    if(this.data.maternidad==true){
      this.area=this.area*4;
    }
    if(this.data.uci==true){
      this.area=this.area*3;
    }
    if(this.data.cirugia==true){
      this.area=this.area*4;
    }
    
    this.dataservice.crearHospital(this.data.nombre,this.data.direccion,this.data.ciudad,this.data.departamento,
      this.data.latitud,this.data.longitud,this.eps,this.data.nivel,this.area).subscribe(
      res => {console.log(res)
      },
      err => console.error(err)
    );
  }
  

  ngOnInit() {
  
  }

}
