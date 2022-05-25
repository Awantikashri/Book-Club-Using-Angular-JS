import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  constructor() { }
  displaylocation()
  {
    alert("in service");
    return ['LA','Vegas','Paris'];
  }
}
