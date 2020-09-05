import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Exam } from '../model/exam.model';
import { ExamsApiService } from '../service/exams-api.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit, OnDestroy {
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
