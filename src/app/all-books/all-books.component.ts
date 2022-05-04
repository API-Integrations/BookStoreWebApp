import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit, OnDestroy {

  books: any;
  subscription: Subscription;

  constructor(private service: BookService) {
    this.subscription = new Subscription;
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.subscription = this.service.getBooks().subscribe(result => {
      this.books = result;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
