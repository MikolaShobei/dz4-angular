import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ipost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Ipost[]> {
    return this.httpClient.get<Ipost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
