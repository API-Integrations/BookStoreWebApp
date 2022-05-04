import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnDestroy {

  public bookForm: FormGroup;
  subscription: Subscription

  constructor(private formBuilder: FormBuilder, private service: BookService) {
    this.bookForm = this.formBuilder.group({});
    this.subscription = new Subscription;
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public saveBook(): void {
    this.subscription = this.service.addBook(this.bookForm.value).subscribe(result => {
      alert(`New book added with id: ${result}`);
    });
  }

  private init(): void {
    this.bookForm.addControl('title', new FormControl());
    this.bookForm.addControl('description', new FormControl());
  }
}
