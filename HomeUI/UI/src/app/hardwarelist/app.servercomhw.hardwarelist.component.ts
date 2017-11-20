import { Component,OnInit } from '@angular/core';
import { HardwareService } from '../service/servercom.hardwareservice';

@Component({
  selector: 'hardware-list',
  templateUrl: './app.servercomhw.hardwarelist.html',
  styleUrls: ['../app.component.css'],
  providers: [HardwareService]
})
export class HardwareListComponent implements OnInit{
	constructor(private hardwareService: HardwareService) { }
	rasPiHardwares = [];
	
	getRasPiHardware(): void {
	  this.hardwareService.getAllHardwares().then(rasPiHardwares => {this.rasPiHardwares = rasPiHardwares});
	}
	
	ngOnInit(): void {
		var that = this;
		/*setInterval(function(){
			that.getRasPiHardware();
		},1000);
		*/
		that.getRasPiHardware();
	}
	  
}
