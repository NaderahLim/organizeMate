import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitializeServicesService {

  constructor() { }

  public AppStartUp(): boolean {
    return true;
  }
}
