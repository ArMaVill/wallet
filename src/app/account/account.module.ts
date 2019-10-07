import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AddAccountComponent } from './add-account/add-account.component';

@NgModule({
  declarations: [AddAccountComponent],
  imports: [CommonModule, AccountRoutingModule]
})
export class AccountModule {}
