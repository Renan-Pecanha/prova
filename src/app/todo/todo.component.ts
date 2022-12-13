import { Component, OnInit } from '@angular/core';
import { todo } from '../todo';
import { todoService } from '../todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class todoComponent implements OnInit {


  todo: todo[]=[];

  constructor(private todoService: todoService) { }

  ngOnInit(): void {
    this.todoService.getToDos()
      .subscribe(todo => this.todo = todo);
      todo
      
  }

}