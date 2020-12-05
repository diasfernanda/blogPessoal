import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Usuario = new Usuario();
  senha: string;

  constructor(
    private authService: AuthService
    ) { }

  ngOnInit() {
  }
  
  cadastrar(){
    this.authService.cadastrar(this.user).subscribe((resp: any = Usuario) => {
      this.user = resp
      console.log("usuario usuario" + this.user.nome)
      console.log("usuario usuario" + this.user.usuario)
      console.log("usuario senha" + this.user.senha)
      console.log("senha variavel"+ this.senha)
    if(this.senha === this.user.senha){
     this.authService.cadastrar(this.user).subscribe((resp: any = Usuario) =>{
      this.user = resp
      this.router.navigate(['/login'])
      alert('Usuário cadastrado com sucesso!!')
     })
    }else{
      alert('A senha não confere!')
    }
    })
  }

}
