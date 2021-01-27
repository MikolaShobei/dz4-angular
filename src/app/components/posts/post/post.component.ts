import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from '../../../interfaces';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Ipost;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(): void{
    this.router.navigate([this.post.id], {
      relativeTo: this.activatedRoute,
      state: this.post
    });

  }
}
