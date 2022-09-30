import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItem } from '../model/accordion-item';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private url: string = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getData(): Observable<AccordionItem[]> {
    return this.http.get<AccordionItem[]>(this.url);
  }
}
