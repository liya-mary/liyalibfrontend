import { Component, OnInit } from '@angular/core';
import { bookservice } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  author= {
    name :'',
    period:'',
    works:'',
    imageUrl:''}
  constructor(public bookservice:bookservice, private router:Router) { }

  ngOnInit(): void {
  }
  AddAuthor()
  {    
    this.bookservice.newAuthor(this.author);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
