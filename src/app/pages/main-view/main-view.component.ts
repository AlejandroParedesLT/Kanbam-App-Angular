import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/models/board.model';
import { Column } from 'src/models/column.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  
  board: Board = new Board('Test Board', [
    new Column('todo', [
      'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
    ]),
    new Column('Doing', [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ]),
    new Column('Done', [
      'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'
    ])
  ])

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
