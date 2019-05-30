import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-hospital-paciente',
  templateUrl: './hospital-paciente.component.html',
  styleUrls: ['./hospital-paciente.component.css']
})
export class HospitalPacienteComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  model1: NgbDateStruct;
  model2: NgbDateStruct;

  data={
    nombre:"",
    cedula:0,
    eps:"",
    idcama:"",
    alta:false,
    hospital:""
  }

  hospitales:any=[];
  actualizar=false;
  fecha1:any;
  fecha2:any;
  eps:number=0;
  registrar(){
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
  
    this.fecha1=this.model1.year+"-"+this.model1.month+"-"+this.model1.day;

    this.dataservice.crearPaciente(this.data.hospital,this.data.nombre,this.data.cedula,this.eps,this.fecha1,"",this.data.idcama,this.data.alta).subscribe(
      res => {console.log(res)
      },
      err => console.error(err)
    );
  
    
  }

  actualizarpaciente(){
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
  
    this.fecha2=this.model2.year+"-"+this.model2.month+"-"+this.model2.day;

    this.dataservice.actualizarPaciente(this.data.cedula,this.eps,this.fecha2,this.data.idcama,this.data.alta).subscribe(
      res => {console.log(res)
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.actualizar=false;
    this.dataservice.getHospital().subscribe(
      res => {
        this.hospitales=res;
      },
      err => console.error(err)
    );
  }

}
