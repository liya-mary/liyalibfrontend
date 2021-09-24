import { Component, OnInit } from '@angular/core';
import { authorModel } from './author.model';
import { AuthserviceService } from '../authservice.service';
import { bookservice } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:authorModel[]=[];
  pageTitle: string = 'Authors';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

 
    toggleImage(): void{
      this.showImage = !this.showImage;
    }

  constructor(public bookservice:bookservice, public router:Router,public _auth:AuthserviceService) { }

  ngOnInit(): void {
    this.bookservice.getAuthors().subscribe((data:any)=>{
      console.log(data);
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors);
  })
  }
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteProduct(product:any)
  {
      this.bookservice.deleteAuthor(product._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== product);
      })
    }
    role= localStorage.getItem('role')
}
