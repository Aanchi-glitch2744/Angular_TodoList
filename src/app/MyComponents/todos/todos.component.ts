import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // localItem: string; or
  // loacalitems!: string;
  // todos!: Todo[];
  localItem: string | null; //corrected code for newer versions
  todos:Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
    this.todos = []; 
      // [         //array
      // {         //Remove the hardcoded values.
      //   sno: 1,
      //   title: "This is title",
      //   desc: "Description",
      //   active: true
      // },
      // {
      //   sno: 2,
      //   title: "This is title 2",
      //   desc: "Description",
      //   active: true
      // },
      // {
      //   sno: 3,
      //   title: "This is title 3",
      //   desc: "Description",
      //   active: true
      // }
    // ]      //array close
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos)); //Putting values in local stroage of browser to keep the details.
  }
  addTodo(todo:Todo){
    console.log(todo);
    // const index = this.todos.indexOf(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos)); //Putting values in local stroage.
  }
  toggleTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos)); //Putting values in local stroage.
  }
}
