import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContectComponent } from './contect/contect.component';
import { ShopingComponent } from './shoping/shoping.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"apply-form",component:ApplyFormComponent},
    {path:"",component:MainDashboardComponent},
    {path:"navbar",component:NavbarComponent},
    {path:"footer",component:FooterComponent},
    {path:"contect",component:ContectComponent},
    {path:"shoping",component:ShopingComponent}
];
