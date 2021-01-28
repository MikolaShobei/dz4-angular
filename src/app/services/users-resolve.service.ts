import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from '../interfaces';
import {UsersService} from './users.service';
import {Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<Iuser[]>{

  constructor(private usersService: UsersService) {

  }
  resolve(): Observable<Iuser[]> | Promise<Iuser[]> | Iuser[] {
    return this.usersService.getUsers();
  }

}
