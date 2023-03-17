import { Component, OnInit } from '@angular/core';
import { InitializeServicesService } from './services/initialize-services/initialize-services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public initializeServicesService: InitializeServicesService) {}

  ngOnInit(): void {
      this.initializeServicesService.AppStartUp();
  }
}
