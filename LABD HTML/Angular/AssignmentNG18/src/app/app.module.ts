import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListUserComponent } from "./list-user/list-user.component";  
import { UpdateUserComponent } from "./update-user/update-user.component";  
import { RegisterComponent } from "./register/register.component";
import { AuthGuardService } from './service/auth-guard.service';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,  
    UpdateUserComponent,  
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuardService],  
  bootstrap: [AppComponent]
})
export class AppModule {}
