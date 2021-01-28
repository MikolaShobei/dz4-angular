import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Iuser} from '../../../interfaces';

@Component({
  selector: 'app-user-details-info',
  templateUrl: './user-details-info.component.html',
  styleUrls: ['./user-details-info.component.css']
})
export class UserDetailsInfoComponent implements OnInit {
  user: Iuser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as Iuser;
    });
  }
  ngOnInit(): void {
  }

}
