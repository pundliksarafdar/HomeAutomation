package com.manager;

import java.util.List;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.ApplicationContext;
import com.beans.RasPiDetails;
import com.db.dao.RasPiDetailsDao;

public class RasPiManager {/*
	ApplicationContext ctx=new ClassPathXmlApplicationContext("applicationContext.xml");  
	 RasPiDetailsDao dao=(RasPiDetailsDao)ctx.getBean("rasPiDao");  
	
	 public int saveRasPiDetails(RasPiDetails rasPiDetails){
		 return dao.saveRasPiDetails(rasPiDetails);
	 }
	 
	 private int updateRasPiDetails(RasPiDetails rasPiDetails){
		 return dao.updateRasPiDetails(rasPiDetails);
	 }
	 
	public List<RasPiDetails> getAllRaspi(){
		return dao.getAllRaspi();
	}
	
	public RasPiDetails getRasPiDetails(int id,long startData,long endDate){
		return dao.getARaspiDetails(id);
	}
	
	
	
	public static void main(String[] args) {
		ApplicationContext ctx=new ClassPathXmlApplicationContext("applicationContext.xml");  
		 RasPiDetailsDao dao=(RasPiDetailsDao)ctx.getBean("rasPiDao");  
		    
		RasPiDetails raspiDetail = new RasPiDetails();
		raspiDetail.setId(1);
		raspiDetail.setFreq(100);
		raspiDetail.setTemp(100);
		raspiDetail.setName("shyam");
		raspiDetail.setStatus("online");
		dao.saveRasPiDetails(raspiDetail);
	}
*/
	
}
