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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CriarAnimalComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, TokenStorage, AnimaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
