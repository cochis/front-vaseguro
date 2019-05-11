import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { ContactComponent } from './components/contact/contact.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'promociones', component: PromotionsComponent},
    {path: 'cotizaciones', component: QuotationsComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '', pathMatch:  'full', redirectTo: 'home'},
    {path: '**', pathMatch:  'full', redirectTo: 'home'}
];