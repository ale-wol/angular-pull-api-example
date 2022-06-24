import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PullService } from './service/pull.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pull-api-example';
  data: any;
  subscription: Subscription = Subscription.EMPTY;

  constructor(private service: PullService) {
  }

  ngOnInit() {
    this.subscription = this.service.getData()
      .subscribe(response => {
        this.data = response;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
