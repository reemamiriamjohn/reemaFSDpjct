import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AuthService} from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './list/list.component';
import {TokenInterceptorService } from './token-interceptor.service';
import { ProductService } from './product.service';
import { NewProductComponent } from './newproduct/newproduct.component';
import { UpdateProductComponent } from './updateproduct/updateproduct.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { List2Component } from './list2/list2.component';
import { Update2Component } from './update2/update2.component';
import { Newproduct2Component } from './newproduct2/newproduct2.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
    
    HomeComponent,
    
    AboutComponent,
    
    MissionComponent,
    
    ContactusComponent,
    
    LoginComponent,
    
    SignComponent,
    
    ListComponent,
    
    NewProductComponent,
    
    UpdateProductComponent,
    
    LogoutComponent,
    
    List2Component,
    
    Update2Component,
    
    Newproduct2Component
    

    
    

    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
