import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PullService {

  private url= 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  constructor(private httpClient: HttpClient) { }

  getData()
  {
    return this.httpClient.get(this.url);
  }
}
