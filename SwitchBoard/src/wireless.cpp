#include "wireless.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h> 
#include <stdlib.h>
#include <ESP8266WebServer.h>
#include "pins.h"
#include <string.h>
/* Set these to your desired credentials. */
const char *ssid = "NETGEAR81";
const char *password = "BharatMataKiJay@123";

ESP8266WebServer server(80);
ESP8266WebServer serverApi(8080);

void handleRoot() {
	char * page = getPage();
	server.send(200, "text/html", page);	
}

void handleApi() {
	String data = serverApi.arg("data");
	for (uint8_t i=0; i<serverApi.args(); i++){
		data += " " + serverApi.argName(i) + ": " + serverApi.arg(i) + "\n";
		String pin = serverApi.argName(i);
		String status = serverApi.arg(i);
		Serial.println(pin);
		setResetPins(pin,status);
	  }
	serverApi.send(200, "text/html", data);	
}

void readPinStatus(){
	String pinData = getPinStatus();
	serverApi.send(200, "text/html", pinData);	
}

void setWifi(){
	delay(1000);
	Serial.begin(115200);
	Serial.println();
	Serial.print("Configuring access point...");
	Serial.print("Pundlik......");

	 WiFi.begin(ssid, password);
  
	  while (WiFi.status() != WL_CONNECTED) {
		delay(500);
		Serial.print(".");
	  }

	server.on("/",handleRoot);
	server.begin();
	Serial.println("Web server started");
	
	serverApi.on("/api",handleApi);
	serverApi.on("/api/status",readPinStatus);
	serverApi.begin();
	Serial.println("Rest HTTP server started");
}

void startHttpListner(){
	server.handleClient();
	serverApi.handleClient();
}

char * getPage(){
	return "<!DOCTYPE HTML><html><body><input type='button' value='On' onclick='location.href=\"/on\"'><input type='button' value='Off' onclick='location.href=\"/off\"'></body></html>";
}

void registerDevice(){
	Serial.println("Registering device");
	WiFiClient client;
	String url = "/rest/raspi/register/unknown";
	const char* host = "192.168.1.4";
	const int httpPort = 80;
	if (!client.connect(host, httpPort)) {
		Serial.println("connection failed");
		return;
	}
	Serial.println("Connection to host successful");
	// This will send the request to the server
	Serial.println("Registering command sent");
	client.print(String("POST ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
			   
	unsigned long timeout = millis();
	  while (client.available() == 0) {
		if (millis() - timeout > 5000) {
		  Serial.println(">>> Client Timeout !");
		  client.stop();
		  return;
		}
	  }

	Serial.println("Registering command successful");
	while(client.available()){
		String line = client.readStringUntil('\r');
		Serial.print(line);
	}
}