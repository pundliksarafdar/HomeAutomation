#include <ESP8266WiFi.h>
#include <string.h>
#include <stdlib.h>
#include "pins.h"

const char* routerSsid = "NETGEAR81";
const char* routerPassword = "BharatMataKiJay@123";
const char* host = "192.168.1.5";

void setResetSwitch(String switchNStatus);
int getPinNo(char * pinAndStatus);
int getPinStatus(char * pinAndStatus);

void initWifi(){
	Serial.begin(115200);
	delay(800);
	
	Serial.println();
	//Serial.print("Connecting to ");
	//Serial.println(routerSsid);  
	
	WiFi.begin(routerSsid, routerPassword);
  
	while (WiFi.status() != WL_CONNECTED) {
	 delay(500);
	 Serial.print(".");
	}
	  
	Serial.println();
	//Serial.print("Connected with IP ");
	//Serial.println(WiFi.localIP());
	long rssi = WiFi.RSSI();
	Serial.print("Signal strength (RSSI):");
	Serial.print(rssi);
	Serial.println(" dBm");
}

void initSocketSend(){
	WiFiClient client;
  
  if (!client.connect(host, 3000)) {
    Serial.print("X");
    return;
  }
  
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(host);

  Serial.println("Sending Message to server");
  client.println("DeviceId#register");
  delay(1000);
  
  String line = client.readStringUntil('\n');
  Serial.print("Server data...."+line);
  //setResetSwitch(line);
  delay(1000);

  Serial.println("closing connection");
  client.flush();
  client.stop();
  Serial.println("connection closed");

  Serial.println("Stopping Connection Attemtps");  
}

void setResetSwitch(String switchNStatus){
	char * pinAndStatus = &switchNStatus[0u];
	/*
	int num = getPinNo(pinAndStatus);
	int status = getPinStatus(pinAndStatus);
	delay(1000);
	Serial.println(" changing to ");
	Serial.println(num + " changing to " +status);
	setResetPins(num,status);
	Serial.println(num + " changed to " +status);
	*/
	int num = atoi (pinAndStatus)/10;
	Serial.println(" changing to "+num);
}

int getPinNo(char * pinAndStatus){
	int i = atoi (pinAndStatus);
	Serial.println(i);
	return i/10;
}

int getPinStatus(char * pinAndStatus){
	int i = atoi (pinAndStatus);
	return i%10;
}