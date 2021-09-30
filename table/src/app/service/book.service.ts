import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookRequest } from '../models/book-request';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:8080/api/v1/book'

  constructor(private httpClient: HttpClient) { }

  getBooks = (bookRequest: BookRequest) => {

    let queryString = `?page=${bookRequest.page}&pageSize=${bookRequest.pageSize}&sortBy=${bookRequest.sortBy}&sortDirection=${bookRequest.sortDirection}`

    return this.httpClient.get<any>(this.baseUrl + queryString)
  }

}
