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

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'promociones', component: PromotionsComponent},
    {path: 'cotizaciones', component: QuotationsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'intra/home', component: InicioComponent},
    {path: '', pathMatch:  'full', redirectTo: 'home'},
    {path: '**', pathMatch:  'full', redirectTo: 'error'}
];
