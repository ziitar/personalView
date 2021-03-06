import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

import { ResponseBody } from '../class/responseBody';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
  userUrl = environment.baseUrl + 'user/';
  constructor(private http: HttpClient ) { }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  getUser(): Promise<ResponseBody> {
    return this.http.get(this.userUrl + 'user')
      .toPromise()
      .then(res => res as ResponseBody)
      .catch(this.handleError);
  }
  /*
  *  登录
  * */
  login(form: any): Promise<ResponseBody> {
    return this.http.post(this.userUrl + 'login', form)
      .toPromise()
      .then(res => res as ResponseBody)
      .catch(this.handleError);
  }
  /*
  *  注册
  * */
  register(form: any): Promise<ResponseBody> {
    return this.http.post(this.userUrl + 'register', form)
      .toPromise()
      .then(res => res as ResponseBody)
      .catch(this.handleError);
  }
  chickName(name: string): Promise<ResponseBody> {
    return this.http.get(this.userUrl + 'name?username=' + name)
      .toPromise()
      .then(res => res as ResponseBody)
      .catch(this.handleError);
  }
  signOut(): Promise<ResponseBody> {
    return this.http.get(this.userUrl + 'login')
      .toPromise()
      .then(res => res as ResponseBody)
      .catch(this.handleError);
  }
}
