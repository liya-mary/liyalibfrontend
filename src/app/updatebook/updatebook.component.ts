import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookservice } from '../bookservice.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  bookItem= {
    booktitle :'',
    bookauthor:'',
    genre:'',
    imageUrl:''}
  constructor(private router:Router,private bookservice:bookservice) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editProductId");
    this.bookservice.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookservice.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
