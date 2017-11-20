import { Injectable } from '@angular/core';
import { RasPiDetails } from '../rasPiDetails';
import { SwitchDetails } from '../typeBean/switchDetails';
import { ComData } from '../comData';
import { Headers, Http,RequestOptions } from '@angular/http';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HardwareService {
	constructor(private http: HttpClient) {}
	
	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
	
	getAllHardwares():Promise<SwitchDetails[]>{
		const url = `http://Vinayak-PC:80/rest/raspi/all`;
		return this.http.get(url).toPromise().then(response => response as SwitchDetails[]).catch(this.handleError);
	}
	
	getHardware(id: number):Promise<any>{
		const url = `http://Vinayak-PC:80/rest/raspi/device/`+id;
		return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
	}
	
	toggleSwitch(deviceId: number,pinNo:string,pinStatus:string):Promise<any>{ 
		const headers = new HttpHeaders().set('Content-Type', 'application/json');
		console.log(headers);
		const url = `http://Vinayak-PC:80/rest/raspi/device/`+deviceId+"/"+pinNo+"/"+pinStatus;
		//let options = new RequestOptions({ headers: headers});
		return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
	}
	
}