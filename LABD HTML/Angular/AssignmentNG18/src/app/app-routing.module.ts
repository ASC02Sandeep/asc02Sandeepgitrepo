import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: ListUserComponent, canActivate: [AuthGuardService] },  
    { path: 'update/:id', component: UpdateUserComponent },  
    { path: 'register', component: RegisterComponent }, 
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect default path to login
    { path: '**', component: LoginComponent }  // Wildcard route for 404 errors
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
