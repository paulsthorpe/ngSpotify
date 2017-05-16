import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService]
})
export class AppComponent {
  title = 'app works!';
  public currentPlayer;

  constructor(private spotify: RequestService){}

  ngOnInit(){
    this.getCurrent();
  }

  getCurrent(){
    this.spotify.getCurrentTrack().subscribe(data => this.currentPlayer);
    console.log(this.currentPlayer);
  }
}
