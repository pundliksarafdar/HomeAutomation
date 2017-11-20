#ifndef PINS_H
#define PINS_H
#include <Arduino.h>
	void setPinModes();
	void setResetPins(String pinStr,String statusStr);
	String getPinStatus();
#endif