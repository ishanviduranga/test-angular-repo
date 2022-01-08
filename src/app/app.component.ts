import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-project';

  taskListArray: Array<Task> = [];

  constructor() { }

   addTask(taskName: string) {
    let tempTask: Task = {taskname: taskName, status: "NOTCOMPLETED"};
    this.taskListArray.push(tempTask);
   }

   removeTask(taskName: string) {
    let index = this.taskListArray.findIndex(i => i.taskname == taskName);
    this.taskListArray.splice(index, 1);
   }

}

export class Task  {
  taskname: string;
  status: string;

  static readonly statustypes: {
    DONE: "DONE",
    NOTCOMPLETED: "NOTCOMPLETED"
  }

  constructor(json?: any) {
    this.taskname = json.taskName;
    this.status = json.status;
  }
}
