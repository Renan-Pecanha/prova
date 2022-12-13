import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class todoComponent implements OnInit {


  todo: ToDo[]=[];

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoService.getToDos()
      .subscribe(todo => this.todo = todo);
  }

}