import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  public taskList: Array<TaskList> = [

  ];

  ngOnInit(): void {
  }

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

}
