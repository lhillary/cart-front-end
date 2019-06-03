import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    apiUrl = 'http://localhost:8888/cart-items';
    constructor(private http: HttpClient){}

    getAllItems = () => this.http.get(this.apiUrl);
}