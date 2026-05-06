import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { PracticesComponent } from './pages/practices';
import { TeamComponent } from './pages/team';
import { ContactComponent } from './pages/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'practices', component: PracticesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
