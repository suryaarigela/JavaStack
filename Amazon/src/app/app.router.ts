import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router';
const route:Routes=[
{path:'',
component:HomeComponent
},
{path:'login',
component:LoginComponent
}
]
export const routing=RouterModule.forRoot(route);