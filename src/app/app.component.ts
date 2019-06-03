import { Component } from '@angular/core';
import { Api } from './services/api.service';

interface CartItems {
  id: string,
  product: string,
  price: string,
  quantity: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Api]
})
export class AppComponent {
  title = 'express-angular';
  list: CartItems[];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getAllItems().subscribe(
      (data: CartItems[]) => {
      this.list = data;
        console.log(this.list);
      }
    );
  };
}



