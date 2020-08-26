import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/html,application/xhtml+xml,application/xml',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
 })
};
 
@Injectable({
    providedIn: 'root',
  })
export class apiService {
 
    private ServiceApiUrl : string = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services' ;
    private providerApiUrl : string= 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10' ;
    constructor(private http:HttpClient) {}
 
    public getServiceList ():Observable< any> {
        return this.http.get< any>(this.ServiceApiUrl,httpOptions);
    }

    public getProviders (): Observable< any> {
        return this.http.get< any>(this.providerApiUrl,httpOptions);
    }

}