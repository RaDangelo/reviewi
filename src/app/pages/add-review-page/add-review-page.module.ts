import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddReviewPagePage } from './add-review-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddReviewPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddReviewPagePage]
})
export class AddReviewPagePageModule {}
