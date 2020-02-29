import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
const routes: Routes = [{
  path: '', component: DefaultComponent ,
  children: [{
    path: '',
    component: DashboardComponent,
  }]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
