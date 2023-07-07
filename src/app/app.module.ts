import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componet/header/header.component';
import { HomeComponent } from './componet/home/home.component';
import { GalleryComponent } from './componet/gallery/gallery.component';
import { AboutComponent } from './componet/about/about.component';
import { ContactComponent } from './componet/contact/contact.component';
import { ModalComponent } from './common/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
