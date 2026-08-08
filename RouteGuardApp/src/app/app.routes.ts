import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Dashboard } from './dashboard/dashboard';
import { canDeactivateGuard } from './can-deactivate-guard';
import { Profile } from './profile/profile';
import { ProductComp } from './product-comp/product-comp';
import { ProductsComponent } from './products-component/products-component';

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
        path:'product', component: ProductsComponent
    },
    {
        path:'product/:id', component: ProductComp
    },
    {path:'', redirectTo:'login', pathMatch:'full'},
    {
        path:'products', component: ProductsComponent
    }


];
