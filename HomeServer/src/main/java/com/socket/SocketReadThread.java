package com.socket;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.Socket;

import com.manager.SocketManager;
import com.network.SocketServer;

public class SocketReadThread extends Thread{
	protected Socket socket;
	String deviceId;
	
	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public SocketReadThread(Socket socket){
		this.socket = socket;
	}
	
	@Override
	public void run() {

        InputStream inp = null;
        BufferedReader brinp = null;
        DataOutputStream out = null;
        try {
            inp = socket.getInputStream();
            brinp = new BufferedReader(new InputStreamReader(inp));
            out = new DataOutputStream(socket.getOutputStream());
        } catch (IOException e) {
            return;
        }
        String line;
        while (true) {
            try {
                line = brinp.readLine();
                if(line == null){
                	this.socket.close();
                	break;
                }
                
                System.out.println("Message received..."+line);
                SocketManager.processSocket(this.socket, line);
            } catch (IOException e) {
                e.printStackTrace();
                return;
            }
        }
	}
}
