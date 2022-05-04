import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public basePath: string = 'https://localhost:5001/api'

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any> {
    let URL: string = this.basePath + '/books';
    return this.http.get(URL);
  }

  public addBook(book: any): Observable<any> {
    let URL: string = this.basePath + '/books';
    return this.http.post(URL, book);
  }
}
