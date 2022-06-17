import { Component } from '@angular/core';
import { PullService } from './service/pull.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pull-api-example';
  data: any;

  constructor(private service: PullService) {
  }

  ngOnInit() {
    this.service.getData()
      .subscribe(response => {
        this.data = response;
      })
  }
}
