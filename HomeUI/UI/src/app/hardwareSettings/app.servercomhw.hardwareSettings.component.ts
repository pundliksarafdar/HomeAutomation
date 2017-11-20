import { Component,Input,OnInit } from '@angular/core';
import { RasPiDetails } from '../rasPiDetails';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HardwareService } from '../service/servercom.hardwareservice';

@Component({
  selector: 'hardware-details',
  templateUrl: './app.servercomhw.hardwareSettings.html',
  styleUrls: ['../app.component.css'],
  providers: [HardwareService]
})
export class HardwareSettingsComponent implements OnInit {
	constructor(
			private hardwareService: HardwareService,
			private route: ActivatedRoute,
			private location: Location
	) { }
	
	rasPiDetails = {};
	switchNames = [];
	deviceId = 0;
	ishecked = 'checked';
	
	onSwitchChange(e){
		console.log("changed",e.target.checked,e.target.name,this.ishecked);
		this.hardwareService.toggleSwitch(this.deviceId,e.target.name,e.target.checked);
	}
	
	ngOnInit(): void {
	  this.route.paramMap
		.switchMap((params: ParamMap) => this.hardwareService.getHardware(+params.get('id')))
		.subscribe(rasPiDetails =>{
			console.log(rasPiDetails);
			this.switchNames = Object.keys(rasPiDetails);
			this.rasPiDetails = rasPiDetails; 
		});
		
		this.deviceId = +this.route.snapshot.paramMap.get('id');
	}
	
}
