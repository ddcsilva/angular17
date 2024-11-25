import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  senhaEscondida = true;

  formularioLogin = this.formBuilder.group({
    chave: ['', Validators.required],
    senha: ['', Validators.required],
  });

  constructor(
    private autenticacaoService: AutenticacaoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.autenticacaoService.possuiToken() &&
      this.autenticacaoService.estaAutenticado()
    ) {
      this.router.navigate(['/home']);
    }
  }

  aoLogar(): void {
    if (this.formularioLogin.valid) {
      this.autenticacaoService
        .autenticar(this.formularioLogin.value)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    }
  }
}
