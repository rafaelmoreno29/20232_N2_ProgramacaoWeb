import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios: any = [];
  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  getUsuarios() {
    return this.usuarioService.obterUsuarios();
  }

  abrirModal() {
    const modalRef = this.modalService.open(UsuarioDetalheComponent);
    modalRef.result.then(() => {
      this.getUsuarios().subscribe((data: any) => {
        this.usuarios = data;
      });
    });
  }
}
