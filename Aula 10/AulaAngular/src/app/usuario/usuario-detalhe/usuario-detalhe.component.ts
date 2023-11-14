import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css'],
})
export class UsuarioDetalheComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

  salvar(form: any) {
    this.usuarioService.inserirUsuario(form.value).subscribe(() => {
      alert('Salvo com sucesso!');
      this.activeModal.close();
    });
  }
}
