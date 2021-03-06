import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MatListModule } from '@angular/material/list';


//Prime
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { AsideComponent } from './components/shared/aside/aside.component';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { NegociosComponent } from './components/shared/negocios/negocios.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FieldsetModule } from 'primeng/fieldset';
import { ContactComponent } from './components/contact/contact.component';
import { CaptchaModule } from 'primeng/captcha';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {DialogModule} from 'primeng/dialog';
import {AccordionModule} from 'primeng/accordion';
import {DataViewModule} from 'primeng/dataview';

//Routes
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ContactoService } from './services/contacto.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/intra/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuIntraComponent } from './components/intra/shared/menu-intra/menu-intra.component';
import { AutosComponent } from './components/shared/negocios/autos/autos.component';
import { ServicesComponent } from './components/services/services.component';
import { InversionComponent } from './components/shared/negocios/inversion/inversion.component';
import { MotosComponent } from './components/shared/negocios/motos/motos.component';
import { PickupComponent } from './components/shared/negocios/pickup/pickup.component';
import { CamionesComponent } from './components/shared/negocios/camiones/camiones.component';
import { TractocamionesComponent } from './components/shared/negocios/tractocamiones/tractocamiones.component';
import { TaxiComponent } from './components/shared/negocios/taxi/taxi.component';
import { AvisoComponent } from './components/shared/aviso/aviso.component';
import { SiniestrosComponent } from './components/shared/anuncios/siniestros/siniestros.component';
import { VidaComponent } from './components/shared/negocios/vida/vida.component';
import { GmmComponent } from './components/shared/negocios/gmm/gmm.component';
import { HogarComponent } from './components/shared/negocios/hogar/hogar.component';
import { UberComponent } from './components/shared/negocios/uber/uber.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    QuotationsComponent,
    PromotionsComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    NegociosComponent,
    ContactComponent,
    LoginComponent,
    InicioComponent,
    ErrorComponent,
    MenuIntraComponent,
    AutosComponent,
    ServicesComponent,
    InversionComponent,
    MotosComponent,
    PickupComponent,
    CamionesComponent,
    TractocamionesComponent,
    TaxiComponent,
    AvisoComponent,
    SiniestrosComponent,
    VidaComponent,
    GmmComponent,
    HogarComponent,
    UberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    CarouselModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    TabViewModule,
    CodeHighlighterModule,
    CardModule,
    TooltipModule,
    TabMenuModule,
    ContextMenuModule,
    ScrollPanelModule,
    FieldsetModule,
    CaptchaModule,
    InputTextModule,
    CheckboxModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    EditorModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextareaModule,
    ListboxModule,
    InputMaskModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    TriStateCheckboxModule,
    MessageModule,
    HttpClientModule,
    MessagesModule,
    DialogModule,
    AccordionModule,
    DataViewModule
      ],
  providers: [MessageService, ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
