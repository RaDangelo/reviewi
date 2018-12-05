import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getReviews() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://localhost:8080/api/reviews')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
    // .map(res => res.json())
  }

  createReview(review) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteReview(id) {

    this.http.delete('http://localhost:8080/api/reviews/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }
}
