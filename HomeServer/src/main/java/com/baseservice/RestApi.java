package com.baseservice;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.beans.RasPiDetails;
import com.beans.SwitchDetails;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.JsonObject;
import com.manager.RasPiManager;
import com.manager.SwitchManager;


@Path("/raspi")
@Produces(MediaType.APPLICATION_JSON)
public class RestApi {
	
	@GET
	@Path("/all")
	public Response getAllDevices(@Context HttpServletRequest requestContext){
		List<SwitchDetails> allSwitchDetails = SwitchManager.getAllSwitchDetails();
		return Response.ok(allSwitchDetails).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@GET
	@Path("/device/{deviceId}")
	public Response getDeviceDetails(@PathParam("deviceId") String switchBoardId){
		HashMap<String, ?> switchDetails = SwitchManager.getSwitchDetails(switchBoardId);
		return Response.ok(switchDetails).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@GET
	@Path("/device/{deviceId}/{pinNo}/{pinStatus}")
	public Response saveDeviceDetails(@PathParam("deviceId") String switchBoardId,@PathParam("pinNo") String pinNo,
			@PathParam("pinStatus") String pinStatus){
		SwitchManager.toggleSwitch(switchBoardId, pinNo, pinStatus);
		return Response.ok(new HashMap()).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@POST
	@Path("/device/{deviceId}/{pinNo}/{pinStatus}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response savePostedDeviceDetails(@PathParam("deviceId") String switchBoardId,@PathParam("pinNo") String pinNo,
			@PathParam("pinStatus") String pinStatus,HashMap<String, String> map){
		SwitchManager.toggleSwitch(switchBoardId, pinNo, pinStatus);
		return Response.ok(new HashMap()).header("Access-Control-Allow-Origin", "*").build();
	}
	
	@POST
	@Path("/register/{deviceId}")
	public Response saveDeviceDetails(@Context HttpServletRequest requestContext,@PathParam("deviceId") String deviceId){
		String clientAddress = requestContext.getRemoteAddr();
		SwitchDetails switchDetails = new SwitchDetails();
		switchDetails.setIp(clientAddress);
		switchDetails.setDeviceId(deviceId);
		SwitchManager.registerDevice(deviceId, switchDetails);
		return Response.ok(clientAddress).header("Access-Control-Allow-Origin", "*").build();
	}

}
