import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamsApiService } from '../../service/exams-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss'],
})
export class ExamFormComponent implements OnInit {
  exam = {
    title: '',
    description: '',
  };

  constructor(private examsApi: ExamsApiService, private router: Router) {}

  ngOnInit(): void {}

  updateTitle(event: any): void {
    this.exam.title = event.target.value;
  }

  updateDescription(event: any): void {
    this.exam.description = event.target.value;
  }

  saveExam(): void {
    this.examsApi.saveExam(this.exam).subscribe(
      () => this.router.navigate(['/']),
      (error) => alert(error.message)
    );
  }
}
