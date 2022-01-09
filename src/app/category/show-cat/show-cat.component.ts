import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];
  
  ModalTitle: string="Title";
  ActivateAddEditCatComp:boolean=false;
  cat:any;

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  refreshCategoryList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoryList=data;
    });
  }

  addClick(){
    this.cat={
      CategoryId:0,
      CategoryName:"",
      Ordering:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;
   }

  editClick(item: any){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }
  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCategoryList();
  }
  deleteClick(item: any){
    if(confirm('Please remeber that after click, the data will be removed')){
      this.service.deleteCategory(item.CategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshCategoryList();
      })
    }
  }
}
