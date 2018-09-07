import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ResultComponent } from './result/result.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PartnerDetailComponent } from './partner-detail/partner-detail.component';
import { PartnerProductComponent } from './partner-product/partner-product.component';
import { CatResultComponent } from './cat-result/cat-result.component';
// import { VerificationComponent } from './verification/verification.component';

// import { AuthGuard } from '../providers/auth.service';

const appRoutes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'result', component: ResultComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'partner-detail', component: PartnerDetailComponent },
  { path: 'partner-product', component: PartnerProductComponent },
  { path: 'cat-result', component: CatResultComponent }
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
