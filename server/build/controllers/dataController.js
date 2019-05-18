"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class dataController {
    conseguir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT nombre FROM configuracion.hospital');
            res.json(data);
        });
    }
    creararea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.body.nombre;
            const area = req.body.area;
            const camas = req.body.camas;
            // Json 
            const data = {
                nombre: nombre,
                camasasignadas: camas,
                area: area,
            };
            yield database_1.default.query('INSERT INTO configuracion.areahospital set ?', data);
            res.json("Agregado");
        });
    }
    crearcama(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.body.nombre;
            const area = req.body.area;
            const idcamas = req.body.idcama;
            const ubicacion = req.body.ubicacion;
            const estado = req.body.estado;
            yield database_1.default.query("INSERT INTO configuracion.camas (id, areaasociada, identificacioncama, ubicacion,estado) " +
                "SELECT configuracion.hospital.idhospital, '" + area + "', '" + idcamas + "', '" + ubicacion + "','" + estado + "' " +
                "FROM configuracion.hospital " +
                "WHERE configuracion.hospital.nombre = " + "'" + nombre + "'" + "");
            res.json("Agregado");
        });
    }
    crearpaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.body.nombre;
            const cedula = req.body.cedula;
            const eps = req.body.ideps;
            const fecha1 = req.body.fechai;
            const fecha2 = req.body.fechas;
            const idcama = req.body.idcama;
            const alta = req.body.alta;
            // Json 
            const data = {
                nombre: nombre,
                cedula: cedula,
                eps: eps,
                fechaingreso: fecha1,
                fechasalida: fecha2,
                camaasignada: idcama,
                usuarioalta: alta
            };
            yield database_1.default.query('INSERT INTO configuracion.paciente set ?', data);
            res.json("Agregado");
        });
    }
    actualizarpaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cedula = req.body.cedula;
            const eps = req.body.ideps;
            const fecha2 = req.body.fechas;
            const idcama = req.body.idcama;
            const alta = req.body.alta;
            // Json 
            const data = {
                eps: eps,
                fechasalida: fecha2,
                camaasignada: idcama,
                usuarioalta: alta
            };
            yield database_1.default.query('UPDATE configuracion.paciente set ? WHERE cedula = ?', [data, cedula]);
            res.json("Agregado");
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = req.body.nombre;
            const direccion = req.body.direccion;
            const ciudad = req.body.ciudad;
            const departamento = req.body.departamento;
            const latitud = req.body.latitud;
            const longitud = req.body.longitud;
            const eps = req.body.ideps;
            const nivel = req.body.nivel;
            const areas = req.body.idareas;
            // Json 
            const data = {
                nombre: nombre,
                direccion: direccion,
                ciudad: ciudad,
                departamento: departamento,
                latitud: latitud,
                longitud: longitud,
                ideps: eps,
                nivel: nivel,
                idareas: areas
            };
            yield database_1.default.query('INSERT INTO configuracion.hospital set ?', data);
            res.json("Agregado");
        });
    }
}
exports.datacontroller = new dataController();
