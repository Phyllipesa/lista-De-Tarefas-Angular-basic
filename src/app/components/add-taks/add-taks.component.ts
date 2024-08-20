import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-taks',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-taks.component.html',
  styleUrl: './add-taks.component.css'
})
export class AddTaksComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string ='';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  alteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }

  onSubmit() {
    if (!this.tarefa || !this.categoria) {
      alert('Por favor, adicione uma tarefa!');
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    };

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
  }

}
