package com.manager;

import java.net.Socket;

import com.network.SocketServer;
import com.socket.SocketWriteThread;

public class SocketManager {
	public static void processSocket(Socket socket,String socketMessage){
		String[] socketMessages = socketMessage.split("#");
		if(socketMessages.length == 2){
			switch (socketMessages[1]) {
			case "register":
				System.out.println("Registering..."+socketMessages[0]);
				registerManager(socket, socketMessages[0]);
				break;

			default:
				break;
			}
		}else{
			System.out.println("Dropping socket.....");
		}
	}
	
	private static void registerManager(Socket socket,String deviceId){
		SocketWriteThread socketWriteThread = new SocketWriteThread(socket);
	    socketWriteThread.start();
	    String pin = "200";
	    socketWriteThread.setMessage(pin);
	    synchronized (socketWriteThread) {
	    	socketWriteThread.interrupt();			    
		}
	    SocketServer.socketWriteThreads.add(socketWriteThread);
	}
	
	
}
