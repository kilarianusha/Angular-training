import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(500)
    // myNumbers.subscribe( (number: number) => {
    //   console.log('Packet Number ' + number)
    // } )
  }
}