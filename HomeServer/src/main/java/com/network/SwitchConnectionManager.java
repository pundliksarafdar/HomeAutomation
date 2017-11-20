package com.network;

import java.util.HashMap;

public class SwitchConnectionManager {
	public static HashMap<String, ?>  getSwitchStatus(String ip){
		return ConnectionManager.getSwitchStatus(ip);
	}
	
	public static void toggleSwitch(String switchBoardIp,Integer pinNumber,boolean pinStatus){
		ConnectionManager.toggleSwitch(switchBoardIp, pinNumber, pinStatus);
	}
}
