package com.beans;

import java.util.HashMap;

public class RasPiDetails {
	private int id;
	private String name;
	private String status;
	private int temp;
	private int freq;
	private HashMap<String, Boolean> gpioStatus;
	private ComData[] comData;
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getStatus() {
		return status;
	}
	public int getTemp() {
		return temp;
	}
	public int getFreq() {
		return freq;
	}
	public ComData[] getComData() {
		return comData;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setTemp(int temp) {
		this.temp = temp;
	}
	public void setFreq(int freq) {
		this.freq = freq;
	}
	public void setComData(ComData[] comData) {
		this.comData = comData;
	}
	public HashMap<String, Boolean> getGpioStatus() {
		return gpioStatus;
	}
	public void setGpioStatus(HashMap<String, Boolean> gpioStatus) {
		this.gpioStatus = gpioStatus;
	}
	
	
}
