import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BOOKS_API } from './../core/booksapi';


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUserBooksTarget(idUser:number,year:number){
        return this.http.get(`${BOOKS_API}/users/${idUser}/target/${year}`);
    }

    getUserBooks(idUser:number){
        return this.http.get(`${BOOKS_API}/users/${idUser}/books`);
    }

}