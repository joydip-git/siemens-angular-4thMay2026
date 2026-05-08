import { Routes } from '@angular/router';
import { ProductContainer } from './modules/products/components/product-container/product-container';
import { ProductDetail } from './modules/products/components/product-detail/product-detail';
import { EditProduct } from './modules/products/components/edit-product/edit-product';
import { AddProduct } from './modules/products/components/add-product/add-product';
import { Home } from './modules/shared/components/home/home';
import { PageNotFound } from './modules/shared/components/page-not-found/page-not-found';
import { AuthGuard } from './modules/shared/services/auth.guard';

export const routes: Routes = [
    {
        path: 'login', loadComponent: () => import('./modules/auth/components/login/login').then(m => m.Login)
    },
    {
        path: 'register', loadComponent: () => import('./modules/auth/components/registration/registration').then(m => m.Registration)
    },
    {
        path: 'products',
        pathMatch: 'prefix',
        canActivate: [AuthGuard],
        children: [
            {
                path: '', loadComponent: () => import('./modules/products/components/product-container/product-container').then(m => m.ProductContainer)
            },
            {
                path: 'view/:id', component: ProductDetail
            },
            {
                path: 'edit', component: EditProduct
            },
            {
                path: 'add', component: AddProduct
            }
        ]
    },
    {
        path: 'home', component: Home
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFound
    }
];
