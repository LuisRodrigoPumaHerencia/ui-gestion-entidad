import { TipoContribuyente } from "./tipo-contribuyente";
import { TipoDocumento } from "./tipo-documento";

export class Entidad {
    idEntidad!:string;
    tipoDocumento!:TipoDocumento;
    nroDocumento!:string;
    razonSocial!:string;
    nombreComercial!:string;
    tipoContribuyente!:TipoContribuyente;
    direccion!:string;
    telefono!:string;
    estado!:boolean;
}
