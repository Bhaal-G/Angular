import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { ContactComp } from './contact-comp/contact-comp';
import { AboutComp } from './about-comp/about-comp';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';
export const routes: Routes = [
    // {path:'',component:HomeComp},
    // {path:'about',component:AboutComp},
    // {path:'contact',component:ContactComp}

    // {
    //     path:'dashboard',
    //     component:Dashboard,  
    //     children:[
    //         {path:'profile',component:Profile},
    //         {path:'setting',component:Setting}        ]
    // },
    // {path:'',redirectTo:'dashboard',pathMatch:'full'},

    {path:'home',component:HomeComp},
    {
        path:'admin',
        loadComponent:()=>import('./admin/admin').then(m=>m.Admin)
    },
    {path:'',redirectTo:'home',pathMatch:'full'}


];
