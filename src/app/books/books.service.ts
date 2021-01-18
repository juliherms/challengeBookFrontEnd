import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { BOOKS_API, BOOOK_EXTERNAL_API } from './../core/booksapi';
import { BookUser } from './bookUser';


@Injectable()
export class BookService {

    constructor(private http: HttpClient) { }

    /**
     * Method responsible to Create book 
     * @param book 
     */
    create(book: Book){
        console.log(`${BOOKS_API}/books`);
        console.log(book);
        return this.http.post(`${BOOKS_API}/books`,book);
    }

    addBook(bookUser: BookUser){
        console.log(`${BOOKS_API}/users/books`);
        return this.http.post(`${BOOKS_API}/users/books`,bookUser);
    }

    /**
     * Method responsible to list all books
     */
    getAllBooks() {
        return this.http.get(`${BOOKS_API}/books`);
    }

    /**
     * Method responsible to list all books
     * @param page  page
     * @param count count per page
     */
    findAllPaginado(page:number,count:number){
        return this.http.get(`${BOOKS_API}/books?page=${page}&count=${count}`);
    }

    /**
     * Method responsible to find Target by User
     * @param idUser id user
     * @param year  target year
     */
    getUserBooksTarget(idUser:number,year:number){
        return this.http.get(`${BOOKS_API}/users/${idUser}/target/${year}`);
    }

    /**
     * Method responsible to list books by title
     * @param title 
     */
    getBooksExternalAPI(title:string){
        console.log(`${BOOOK_EXTERNAL_API}volumes?q=${title}`);
        return this.http.get(`${BOOOK_EXTERNAL_API}volumes?q=${title}`);
    }

}