import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../model/review';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.less']
})
export class ReviewListComponent {
  title = 'Bokrecensioner';
  loading = true;
  reviews: Review[] = [];
  displayedColumns = ['id','title','reviewtext','author','actions'];
  feedback: any = {};

  constructor(private http: HttpClient) {
      
  }

  ngOnInit() {
    this.loading = true;
    this.http.get<any>('http://localhost:8080/reviews').subscribe({
        next: data => {
            if (data._embedded != null) {
                this.reviews = data._embedded.recensionList;
            }
            this.loading = false;
            this.feedback = {};
        }
    });
  }

  delete(review: Review): void {
    if (confirm(`Är du säkert du vill ta bort ${review.bokNamn}?`)) {
      this.http.delete(`http://localhost:8080/reviews/${review.id}`).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Lyckades ta bort!'};
          setTimeout(() => {
            this.ngOnInit();
          }, 1000);
        },
        error: () => {
          this.feedback = {type: 'warning', message: 'Error att ta bort.'};
        }
      });
    }
  }

  protected readonly event = event;
}
