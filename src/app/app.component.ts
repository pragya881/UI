import { Component, OnInit } from '@angular/core';
import { apiService } from './apiService/apiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UIAssignment';
  public serviceList : any[] = [];
  public providerList:any[] = [];
  constructor(private _service: apiService){  }
  
  public ngOnInit(): void
  {
      this._service.getServiceList().subscribe(item =>
        this.serviceList.push[item]
      );

      this._service.getProviders().subscribe(item =>
        this.providerList.push[item]
      );
  }
}
