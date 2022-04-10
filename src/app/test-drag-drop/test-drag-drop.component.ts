import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-test-drag-drop',
  templateUrl: './test-drag-drop.component.html',
  styleUrls: ['./test-drag-drop.component.css']
})
export class TestDragDropComponent implements OnInit {
  public groups:Array<any> = [
    {
      name: 'Group A',
      items: [{name: 'Item A'}, {name: 'Item B'}, {name: 'Item C'}, {name: 'Item D'}]
    },
    {
      name: 'Group B',
      items: [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}, {name: 'Item 4'}]
    }
  ] 

  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup("COLUMNS", {
      direction: 'horizontal',
      moves: (el, source, handle) => handle?.className === "group-handle"
    });
  }
  
  ngOnInit(): void {
  }

}
