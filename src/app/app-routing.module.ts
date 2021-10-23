import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';

const routes: Routes = [
  {path: '', component: TodosComponent},  //Do not add slash for path in Angular
  {path: 'about', component: AboutComponent}  //Display router about endpoint. Where? => Router outlet.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
