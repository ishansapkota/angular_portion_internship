import { Routes } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ListproductComponent } from './features/category/listproduct/listproduct.component';
import { AddproductComponent } from './features/category/addproduct/addproduct.component';
import { UpdateproductComponent } from './features/category/updateproduct/updateproduct.component';
import { ViewproductComponent } from './features/category/viewproduct/viewproduct.component';

export const routes: Routes = [
    {
        path: 'product/list',
        component:ListproductComponent
    },
    {
        path: 'product/list/add',
        component:AddproductComponent
    },
    {
        path:'product/list/update/:id',
        component:UpdateproductComponent
    },
    {
        path:'',
        redirectTo:'product/list',
        pathMatch:'full'
    },
    {
        path: 'product/list/view/:id',
        component:ViewproductComponent
    },
    
  
];
