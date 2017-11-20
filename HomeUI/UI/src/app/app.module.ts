import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HardwareListComponent } from './hardwarelist/app.servercomhw.hardwarelist.component';
import { HardwareDetailsComponent } from './hardwareDetails/app.servercomhw.hardwaredetails.component';
import { HardwareSettingsComponent } from './hardwareSettings/app.servercomhw.hardwareSettings.component';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,HardwareListComponent,HardwareDetailsComponent,HardwareSettingsComponent
  ],
  imports: [
  FormsModule,
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot([
		  {
			path: 'details/:id',
			component: HardwareDetailsComponent
		  },
		  {
			path: 'settings/:id',
			component: HardwareSettingsComponent
		  }
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
