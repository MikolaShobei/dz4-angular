import { Component, OnInit } from '@angular/core';
import {Ipost} from '../../interfaces';
import {PostsService} from '../../services/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Ipost[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.posts = value.allPostsData );
  }

}
