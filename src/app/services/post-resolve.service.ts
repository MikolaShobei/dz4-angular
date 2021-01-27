import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import {Ipost} from '../interfaces';
import {PostsService} from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Ipost[]>{

  constructor(private postsService: PostsService) { }
  resolve(): Observable<Ipost[]> | Promise<Ipost[]> | Ipost[] {
    return this.postsService.getPosts();
  }
}
