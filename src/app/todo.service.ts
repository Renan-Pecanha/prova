import { todo } from './todo/todo.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class todoService {

  private userURL = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getToDos(): Observable<todo[]> {
    return this.http.get<todo[]>(this.userURL);
  }
}