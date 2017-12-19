import { Component, OnInit } from '@angular/core';
import { DribbbleProvider } from '../../providers/dribbble/dribbble';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css'],
  providers: [
    DribbbleProvider
  ]
})
export class ShotsComponent implements OnInit {

  constructor(
    private dribbbleProvider: DribbbleProvider,
  ) { }

  ngOnInit() {
    this.dribbbleProvider.getShots().subscribe(data=>{
      const response = (data as any);
      const object = JSON.parse(response._body);
      console.log(object);
    }, error=>{
      console.log(error);
    })
  }

}
