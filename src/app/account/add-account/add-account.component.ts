import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { MatDialogRef } from '@angular/material';
import { AccountComponent } from '../account.component';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  onAdd = new EventEmitter();

  colors: any = [
    { value: '#00cc4e', name: 'VERDE' },
    { value: '#ba2402', name: 'ROJO' },
    { value: '#f5b642', name: 'AMARILLO' },
    { value: '#7842f5', name: 'MORADO' },
    { value: '#009ccc', name: 'AZUL' }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      balance: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  get f() {
    return this.accountForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.accountForm.invalid) {
      return;
    }

    this.loading = true;
    const newAccount = {
      name: this.f.name.value,
      balance: this.f.balance.value,
      color: this.f.color.value
    };

    this.accountService.add(newAccount).subscribe(() => this.onAdd.emit());
    this.dialogRef.close(false);
    return false;
  }
}
