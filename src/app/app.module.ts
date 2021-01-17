import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from './books/books.service';
import { UserService } from './users/users.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/template/home/home.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule.forRoot(),
    ProgressbarModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule
    
  ],
  providers: [
    BookService,
    UserService
  ],
  bootstrap: [AppComponent] //initial component
})
export class AppModule { }
