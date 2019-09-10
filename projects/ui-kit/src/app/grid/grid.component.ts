import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
/**
 * Grid Component creates grid for given input elements
 *
 * Input values:
 * contents : Input from parent for data to be display on table
 * heading: Heading of table columns
 * rowSelection: show checkbox or not
 * visibleColumns: keys list for display columns on table, if is undefined all columns should display from contents
 *
 * Output:
 * getSelectedRowIndex: on click of row send index of selected row
 *
 * data: array of data to be display on table
 */
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() contents: any[];
  @Input() heading: string[];
  @Input() rowSelection: boolean;
  @Input() visibleColumns: string[];

  @Output() getSelectedRowIndex: EventEmitter<number> = new EventEmitter();
  data: any[];

  ngOnInit() {
    this.generateDisplayData();
  }

  generateDisplayData() {
    if (this.visibleColumns) {
      this.data = [];
      for (const content of this.contents) {
        const contentTemp = {};
        for (const key of this.visibleColumns) {
          if (content.hasOwnProperty(key)) {
            contentTemp[key] = content[key];
          }
        }
        this.data.push(contentTemp);
      }
    } else {
      this.data = this.contents;
    }
  }

  selectRow(index) {
    this.getSelectedRowIndex.emit(index);
  }

  checkboxClicked(event, index) {
    console.log(event, index);
  }
}
