import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { ContactoService } from '../../services/contacto.service';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [ContactoService]
})
export class ContactComponent implements OnInit {
  public contacto: Contacto;
  public status: string;
  msgs: Message[] = [];
  constructor(private _contactoService: ContactoService,
    private messageService: MessageService) {
    this.contacto = new Contacto('', '', '', '', '', '', '', false, false);
    this.status = 'start';
  }

  ngOnInit() {
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: this.contacto.nombre , detail: 'Su mensaje ha sido enviado' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }


  onSubmit(form) {
    console.log(form.value);
    this._contactoService.sendContacto(this.contacto).subscribe(
      response => {
        if (response.contacto) {
          this.status = 'success';
          form.reset();
          this.showSuccess();
        } else {
          this.status = 'failed';
          this.showError();
        }

      },
      error => {
        this.showError();
      }
    );


  }
}
