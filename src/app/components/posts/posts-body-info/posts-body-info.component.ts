import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Ipost} from '../../../interfaces';

@Component({
  selector: 'app-posts-body-info',
  templateUrl: './posts-body-info.component.html',
  styleUrls: ['./posts-body-info.component.css']
})
export class PostsBodyInfoComponent implements OnInit {
  post: Ipost;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as Ipost;
    });
  }

  ngOnInit(): void {
  }

}
