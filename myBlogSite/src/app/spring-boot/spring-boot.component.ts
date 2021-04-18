import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spring-boot',
  templateUrl: './spring-boot.component.html',
  styleUrls: ['./spring-boot.component.css']
})
export class SpringBootComponent implements OnInit,OnDestroy {
  @Input() deviceXs: boolean;
  mediaSub: Subscription;
  constructor(public mediaObserver: MediaObserver) {
    console.log(this.deviceXs +" testing")
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
