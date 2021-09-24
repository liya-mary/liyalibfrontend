import { Component, OnInit } from '@angular/core';
import { bookModel } from './book.model';
import { bookservice } from '../bookservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:bookModel[]=[];
  pageTitle: string = 'Books';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  /*book=[{
    booktitle :'',
    bookauthor:'',
    genre:'',
    imageUrl:''}]*/
  
    toggleImage(): void{
      this.showImage = !this.showImage;
    }

  constructor(public bookservice:bookservice, private router:Router,public _auth:AuthserviceService)  { }

  ngOnInit(): void {
    this.bookservice.getProducts().subscribe((data:any)=>{
      console.log(data);
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books);
  })
  }
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['updatebook']);

  }
  deleteProduct(product:any)
  {
    this.bookservice.deleteBook(product._id)
      .subscribe((data) => {
        this.books= this.books.filter(p => p !== product);
      })
    }
    role= localStorage.getItem('role')
}
