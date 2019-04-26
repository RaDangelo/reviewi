import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddReviewPage } from '../pages/add-review-page/add-review-page';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  reviews: any;

  constructor(public nav: NavController, public reviewService: ReviewsService, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {

    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });

  }

  addReview() {

    const modal = this.modalCtrl.create(AddReviewPage);

    modal.onDidDismiss(review => {
      if (review) {
        this.reviews.push(review);
        this.reviewService.createReview(review);
      }
    });

    modal.present();

  }

  deleteReview(review) {

    // Remove locally
    const index = this.reviews.indexOf(review);

    if (index > -1) {
      this.reviews.splice(index, 1);
    }

    // Remove from database
    this.reviewService.deleteReview(review._id);
  }
}
