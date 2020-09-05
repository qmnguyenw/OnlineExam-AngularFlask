import { Exam } from '../model/exam.model';
import { API_URL } from '../env';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExamsApiService {
  constructor(private http: HttpClient) {}

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${API_URL}/exams`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }

  saveExam(exam: Exam): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(`${API_URL}/exams`, exam, httpOptions);
  }
}
