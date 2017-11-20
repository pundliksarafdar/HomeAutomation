package com.socket;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;

public class SocketWriteThread extends Thread{
	protected Socket socket;
	String message;
	String deviceId;
	
	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}


	
	public SocketWriteThread(Socket socket){
		this.socket = socket;
	}
	
	public void setMessage(String message){
		this.message = message;
	}
	
	@Override
	public void run() {
        DataOutputStream out = null;
        try {
            out = new DataOutputStream(socket.getOutputStream());
        } catch (IOException e) {
            return;
        }
        while (true) {
        	System.out.println("In wait................");
            try {
            	synchronized (this) {
            		this.wait();
				}
            } catch (InterruptedException e) {
				e.printStackTrace();
			}
            
            try {
				out.writeBytes(this.message+"\n");
				out.flush();
			} catch (IOException e) {
				e.printStackTrace();
			}
            
        }
	}
}
