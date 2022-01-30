import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login-model';
import { BASE_URL } from 'src/environments/environment';
import { ResponseModel } from 'src/app/models/response-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token: string;

  constructor(
    public httpClient: HttpClient,
    public storage: Storage
  ) {
    this.getToken()
  }

  async getToken() {
    this.token = await this.storage.get('TOKEN');
  }

  registerClient(signUpData: LoginModel): Promise<ResponseModel> {
    const url =  `${BASE_URL}registro`;
    const body = {
        firstname: signUpData.name,
        lastname: signUpData.lastname,
        birthdate: signUpData.birthdate.split('T')[0],
        email: signUpData.user,
        password:signUpData.password,
    }
    
    return new Promise((resolve, reject) => {
      this.httpClient.post<ResponseModel>(url, body).subscribe((response: ResponseModel) => { 
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  login(loginModel: LoginModel): Promise<ResponseModel> {
    const url =  `${BASE_URL}login`;
    const body = {
        email: loginModel.user,
        password: loginModel.password,
    }
    
    return new Promise((resolve, reject) => {
      this.httpClient.post<ResponseModel>(url, body).subscribe((response: ResponseModel) => { 
        resolve(response);
      }, error => {
        reject(error);
      });
    });

  }

  getAuto(parameters = ''): Promise<ResponseModel> {
    const url =  `${BASE_URL}lista${parameters}`;

    const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    return new Promise((resolve, reject) => {
      this.httpClient.get<ResponseModel>(url, { headers: headers } ).subscribe((response: ResponseModel) => { 
        resolve(response);
      }, error => {
        reject(error);
      });
    });

  }
}
