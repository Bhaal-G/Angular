import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Dashboard } from './dashboard/dashboard';
import { canDeactivateGuard } from './can-deactivate-guard';
import { Profile } from './profile/profile';
import { ProductComp } from './product-comp/product-comp';

export const routes: Routes = [

    {path:'login',component:Login},
    {path:'dashboard',
        component:Dashboard,
        canActivate:[authGuard]
    },
    {
        path:'profile',
        component:Profile,
        canDeactivate:[canDeactivateGuard]
    },
    {
        path:'product/:id',component: ProductComp
    }    
    ,
    {path:'',redirectTo:'login',pathMatch:'full'}



];
