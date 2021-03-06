import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/intra/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { AutosComponent } from './components/shared/negocios/autos/autos.component';
import { ServicesComponent } from './components/services/services.component';
import { InversionComponent } from './components/shared/negocios/inversion/inversion.component';
import { CamionesComponent } from './components/shared/negocios/camiones/camiones.component';
import { MotosComponent } from './components/shared/negocios/motos/motos.component';
import { PickupComponent } from './components/shared/negocios/pickup/pickup.component';
import { TractocamionesComponent } from './components/shared/negocios/tractocamiones/tractocamiones.component';
import { TaxiComponent } from './components/shared/negocios/taxi/taxi.component';
import { AvisoComponent } from './components/shared/aviso/aviso.component';
import { SiniestrosComponent } from './components/shared/anuncios/siniestros/siniestros.component';
import { VidaComponent } from './components/shared/negocios/vida/vida.component';
import { GmmComponent } from './components/shared/negocios/gmm/gmm.component';
import { HogarComponent } from './components/shared/negocios/hogar/hogar.component';
import { UberComponent } from './components/shared/negocios/uber/uber.component';
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'promociones', component: PromotionsComponent},
    {path: 'cotizaciones', component: QuotationsComponent},
    {path: 'servicios', component: ServicesComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'aviso', component: AvisoComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'intra/home', component: InicioComponent},
    {path: 'negocios/autos', component: AutosComponent},
    {path: 'negocios/inversion', component: InversionComponent},
    {path: 'negocios/carga', component: CamionesComponent},
    {path: 'negocios/motos', component: MotosComponent},
    {path: 'negocios/pickups', component: PickupComponent},
    {path: 'negocios/tractocamiones', component: TractocamionesComponent},
    {path: 'negocios/taxi', component: TaxiComponent},
    {path: 'negocios/uber', component: UberComponent},
    {path: 'negocios/vida', component: VidaComponent},
    {path: 'negocios/gmm', component: GmmComponent},
    {path: 'negocios/hogar', component: HogarComponent},
    {path: 'anuncios/siniestros', component: SiniestrosComponent},
    {path: '', pathMatch:  'full', redirectTo: 'home'},
    {path: '**', pathMatch:  'full', redirectTo: 'error'}
];
