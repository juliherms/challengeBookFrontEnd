import { Component, OnInit } from '@angular/core';
import { BookService } from './../../books/books.service';
import { ResponseApi } from './../../core/model/responseAPI';
import { Book } from '../../books/book';
import { BookUser } from './../../books/bookUser';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  listBook=[];
  listBooks: Array<Book> = [];
  message: {};
  classCss: {};


  constructor(private bookService: BookService) { }

  /**
   * Method responsible to filter book by title
   * Call External API Google
   * @param title 
   */
  filterBooks(title: string){

    this.bookService.getBooksExternalAPI(title).subscribe((responseApi: ResponseApi) => {
      let temp  = responseApi['items'];
      let arr: Array<Book> = [];
      
      temp.forEach(function(temp){

        let book = new Book();

        book.title = temp.volumeInfo.title;
        book.imageLink = temp.volumeInfo.imageLinks.smallThumbnail;
        book.pageCount = temp.volumeInfo.pageCount;
        book.year =  temp.volumeInfo.publishedDate;
        book.author = 'definir' ;

        if(book.year == undefined){
          book.year = "2020" //definir
        }

        if(book.pageCount == undefined){
          book.pageCount = 1;
        }
        arr.push(book);
      });

      this.listBooks = arr;
    });
  
  }

  /**
   * Monitoring Keyup up in the input title
   * @param event 
   */
  keyUp(event: any) {
    if(event.target.value.toString().length > 3){
      this.listBooks = [];
      this.filterBooks(event.target.value.toString());
    }
  }

  /**
   * Monitoring Keyup press in the input title
   * @param event 
   */

  keyPress(event: any) {
    if(event.target.value.toString().length > 3){
      this.filterBooks(event.target.value.toString());
    }
  }

  private buildClasses(type:string):void{
    this.classCss = {
      'alert' : true
    }

    this.classCss['alert-'+type] = true;
  }


  private showMessage(message:{type:string,text:string}):void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() =>{
      this.message = undefined;
    },3000);
  }


  /**
   * Method responsible to select autocomplete book
   * @param book 
   */
  select(book: Book) {

    this.listBooks = [];
    let idCreatedBook = 0;
    this.bookService.create(book).subscribe((responseApi: ResponseApi) => {
      idCreatedBook = responseApi["id"]; 

      let bookUser = new BookUser();
      bookUser.description = "";
      bookUser.idBook = idCreatedBook;
      bookUser.idUser = 1;
      bookUser.level = 0;
      bookUser.status = 1;
      bookUser.title = "";

      this.bookService.addBook(bookUser).subscribe((responseApi: ResponseApi) => {
        
        this.showMessage({
          type: 'success',
          text:`Livro Adicionado Com Sucesso!`
        });
      });

    });

    console.log(idCreatedBook);
  }

}
