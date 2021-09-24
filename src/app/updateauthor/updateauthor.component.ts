import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bookservice } from '../bookservice.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  authorItem= {
    name :'',
    period:'',
    works:'',
    imageUrl:''}
  constructor(private router:Router,private bookservice:bookservice){ }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editProductId");
    this.bookservice.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.bookservice.editauthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}
