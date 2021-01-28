import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from '../../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: Iuser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }
  onDetailsClick(): void{
    console.log(this.user, 'user-component');
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user
    });
  }
}
