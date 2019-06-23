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
import { MedicamentoComponent } from './funcionalidades/crud/medicamento/medicamento.component';
import {MedicamentoService} from './services/medicamento.service';
import { CriarMedicamentoComponent } from './funcionalidades/crud/medicamento/criar-medicamento/criar-medicamento.component';
import { ConsultaComponent } from './funcionalidades/crud/consulta/consulta.component';
import { CriarRetornoComponent } from './funcionalidades/crud/consulta/criar-retorno/criar-retorno.component';
import { ConsultaService } from './services/consulta.service';
import { CriarConsultaComponent } from './funcionalidades/crud/consulta/criar-consulta/criar-consulta.component';

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
    path: 'animal/adicionar-animal',
    component: CriarAnimalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'animal',
    component: AnimalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'medicamento',
    component: MedicamentoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'medicamento/adicionar-medicamento',
    component: CriarMedicamentoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'consultas/marcar-retorno',
    component: CriarRetornoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'consultas/marcar-consulta',
    component: CriarConsultaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'consultas',
    component: ConsultaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CriarAnimalComponent,
    AnimalComponent,
    MedicamentoComponent,
    CriarMedicamentoComponent,
    ConsultaComponent,
    CriarRetornoComponent,
    CriarConsultaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, TokenStorage, AnimaisService, MedicamentoService, ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
