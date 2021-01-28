import {Component, OnInit} from '@angular/core';
import {Iuser} from '../../interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Iuser[];

  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.users = value.allUsersData);
  }

}
