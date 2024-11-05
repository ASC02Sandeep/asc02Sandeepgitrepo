import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";

const routes : Routes = [
    {path : '', component: LoginComponent},
    {path: 'employees', component:ListEmpComponent}
]
@NgModule({
    // declarations:[AppComponent],
    imports : [RouterModule.forRoot(routes)],
    // imports: [BrowserModule, HttpClientModule],
    exports: [RouterModule],
    // bootstrap : [AppComponent]
})
export class AppRoutingModule{

}