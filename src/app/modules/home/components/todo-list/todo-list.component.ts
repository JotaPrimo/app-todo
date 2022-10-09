import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked) );
  }

  public taskList: Array<TaskList> = [

  ];


  /**
   * deleteItemTaskList
   */
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);

  }

  public deleteAllItemTaskList() {
    const confirm = window.confirm("Tem certeza ?");

    if(confirm) {
      this.taskList = [];
    }

  }

  /**
   * setEmitTaskList
   */
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  /**
   * validationINput
   */
  public validationInput(event: string, index: number) {
    if(!event.length){
      const confirm = window.confirm("Task esta vazia. Deseja deletar certeza ?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }

  }

}
