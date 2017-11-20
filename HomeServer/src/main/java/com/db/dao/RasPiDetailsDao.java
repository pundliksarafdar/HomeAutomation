package com.db.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import com.beans.ComData;
import com.beans.RasPiDetails;
import com.db.mapper.RasPiMapper;

public class RasPiDetailsDao {
	private JdbcTemplate jdbcTemplate;
	private DataSource dataSource;
	
	public void setDataSource(DataSource dataSource) {
	      this.dataSource = dataSource;
	      this.jdbcTemplate = new JdbcTemplate(dataSource);
	   }  
	
	public int saveRasPiDetails(RasPiDetails rasPiDetails){
		String query="insert into rasPiDetails values(  '"+rasPiDetails.getId()+"','"+rasPiDetails.getName()+"','"+rasPiDetails.getStatus()+"','"+rasPiDetails.getTemp()+"','"+rasPiDetails.getFreq()+"','"+rasPiDetails.getGpioStatus().toString()+"') "
				+ "ON DUPLICATE KEY "+"update  name='"+rasPiDetails.getName()+"',status='"+rasPiDetails.getStatus()+"',temp='"+rasPiDetails.getTemp()+"',freq='"+rasPiDetails.getFreq()+"',gpio='"+rasPiDetails.getGpioStatus().toString()+"'";
		int update = jdbcTemplate.update(query);
		if(rasPiDetails.getComData()!=null && rasPiDetails.getComData().length>0){
			System.out.println("Received comport data......");
			String insertUartData = "insert into raspiUartData value('"+rasPiDetails.getId()+"','"+rasPiDetails.getComData()[0].getDate()+"','"+rasPiDetails.getComData()[0].getText()+"')";	
			jdbcTemplate.update(insertUartData);
		}
		 
		return update;
		
	}
	
	public int updateRasPiDetails(RasPiDetails rasPiDetails){
		String query="update rasPiDetails set  name='"+rasPiDetails.getName()+"',status='"+rasPiDetails.getStatus()+"',temp='"+rasPiDetails.getTemp()+"',freq='"+rasPiDetails.getFreq()+"'";  
		return jdbcTemplate.update(query); 
	}
	
	public List<RasPiDetails> getAllRaspi(){
		String query = "select * from rasPiDetails";
		return jdbcTemplate.query(query, new RasPiMapper());
	}
	
	public RasPiDetails getARaspiDetails(int piId){
		String query = "select * from rasPiDetails where id = ?";
		RasPiDetails rasPiDetails = null;
		ComData comData = null;
		List<Map> rows;
		try{
			rasPiDetails = (RasPiDetails) jdbcTemplate.queryForObject(query, new Object[]{piId},new RasPiMapper());
		}catch(Exception e){}
		
		String uartQuery = "select * from raspiUartData where id = ? order by date desc";
		try{
			rows = jdbcTemplate.queryForList(uartQuery, new Object[]{piId});
			List<ComData>comDatas = new ArrayList<ComData>();
			for (Map row : rows) {
				ComData comDataObj = new ComData();
				comDataObj.setDate(Long.parseLong((String)row.get("date")));
				comDataObj.setText((String)(row.get("uartData")));	
				comDatas.add(comDataObj);
			}
			System.out.println(comDatas);
			rasPiDetails.setComData((ComData[]) comDatas.toArray(new ComData[0]));
		}catch(Exception e){e.printStackTrace();}
		return rasPiDetails;
	}
	
}
