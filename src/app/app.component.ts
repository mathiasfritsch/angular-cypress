import { Component } from '@angular/core';
import Product from './product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.products$ = this.http.get<any>('http://localhost:4200/api/products');
  }

  products$: Observable<Product[]>;

  getData() {}
  title = 'some title';
}
