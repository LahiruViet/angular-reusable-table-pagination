import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookRequest } from 'src/app/models/book-request';
import { PagerService } from 'src/app/service/pager.service';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  gridData!: any[]

  columnData = [
    { feild: 'id', header: 'ID' },
    { feild: 'title', header: 'Title' },
    { feild: 'author', header: 'Author' }
  ]

  isReady = true;


  bookRequest: BookRequest = new BookRequest()
  books!: Book[]
  pageSize!: number
  totalElements!: number
  totalPages!: number

  pages = []
  startPage!: number
  currentPage!: number

  // pager object
  pager: any = {};

  constructor(private bookService: BookService, private pagerService: PagerService) { } 

  ngOnInit(): void {
    this.getBooks(1)
  }

  getBooks(page: number) {
    this.isReady = false;
    setTimeout(()=>this.getBooksWithPagination(page), 200)
  }

  getBooksWithPagination(page: number) {

    this.bookRequest.page = page - 1
    this.bookRequest.pageSize = 4
    this.bookRequest.sortBy = 'title'
    this.bookRequest.sortDirection = 'DESC'

    this.bookService.getBooks(this.bookRequest).subscribe(response => {
      
      this.gridData = response.content
      this.books  = response.content
      this.pageSize = response.size
      this.totalElements = response.totalElements
      this.totalPages = response.totalPages
      this.currentPage = response.number + 1

      this.setPages(this.currentPage)
    },
    error => {
      console.log(error);     
    })
  }

  setPages(page: number) {

    if (page < 1 || page > this.totalPages) {
        return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.totalPages, page);
    this.isReady = true;
  }

}
