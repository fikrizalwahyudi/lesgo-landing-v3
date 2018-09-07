import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ResultComponent } from './result/result.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { PartnerProductComponent } from './partner-product/partner-product.component';
import { CatResultComponent } from './cat-result/cat-result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ResultComponent,
    ProductDetailComponent,
    CatResultComponent,
    PartnerDetailComponent,
    PartnerProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
