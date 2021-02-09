import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MissionComponent } from './mission/mission.component';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './list/list.component';
import { NewProductComponent } from './newproduct/newproduct.component';
import { UpdateProductComponent } from './updateproduct/updateproduct.component';
import { LogoutComponent } from './logout/logout.component';
import { List2Component } from './list2/list2.component';
import { Update2Component } from './update2/update2.component';
import { Newproduct2Component } from './newproduct2/newproduct2.component';



const routes: Routes = [{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'mission',component:MissionComponent},
{path:'contactus',component:ContactusComponent},
{path:'login',component:LoginComponent},
{path:'list2', component:List2Component},
{path:'update2', component:Update2Component},
{path: "add2",component:Newproduct2Component},
{path:'logout',component:LogoutComponent},
{path:'sign',component:SignComponent},
{path:"add",component:NewProductComponent},
{path:"update",component:UpdateProductComponent},
{path:'list',
canActivate:[AuthGuard], 
component:ListComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
