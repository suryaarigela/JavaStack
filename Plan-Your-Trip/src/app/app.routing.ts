import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
       path: '',  component: HomeComponent },
  {
       path: 'results',  component: SearchResultComponent },

];

export const routing = RouterModule.forRoot(routes);
