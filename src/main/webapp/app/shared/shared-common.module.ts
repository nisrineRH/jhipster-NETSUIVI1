import { NgModule } from '@angular/core';

import { Netsuivi1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Netsuivi1SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Netsuivi1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Netsuivi1SharedCommonModule {}
