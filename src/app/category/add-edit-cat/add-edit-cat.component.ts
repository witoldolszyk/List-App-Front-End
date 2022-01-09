import { Component, OnInit, Input  } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {



  constructor(private service:SharedService) { }

  @Input() cat:any;
  CategoryId:string="";
  CategoryName:string="";
  Ordering:string="";

  ngOnInit(): void {
    this.CategoryId=this.cat.CategoryId;
    this.CategoryName=this.cat.CategoryName;
    this.Ordering=this.cat.Ordering;
  }

  addCategory(){
    var val = {
      CategoryId:this.CategoryId,
      CategoryName:this.CategoryName,
      Ordering:this.Ordering
    };
    this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var val = {
      CategoryId:this.CategoryId,
      CategoryName:this.CategoryName,
      Ordering:this.Ordering
    };
    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
