// tslint:disable-next-line: class-name
export class Usuario {
    constructor(
        public _id: String,
        public nombre: String,
        public apellidoPaterno: String,
        public apellidoMaterno: String,
        public nick: string,
        public rol: string,
        public email: String,
        public password: String,
        public createAt: String,
        public image: String,
        public activo: string

    ) { }
}
