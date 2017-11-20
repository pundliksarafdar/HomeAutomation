package com.manager;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import com.beans.SwitchDetails;
import com.esp8266.SwitchUtil;
import com.network.SwitchConnectionManager;

public class SwitchManager {
	static HashMap<String, String>deviceIpMap = new HashMap<>();
	
	public static void registerDevice(String deviceId,SwitchDetails switchDetails){
		SwitchUtil switchUtil = new SwitchUtil();
		HashMap<String, ?> switchStatus = SwitchConnectionManager.getSwitchStatus(switchDetails.getIp());
		switchDetails.setDeviceId((switchStatus.get("chipId")+""));
		switchUtil.register(switchStatus.get("chipId")+"", switchDetails);
	}
	
	public static HashMap<String, ?> getSwitchDetails(String switchBoardId){
		SwitchUtil switchUtil = new SwitchUtil();
		SwitchDetails switchDetails = switchUtil.getSwitchDetails(switchBoardId);
		HashMap<String, ?> switchStatus = SwitchConnectionManager.getSwitchStatus(switchDetails.getIp());
		deviceIpMap.put(switchDetails.getDeviceId(), switchDetails.getIp());
		//Remove chipId
		switchStatus.remove("chipId");
		return switchStatus;
		
	}
	
	public static List<SwitchDetails> getAllSwitchDetails(){
		SwitchUtil switchUtil = new SwitchUtil();
		HashMap<String, SwitchDetails> switchDetails = switchUtil.getAllSwitchDetails();
		List<SwitchDetails> switchDetailsList = switchDetails.values().stream().collect(Collectors.toList());
		return switchDetailsList;
	}
	
	public static void toggleSwitch(String switchBoardId,String pinNumber,String pinStatus){
		boolean pinStatusBool = Boolean.parseBoolean(pinStatus);
		Integer pinNumberInt = Integer.parseInt(pinNumber);
		String deviceIp = deviceIpMap.get(switchBoardId);
		SwitchUtil switchUtil = new SwitchUtil();
		SwitchConnectionManager.toggleSwitch(deviceIp, pinNumberInt, pinStatusBool);
		
	}
	
}
