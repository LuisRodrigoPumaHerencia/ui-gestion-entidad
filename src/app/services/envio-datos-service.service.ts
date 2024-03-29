import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnvioDatosServiceService {

  private objectSource = new BehaviorSubject<{}>({});
  $getObjectSource = this.objectSource.asObservable();

  constructor() { }

  sendObjectSource(data:any){
    this.objectSource.next(data);
  }
}
