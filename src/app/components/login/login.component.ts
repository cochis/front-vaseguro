import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { SharedService } from '../../services/shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public status: string;
  public usuario: Usuario;
  public message: string;
  public token: any;
  public res: any;
  window: any;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _usuarioService: UsuarioService,
              private _sharedSerice: SharedService) {
    this.usuario = new Usuario('', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.window = window.scroll(0,0);
  }
  onSubmit(form) {
    this._usuarioService.login(form.value)
      .subscribe(
        res => {
          this.res = res;
          this.usuario = this.res.usuario;
          if (this.usuario.activo === 'false' ) {
            this.status = 'failed';
            this.message = ' El usuario esta inactivo';
          } else {
            this._sharedSerice.setSession('usuario', this.usuario);
            this._usuarioService.loginToken(form.value)
              .subscribe(
                // tslint:disable-next-line:no-shadowed-variable
                res => {
                  this._sharedSerice.setSession('token', res);
                  this._router.navigate(['/intra/home']);
                },
                err => {
                  console.log(err);
                });

          }



        },
        err => {
          return this.status = 'failed';
        }
      );
  }

}
