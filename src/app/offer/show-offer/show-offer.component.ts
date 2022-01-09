import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {

  constructor(private service:SharedService) { }

  OfferList:any=[];

  ModalTitle:string="";
  ActivateAddEditOfferComp:boolean=false;
  offer:any;

  ngOnInit(): void {
    this.refreshOfferList();
  }

  addClick(){
    this.offer={
      OfferId:0,
      OfferTitle:"",
      OfferDescription:"",
      OfferPrice:"",
      OfferCreated:""
    }
    this.ModalTitle="Add Offer";
    this.ActivateAddEditOfferComp=true;

  }

  editClick(item: any){
    console.log(item);
    this.offer=item;
    this.ModalTitle="Edit Offer";
    this.ActivateAddEditOfferComp=true;
  }

  deleteClick(item: any){
    if(confirm("Please note that if confirm, tha data will be removed")){
      this.service.deleteOffer(item.OfferId).subscribe(data=>{
        alert(data.toString());
        this.refreshOfferList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditOfferComp=false;
    this.refreshOfferList();
  }


  refreshOfferList(){
    this.service.getOffList().subscribe(data=>{
      this.OfferList=data;
    });
  }

}
