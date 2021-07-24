import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamsApiService } from './service/exams-api.service';
import { ExamFormComponent } from './exams/exam-form/exam-form.component';
import { ExamsComponent } from './exams/exams.component';
import { MaterialModule } from './material/material.module';

const appRoutes: Routes = [
  { path: 'new-exam', component: ExamFormComponent },
  { path: '', component: ExamsComponent },
];

@NgModule({
  declarations: [AppComponent, ExamFormComponent, ExamsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MaterialModule,
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
