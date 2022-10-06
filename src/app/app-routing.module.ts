import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppleDataComponent } from './apple/apple-data/apple-data.component';
import { AppleComponent } from './apple/apple.component';
import { CartComponent } from './cart/cart.component';
import { Grocery1DataComponent } from './grocery1/grocery1-data/grocery1-data.component';
import { Grocery1Component } from './grocery1/grocery1.component';
import { Grocery2DataComponent } from './grocery2/grocery2-data/grocery2-data.component';
import { Grocery2Component } from './grocery2/grocery2.component';
import { HomeComponent } from './home/home.component';
import { MiDataComponent } from './mi/mi-data/mi-data.component';
import { MiComponent } from './mi/mi.component';
import { VivoDataComponent } from './vivo/vivo-data/vivo-data.component';
import { VivoComponent } from './vivo/vivo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'cart', component: CartComponent },
  
  { path: 'account', component: AccountComponent},



  { path: 'apple', component: AppleComponent },
  { path: 'mi', component: MiComponent },
  { path: 'vivo', component: VivoComponent },

  { path: 'apple-data/:id', component: AppleDataComponent },
  { path: 'mi-data/:id', component: MiDataComponent },
  { path: 'vivo-data/:id', component: VivoDataComponent },


  { path: 'grocery1', component: Grocery1Component },
  { path: 'grocery2', component: Grocery2Component },

  { path: 'grocery1-data/:id', component: Grocery1DataComponent },
  { path: 'grocery1-data/:id', component: Grocery2DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
