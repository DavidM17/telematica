/* Socket configuration */ 
import { Router } from 'express';
import { datacontroller } from '../controllers/dataController';

class indexRoutes {

    public router: Router = Router(); 
    

    constructor() {

        this.config();
        
    }
    
    config(): void{
        this.router.get('/api/hospital',datacontroller.conseguir); 
        this.router.post('/api/hospital',datacontroller.crear);
        this.router.post('/api/hospital/area',datacontroller.creararea); 
        this.router.post('/api/hospital/camas',datacontroller.crearcama);
        this.router.post('/api/hospital/paciente',datacontroller.crearpaciente);  
        this.router.put('/api/hospital/paciente',datacontroller.actualizarpaciente);
        this.router.post('/api/hospital/visualizacion',datacontroller.prueba)
    }


}

const indexroutes = new indexRoutes();
export default indexroutes.router;