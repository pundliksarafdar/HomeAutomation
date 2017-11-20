// the setup function runs once when you press reset or power the board
#include "src/wireless.h"
#include "src/pins.h"

void setup() {  
  setWifi(); 
  setPinModes();
  
  registerDevice();
}

// the loop function runs over and over again forever
void loop() {
  startHttpListner();
}
