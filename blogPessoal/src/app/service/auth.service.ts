import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient) { }

    logar(userLogin: UserLogin) Observable<UserLogin>{
      return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
    }

    cadastrar(user: Usuario): Observable<User> {
      return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
    }

    btnSair(){
      let ok = false
      let token = localStorage.getItem('token')

      if (token != null) {
        ok=true
      }
      return ok
    }

    btnLogin(){
      let ok = false
      let token = localStorage.getItem('token')

      if (token == null) {
        ok=true
      }
      return ok

    }

}
