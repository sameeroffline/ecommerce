import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';


import { AppleComponent } from './apple/apple.component';
import { MiComponent } from './mi/mi.component';
import { VivoComponent } from './vivo/vivo.component';
import { AppleDataComponent } from './apple/apple-data/apple-data.component';
import { MiDataComponent } from './mi/mi-data/mi-data.component';
import { VivoDataComponent } from './vivo/vivo-data/vivo-data.component';
import { HomeComponent } from './home/home.component';

import { DragScrollModule } from 'ngx-drag-scroll';
import { ShoeComponent } from './shoe/shoe.component';
import { ShoeDataComponent } from './shoe/shoe-data/shoe-data.component';
import { Grocery1Component } from './grocery1/grocery1.component';
import { Grocery1DataComponent } from './grocery1/grocery1-data/grocery1-data.component';
import { Grocery2Component } from './grocery2/grocery2.component';
import { Grocery2DataComponent } from './grocery2/grocery2-data/grocery2-data.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccountComponent } from './account/account.component';
 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    AppleComponent,
    MiComponent,
    VivoComponent,
    AppleDataComponent,
    MiDataComponent,
    VivoDataComponent,
    HomeComponent,
    ShoeComponent,
    ShoeDataComponent,
    Grocery1Component,
    Grocery1DataComponent,
    Grocery2Component,
    Grocery2DataComponent,
    CartComponent,
    AccountComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
