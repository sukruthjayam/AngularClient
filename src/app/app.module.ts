import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockService } from './services/stock.service';
import { AddstockComponent } from './addstock/addstock.component';
import { FormsModule } from '@angular/forms';
import { AddCompComponent } from './add-comp/add-comp.component';
import { CompanyService } from './services/company.service';
import { UpdCompComponent } from './upd-comp/upd-comp.component';
import { UpdIPOComponent } from './upd-ipo/upd-ipo.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { SectorService } from './services/sector.service';
import { JWTokenService } from './jwtoken.service';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UpdUserComponent } from './upd-user/upd-user.component';
import { CompMatchComponent } from './comp-match/comp-match.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ViewIPOComponent } from './view-ipo/view-ipo.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    AddstockComponent,
    AddCompComponent,
    UpdCompComponent,
    UpdIPOComponent,
    MenuComponent,
    LoginComponent,
    UserRegComponent,
    UpdUserComponent,
    CompMatchComponent,
    UserMenuComponent,
    ViewIPOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ StockService,CompanyService,LoginService,SectorService,JWTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
