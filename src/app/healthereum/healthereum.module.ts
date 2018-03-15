import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HealthereumMarketComponent} from './healthereum-market/healthereum-market.component';
import {UtilModule} from '../../util/util.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilModule
  ],
  declarations: [HealthereumMarketComponent],
  exports: [HealthereumMarketComponent]
})
export class HealthereumModule {
}
