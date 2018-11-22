import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const APP_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component:  NopagefoundComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});