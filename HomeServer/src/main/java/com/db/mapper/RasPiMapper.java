package com.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

import org.springframework.jdbc.core.RowMapper;

import com.beans.*;
public class RasPiMapper  implements RowMapper{

	@Override
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		RasPiDetails piDetails = new RasPiDetails();
		piDetails.setId(rs.getInt("id"));
		piDetails.setFreq(rs.getInt("freq"));
		piDetails.setTemp(rs.getInt("temp"));
		piDetails.setStatus(rs.getString("status"));
		piDetails.setName(rs.getString("name"));
		String gpioStatus = rs.getString("gpio");
		if(null!=gpioStatus && gpioStatus.length()>0 && gpioStatus.contains("=")){
			gpioStatus = gpioStatus.substring(1,gpioStatus.length()-1);
			HashMap<String, Boolean> map = (HashMap<String, Boolean>) Arrays.asList(gpioStatus.split(",")).stream().map(s -> s.split("=")).collect(Collectors.toMap(e -> ((String)e[0]).trim(), e -> Boolean.parseBoolean(e[1])));
			piDetails.setGpioStatus(map);
		}
		return piDetails;
	}

}
