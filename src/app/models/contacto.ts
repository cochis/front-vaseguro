export class Contacto {
    constructor(
        public _id: string,
        public nombre: string,
        public correo: string,
        public negocio: string,
        public comentarios: string,
        public telefono: string,
        public mensaje: string,
        public contactado: Boolean,
        public falso: Boolean

    ) { }
}
