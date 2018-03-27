import { NgModule, ModuleWithProviders }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';


 import { SsnDirective } from './ssn.directive';
 import { SsnPipe }               from './ssn.pipe';
 
@NgModule({
    imports: [CommonModule, FormsModule],      // module dependencies

    declarations: [ SsnPipe, SsnDirective ],  // components and directives

    exports: [ CommonModule, FormsModule, SsnPipe, SsnDirective ],
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

}