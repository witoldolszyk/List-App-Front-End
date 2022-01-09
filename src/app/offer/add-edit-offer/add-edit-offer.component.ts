import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-offer',
  templateUrl: './add-edit-offer.component.html',
  styleUrls: ['./add-edit-offer.component.css']
})
export class AddEditOfferComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() offer:any;

  OfferId:string="";
  OfferTitle:string="";
  OfferDescription:string="";
  OfferPrice:number=0;
  OfferCreated:any;

  ngOnInit(): void {
    this.OfferId=this.offer.OfferId;
    this.OfferTitle=this.offer.OfferTitle;
    this.OfferDescription=this.offer.OfferDescription;
    this.OfferPrice=this.offer.OfferPrice;
    this.OfferCreated=this.offer.OfferCreated;
  }

  addOffer(){
    this.offerCreated()
    var val = {
      OfferId:this.OfferId,
      OfferTitle:this.OfferTitle,
      OfferDescription:this.OfferDescription,
      OfferPrice:this.OfferPrice,
      OfferCreated:this.OfferCreated,
      };
    this.service.addOffer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  offerCreated() {
    this.OfferCreated = new Date();
  }

  updateOffer(){
    var val = {
      OfferId:this.OfferId,
      OfferTitle:this.OfferTitle,
      OfferDescription:this.OfferDescription,
      OfferPrice:this.OfferPrice,
      OfferCreated:this.OfferCreated
    };
    this.service.updateOffer(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
