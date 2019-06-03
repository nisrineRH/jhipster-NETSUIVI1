import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Netsuivi1SharedLibsModule, Netsuivi1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Netsuivi1SharedLibsModule, Netsuivi1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Netsuivi1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Netsuivi1SharedModule {
  static forRoot() {
    return {
      ngModule: Netsuivi1SharedModule
    };
  }
}
