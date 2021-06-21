import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaPlanComponent } from './components/media-plan/media-plan.component';
import { SpendingsComponent } from './components/spendings/spendings.component';

const routes: Routes = [
  { path: 'media-plan', component: MediaPlanComponent },
  { path: 'spendings', component: SpendingsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'media-plan' },
  { path: '**', redirectTo: 'media-plan' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
