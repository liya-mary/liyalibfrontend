import { Component, OnInit } from '@angular/core';
import { bookservice } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookItem= {
    booktitle :'',
    bookauthor:'',
    genre:'',
    imageUrl:''}
  constructor(public bookservice:bookservice, private router:Router) { }

  ngOnInit(): void {
  }
  AddBook()
  {    
    this.bookservice.newBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}
