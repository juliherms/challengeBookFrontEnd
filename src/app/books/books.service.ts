import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { BOOKS_API, BOOOK_EXTERNAL_API } from './../core/booksapi';


@Injectable()
export class BookService {

    constructor(private http: HttpClient) { }

     create(book: Book){
        console.log(`${BOOKS_API}/books`);
        console.log(book);
        return this.http.post(`${BOOKS_API}/books`,book);
    }

    //Get all books
    getBooks() : Observable<Book[]> {
        return this.http.get<Book[]>(BOOKS_API + "/books")
    }

    getAllBooks() {
        return this.http.get(`${BOOKS_API}/books`);
    }

    findAllPaginado(page:number,count:number){
        return this.http.get(`${BOOKS_API}/books?page=${page}&count=${count}`);
    }

    getUserBooksTarget(idUser:number,year:number){
        return this.http.get(`${BOOKS_API}/users/${idUser}/target/${year}`);
    }

    getBooksExternalAPI(title:string){
        console.log(`${BOOOK_EXTERNAL_API}volumes?q=${title}`);
        return this.http.get(`${BOOOK_EXTERNAL_API}volumes?q=${title}`);
    }

}