import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { Review } from '../../model/review';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-review-add',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule, MatButtonModule, RouterLink, 
    MatDatepickerModule, MatIconModule, MatNativeDateModule, MatTooltipModule],
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.less']
})
export class ReviewAddComponent implements OnInit {
    review!: Review;
    feedback: any = {};
    
    constructor(private route: ActivatedRoute, private router: Router,
              private http: HttpClient) {
    }
    
    ngOnInit() {
        this.review = new Review();
    }
    
    async cancel() {
        await this.router.navigate(['/reviews']);
    }
    
    save() {
        const id = this.review.id;
        const method = 'post';

        this.http[method]<Review>('http://localhost:8080/reviews', this.review).subscribe({
          next: () => {
            this.feedback = {type: 'success', message: 'Lyckades spara!'};
            setTimeout(async () => {
              await this.router.navigate(['/reviews']);
            }, 1000);
          },
          error: () => {
            this.feedback = {type: 'error', message: 'Error vid sparning'};
          }
        });
    }
    
}
