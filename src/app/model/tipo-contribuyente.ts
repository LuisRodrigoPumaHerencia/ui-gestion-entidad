import { Entidad } from "./entidad";

export class TipoContribuyente {
    idTipoContribuyente!:string;
    nombre!:string;
    estado!:boolean;
    listaEntidades!:Entidad[];
}
