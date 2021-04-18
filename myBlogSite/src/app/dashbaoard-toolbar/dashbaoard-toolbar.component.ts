import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashbaoard-toolbar',
  templateUrl: './dashbaoard-toolbar.component.html',
  styleUrls: ['./dashbaoard-toolbar.component.css']
})
export class DashbaoardToolbarComponent implements OnInit, OnDestroy  {

  mediaSub: Subscription;
    deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) {
    
  }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
 

}
