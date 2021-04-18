import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actual-toolbar',
  templateUrl: './actual-toolbar.component.html',
  styleUrls: ['./actual-toolbar.component.css']
})
export class ActualToolbarComponent implements OnInit {
  @Input() deviceXs: boolean;
  
constructor(public mediaObserver: MediaObserver) {
  console.log(this.deviceXs +" testing")
}
 ngOnInit() {

}



}
