package com.beans;

import java.util.HashMap;
import java.util.List;

public class SwitchDetails implements ISwitchDetails{
	String deviceId;
	String ip;
	String givenName;
	List<SwitchParameters> switchStatus;
	
	
	public String getGivenName() {
		return givenName;
	}
	public void setGivenName(String givenName) {
		this.givenName = givenName;
	}
	public String getDeviceId() {
		return deviceId;
	}
	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public List<SwitchParameters> getSwitchStatus() {
		return switchStatus;
	}
	public void setSwitchStatus(List<SwitchParameters> switchStatus) {
		this.switchStatus = switchStatus;
	}
	
	
	
}
