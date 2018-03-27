import { ObservableTestComponent } from './observable-test/observable-test.component';

import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
{
    path:'observe',
    component:ObservableTestComponent
},
];

export const routing = RouterModule.forRoot(routes);
