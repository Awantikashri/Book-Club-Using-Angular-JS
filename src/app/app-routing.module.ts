import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'top-10',component: BookComponent},
  //{ path: 'login', component: LoginComponent},
  //{ path : '**',component: Pagenotfound Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{}
