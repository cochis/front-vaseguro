// tslint:disable-next-line: class-name
export class FastCotizacion {
    constructor(
        public _id: string,
        public nombre:string,
        public telefono: string,
        public cp: string,
        public marca: string,
        public modelo: string,
        public version: string,
        public subversion: string,
        public enviado: Boolean,
        public contactado: Boolean,
        public falso: Boolean

    ) { }
}
