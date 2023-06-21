import { HomeComponent } from './home/home.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewAddComponent } from './review-add/review-add.component'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reviews',
    component: ReviewListComponent
  },
  {
      path: 'reviews/add',
      component: ReviewAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
