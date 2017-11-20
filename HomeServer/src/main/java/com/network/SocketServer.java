package com.network;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

import com.socket.SocketReadThread;
import com.socket.SocketWriteThread;

public class SocketServer {
	public static List<SocketReadThread> socketReadThreads = new ArrayList<SocketReadThread>();
	public static List<SocketWriteThread> socketWriteThreads = new ArrayList<SocketWriteThread>();
	
	public void removeFromList(String deviceId){
		
	}
	
	public SocketServer() throws IOException {
		ServerSocket serverSocket = new ServerSocket(3000);
		while(true){
			
		    Socket clientSocket = serverSocket.accept();
		    
		    SocketReadThread socketReadThread = new SocketReadThread(clientSocket);
		    
		    socketReadThread.start();
		    
		    socketReadThreads.add(socketReadThread);
		    
		}	    
	}
	
	public static void main(String[] args) throws IOException {
		SocketServer server = new SocketServer();
	}
}
