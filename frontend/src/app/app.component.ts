import { ExamsApiService } from './exams/exams-api.service';
import { Exam } from './exams/exam.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  examsListSubs: Subscription;
  examsList: Exam[];

  constructor(private examsApi: ExamsApiService) {}

  ngOnInit(): void {
    this.examsListSubs = this.examsApi.getExams().subscribe((res: Exam[]) => {
      this.examsList = res;
    }, console.error);
  }

  ngOnDestroy(): void {
    this.examsListSubs.unsubscribe();
  }
}
