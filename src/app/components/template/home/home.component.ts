import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../users/users.service';
import { ResponseApi } from './../../../core/model/responseAPI';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookTarget: any;
  listBook=[];



  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.getTargetBookUser();
    this.getUserBooks();
  }

  getTargetBookUser(){
    this.userService.getUserBooksTarget(1,2020).subscribe((responseApi:ResponseApi) => {
      console.log(responseApi);
      this.bookTarget = responseApi;
    })
  }

  getUserBooks() {
    this.userService.getUserBooks(1).subscribe((responseApi:ResponseApi) => {
      this.listBook = responseApi['content'];
    })
  }

  addBook(){
    this.router.navigate(['/addBook'])
  }

}
