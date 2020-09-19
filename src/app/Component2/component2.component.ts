import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component.component.css']
})
export class Component2Component implements OnInit{

  ngOnInit(): void {
  }

  @Output() newTaskEvent = new EventEmitter<string>();
  addNewTask(value: string){
    this.newTaskEvent.emit(value);
    alert(value + "is added to your list");
  }


}

