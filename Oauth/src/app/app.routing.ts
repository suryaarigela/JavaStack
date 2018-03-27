import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'profile', component: ProfileComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
