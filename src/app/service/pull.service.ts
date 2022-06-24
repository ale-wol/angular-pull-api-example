import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PullService {

  private url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    let responseData = this.httpClient.get(this.url);
    return responseData;
  }
}
