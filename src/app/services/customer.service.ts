import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { CustomerData } from '../utils/types'
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  constructor(private http: HttpClient) { 
  }

  getCustomer(query: object): Observable<any>{
    return this.http.post('http://3.144.190.154:8090/pruebasunbelt-0.0.1-SNAPSHOT/api/getCustomerByDoc', query);
  }
}


/*@ngIf (showTable) {
  <table>
    <!-- full table -->
  </table>
} @else {
  <ul>
    <li><!-- full list --></li>
  <ul>
}


@for (item of items; track item.id) {
  <p>{{ item }}</p>
}

*/
