import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * submitItemTaskList
   */
  public submitItemTaskList() {
    if (this.addItemTaskList.trim()) {
      this.addItemTaskList = this.addItemTaskList.trim();
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    } 
  }

}
