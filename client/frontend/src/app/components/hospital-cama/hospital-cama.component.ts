import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-hospital-cama',
  templateUrl: './hospital-cama.component.html',
  styleUrls: ['./hospital-cama.component.css']
})
export class HospitalCamaComponent implements OnInit {

  constructor(private dataservice: DataService) { }


  data={
    nombre:{nombre:""},
    area:"",
    idcama:"",
    ubicacion:"",
    estado:""
  }

  hospitales:any = [];
  area:number;

  registrar(){

    console.log(this.data);
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
    this.dataservice.crearCamas(this.data.nombre.nombre,this.area,this.data.idcama,
      this.data.ubicacion,this.data.estado).subscribe(
      res => {console.log(res)
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
