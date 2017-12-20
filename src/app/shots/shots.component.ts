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

  public shots = new Array<any>();
  public shotDetail;

  constructor(
    private dribbbleProvider: DribbbleProvider,
  ) { }

  ngOnInit() {
    this.dribbbleProvider.getShots().subscribe(data=>{
      const response = (data as any);
      const object = JSON.parse(response._body);
      this.shots = object;
      
    }, error=>{
      console.log(error);
    })
  }

  shotDetails(shotId){
    this.dribbbleProvider.getShotDetails(shotId).subscribe(data=>{
      let apiReturn = (data as any)._body;
      this.shotDetail = JSON.parse(apiReturn);
    }, error=>{
      console.log(error);
    })
  }

  likeShot(shotId){
    this.dribbbleProvider.likeShot(shotId).subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    })
  }

}
