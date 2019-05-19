// tslint:disable-next-line: class-name
export class FastCotizacion {
    constructor(
        public _id: string,
        public cp: number,
        public marca: string,
        public modelo: number,
        public version: string,
        public subversion: string,
        public enviado: Boolean,
        public contactado: Boolean,
        public falso: Boolean

    ) { }
}
