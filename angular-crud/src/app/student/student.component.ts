import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  public studentForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  public saveStudent(): void {
    if (this.studentForm.valid) {
      this.service
        .saveStudentData(this.studentForm.value)
        .subscribe((response) => {
          this.toastr.success('Data saved successfully!', 'Sucess');
          this.studentForm.reset();
        });
    }
  }
}
