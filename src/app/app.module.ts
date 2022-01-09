import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { AddEditCatComponent } from './category/add-edit-cat/add-edit-cat.component';
import { OfferComponent } from './offer/offer.component';
import { ShowOfferComponent } from './offer/show-offer/show-offer.component';
import { AddEditOfferComponent } from './offer/add-edit-offer/add-edit-offer.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ShowCatComponent,
    AddEditCatComponent,
    OfferComponent,
    ShowOfferComponent,
    AddEditOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
