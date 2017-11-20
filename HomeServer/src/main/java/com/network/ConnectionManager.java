package com.network;

import java.io.IOException;
import java.util.HashMap;

import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.message.BasicNameValuePair;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class ConnectionManager {
	public static HashMap<String, ?> getSwitchStatus(String deviceIp){
		try {
			String switchStatus = HttpClient.sendGet("http://"+deviceIp+":8080/api/status");
			System.out.println(switchStatus);
			Gson gson = new Gson();
			JsonObject jsonObject = gson.fromJson(switchStatus, JsonObject.class);
			System.out.println(jsonObject);
			HashMap<String, ?> switchMap = new ObjectMapper().readValue(jsonObject.toString(), HashMap.class);
			return switchMap;
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public static void toggleSwitch(String switchBoardIp,Integer pinNumber,boolean pinStatus){
		NameValuePair nameValuePair = new BasicNameValuePair(pinNumber+"", pinStatus?"ON":"OFF");
		try {
			HttpClient.sendPost(nameValuePair, "http://"+switchBoardIp+":8080/api");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
