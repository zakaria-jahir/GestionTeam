import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/component/login/login.component';
import { TabBordComponent } from './modules/DASH/component/tab-bord/tab-bord.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:TabBordComponent}
];
