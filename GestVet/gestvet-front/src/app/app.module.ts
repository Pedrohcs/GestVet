import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenStorage } from './services/token.storage';
import { AnimaisService } from './services/animais.service';
import { CriarAnimalComponent } from './funcionalidades/crud/animal/criar-animal/criar-animal.component';
import { AnimalComponent } from './funcionalidades/crud/animal/animal.component';
import {RealizarVendaComponent} from './funcionalidades/crud/vendas/realizar-venda/realizar-venda.component';
import {ConsultarVendaComponent} from './funcionalidades/crud/vendas/consultar-venda/consultar-venda.component';
import {VendasService} from './services/vendas.service';
import {UsersService} from './services/users.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'user/adicionar-animal',
    component: CriarAnimalComponent
  },
  {
    path: 'user/animal',
    component: AnimalComponent
  },
  {
    path: 'user/realizar-venda',
    component: RealizarVendaComponent
  },
  {
    path: 'user/consultar-venda',
    component: ConsultarVendaComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CriarAnimalComponent,
    AnimalComponent,
    RealizarVendaComponent,
    ConsultarVendaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, TokenStorage, AnimaisService, VendasService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
