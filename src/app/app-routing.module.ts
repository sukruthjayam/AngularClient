import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstockComponent } from './addstock/addstock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { UpdCompComponent } from './upd-comp/upd-comp.component';
import { UpdIPOComponent } from './upd-ipo/upd-ipo.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UpdUserComponent } from './upd-user/upd-user.component';
import { CompMatchComponent } from './comp-match/comp-match.component';
import { ViewIPOComponent } from './view-ipo/view-ipo.component';


const routes: Routes = [

  { component: AddCompComponent, path: 'add-company' },
  {component: UpdCompComponent, path: 'update-company'},
  { component: AddstockComponent, path: 'add-stock' },
  {component: StockListComponent, path: 'stock-list'},
  {component: UpdIPOComponent, path: 'update-ipo'},
  {component: MenuComponent, path: 'menu'},
  {component:LoginComponent,path:'login'},
  //UserComponents
  {component:UserRegComponent,path:'register'},
  {component:UpdUserComponent,path:'update-profile'},
  {component:CompMatchComponent,path:'matching'},
  {component:ViewIPOComponent,path:'useripo'}
 //{ path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
