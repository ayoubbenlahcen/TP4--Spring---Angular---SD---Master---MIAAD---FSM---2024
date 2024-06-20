import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {ProductsComponent} from "./products/products.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [

  {path : "login", component : LoginComponent},
  {path : "admin",
   component : AdminTemplateComponent ,
   canActivate: [AuthenticationGuard],  // cette c'est pour mettre le guard qui va voir est ce que je suis authenticated ou non

   children: [
              {path : "home", component : HomeComponent},
              {path : "products", component : ProductsComponent},
              {path : "newProduct",canActivate:[AuthorizationGuard],
               data :{requiredRoles : ['ADMIN']} , // ici en peut specifier les roles quand on veut donne a ce composant
               component : NewProductComponent},

              {path : "editProduct/:id",canActivate: [AuthorizationGuard],
               data :{requiredRoles : ['ADMIN']} ,
               component : EditProductComponent} ,
              {path : "notAuthorized", component : NotAuthorizedComponent}
          ]},

  {path : "", redirectTo: "login" , pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
