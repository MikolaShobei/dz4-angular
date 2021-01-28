import {Injectable} from '@angular/core';
import {Iuser} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');
  }

}
