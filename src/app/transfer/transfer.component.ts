import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { log } from 'util';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accounts: any[];
  toAccounts = [];
  transferForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  get f() {
    return this.transferForm.controls;
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(x => (this.accounts = x));

    this.transferForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      amount: ['', Validators.required]
    });
    this.accountToTransfer(this.data.selectedAccount);
  }

  accountToTransfer(value) {
    this.toAccounts = [];
    for (const account of this.accounts) {
      this.toAccounts.push(account);
    }

    this.toAccounts.splice(value, 1);
  }

  onChange(event: any) {
    this.accountToTransfer(parseInt(event.target.value));
  }

  onSubmit() {
    this.accountService.transfer(
      this.f.from.value,
      this.f.to.value,
      this.f.amount.value
    );
    this.dialogRef.close(false);
  }
}
