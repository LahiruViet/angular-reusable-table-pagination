import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-pagination',
  templateUrl: './reusable-pagination.component.html',
  styleUrls: ['./reusable-pagination.component.css']
})
export class ReusablePaginationComponent implements OnInit {

  @Input() pager: any
  @Input() totalPages: any
  @Input() isReady: any
  @Output() pageEvent = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  getBooks(page: number) {
    this.pageEvent.emit(page)
  }

}
