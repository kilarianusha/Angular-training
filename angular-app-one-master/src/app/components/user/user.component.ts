import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Observable - params
    this.route.params
    // Subscriber - handle the data, handle the error, handle the completion
      .subscribe(
        // Handling the data
        (params: Params) => {
          this.id = +params['id'];
        },
        // Handling the Error
        () => {

        },
        // Handling the Completion
        () => {

        }
      );
  }

}
