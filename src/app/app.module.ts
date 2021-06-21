import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaPlanComponent } from './components/media-plan/media-plan.component';
import { SpendingsComponent } from './components/spendings/spendings.component';

@NgModule({
  declarations: [AppComponent, MediaPlanComponent, SpendingsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
