package com.interfaces;

import java.util.HashMap;

import com.beans.SwitchDetails;

public interface ISwitchUtil {
	public static HashMap<String, SwitchDetails> switchDetails = new HashMap<String, SwitchDetails>();
	public boolean register(String switchBoardId,SwitchDetails switchObject);
	public SwitchDetails getSwitchDetails(String switchBoardId);
	public HashMap<String, SwitchDetails> getAllSwitchDetails();
}
