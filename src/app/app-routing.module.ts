import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLoginComponent } from "./user/user-login.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "login",
    component: UserLoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  { path: "", component: HomeComponent },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(mod => mod.DashboardModule)
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then(mod => mod.ContactModule)
  },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then(mod => mod.AboutModule)
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
