import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes =[{
    path: '',
   children:[
     {path:'',pathMatch:'full',redirectTo:'dashboard'},
     {path:'issue',loadChildren:'./pages/issue/issue.module#IssueModule'},
     {path:'dashboard',loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'},
     {path:'project',loadChildren:'./pages/project/project.module#ProjectModule'}
   ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
