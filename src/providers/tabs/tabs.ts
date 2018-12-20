import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TabsProvider {

  logged: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  public isLogged(): Observable<boolean> {
    return this.logged.asObservable();
  }

  public updateLoggedState(logVal: boolean){
    this.logged.next(logVal);
  }

}
