import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-hospital-area',
  templateUrl: './hospital-area.component.html',
  styleUrls: ['./hospital-area.component.css']
})
export class HospitalAreaComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  data={
    nombre:{nombre:""},
    area:"",
    camas:0
  }
  hospitales:any = [];
  area:number;
  registrar(){
  
    switch (this.data.area){

      case "Urgencia":
        this.area=1;
      break;
      case "UCI":
        this.area=2;
      break;
      case "Maternidad":
        this.area=3;
      break;
      case "Cirugía":
        this.area=4;
      break;
    }
    this.dataservice.crearAreas(this.data.nombre.nombre,this.area,this.data.camas).subscribe(
      res => {console.error(res)
      },
      err => console.error(err)
    );
  }
  
  ngOnInit() {
    this.dataservice.getHospital().subscribe(
      res => {
        this.hospitales=res;
      },
      err => console.error(err)
    );
  }

}
