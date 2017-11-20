package com.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

import org.springframework.jdbc.core.RowMapper;

import com.beans.*;
public class UartDataMapper  implements RowMapper{

	@Override
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		ComData comData = new ComData();
		comData.setDate(rs.getLong("date"));
		comData.setText(rs.getString("text"));
		return comData;
	}

}
