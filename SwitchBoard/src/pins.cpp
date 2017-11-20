#include "constant.h"
#include "pins.h"
#import <Arduino.h>

	int relay1_status = 0;
	int relay2_status = 0;
	int relay3_status = 0;
	int relay4_status = 0;
	
void setPinModes(){
	
	//pinMode(RELAY_1, OUTPUT);
	/*
	pinMode(RELAY_2, OUTPUT);
	pinMode(RELAY_3, OUTPUT);
	pinMode(RELAY_4, OUTPUT);
	*/
	pinMode(LED_BUILTIN, OUTPUT);
	//pinMode(1, OUTPUT);
	
	//Reset all led to low
	//digitalWrite(RELAY_1,LOW);
	/*
	digitalWrite(RELAY_2,relay2_status);
	digitalWrite(RELAY_3,relay3_status);
	digitalWrite(RELAY_4,relay4_status);	
	*/
	digitalWrite(LED_BUILTIN,HIGH);	
}

void setResetPins(String pinStr,String statusStr){
	int status = 0;
	int pin = 0;
	Serial.println("Pin string..."+pinStr);
	Serial.println("Pin status string..."+statusStr);
	bool statusB = (statusStr == "ON")?false:true;
		if(pinStr == RELAY_1_STR){
				digitalWrite(RELAY_1,statusB);
				Serial.println("Changing "+RELAY_1_STR + " to "+ status);	
		}else if(pinStr == RELAY_2_STR){
				digitalWrite(RELAY_2,statusB);
				Serial.println("Changing "+RELAY_2_STR + " to "+ status);
		}else if(pinStr == RELAY_3_STR){
				digitalWrite(RELAY_3,statusB);
				Serial.println("Changing "+RELAY_3_STR + " to "+ status);
		}else if(pinStr == RELAY_4_STR){
				digitalWrite(RELAY_4,statusB);
				Serial.println("Changing "+RELAY_4_STR + " to "+ status);
		}else{
				digitalWrite(LED_BUILTIN,statusB);
				Serial.print(LED_BUILTIN);
		}
}

String getPinStatus(){
	String relay1Status = digitalRead(RELAY_1)?"OFF":"ON";
	String relay2Status = digitalRead(RELAY_2)?"OFF":"ON";
	String relay3Status = digitalRead(RELAY_3)?"OFF":"ON";
	String relay4Status = digitalRead(RELAY_4)?"OFF":"ON";
	String ledBuildIn = digitalRead(LED_BUILTIN)?"OFF":"ON";
	return "{"+RELAY_1_STR+":"+relay1Status+","+RELAY_2_STR+":"+relay2Status+","+RELAY_3_STR+":"+relay3Status+","+RELAY_4_STR+":"+relay4Status+","+LED_BUILTIN+":"+ledBuildIn+",chipId:"+ESP.getChipId()+"}";
}