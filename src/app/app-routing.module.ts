import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLoginComponent } from "./user/user-login.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "login",
    component: UserLoginComponent
  },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
