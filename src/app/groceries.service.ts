import { Injectable } from '@angular/core';
import { Item } from './models/item';
import {HttpClient} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  items: Promise<Item[]> = this.fetchItems()
  constructor(private readonly http: HttpClient) {
  }

  getItemsArray(): Promise<Item[]>{ //async?
    return this.items
  }

  async fetchItems() : Promise<Item[]> {
    const response = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}`));
      //console.log(response)
      return response
  }
}
