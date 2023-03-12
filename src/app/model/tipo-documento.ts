import { Entidad } from "./entidad";

export class TipoDocumento {
    idTipoDocumento!:string;
    codigo!:string;
    nombre!:string;
    descripcion!:string;
    estado!:boolean;
    listaEntidades!:Entidad[];
}
