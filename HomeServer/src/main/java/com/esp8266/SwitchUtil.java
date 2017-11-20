package com.esp8266;

import java.util.HashMap;

import com.beans.SwitchDetails;
import com.interfaces.ISwitchUtil;

public class SwitchUtil implements ISwitchUtil{

	@Override
	public boolean register(String switchBoardId, SwitchDetails switchObject) {
		switchDetails.put(switchBoardId, switchObject);
		return true;
	}

	@Override
	public SwitchDetails getSwitchDetails(String switchBoardId) {
		return switchDetails.get(switchBoardId);
	}

	@Override
	public HashMap<String, SwitchDetails> getAllSwitchDetails() {
		return switchDetails;
	}
}
