package com.test;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

import javax.servlet.ServletException;

import org.apache.catalina.LifecycleException;
import org.apache.catalina.WebResourceRoot;
import org.apache.catalina.connector.Connector;
import org.apache.catalina.core.StandardContext;
import org.apache.catalina.startup.Tomcat;
import org.apache.catalina.webresources.DirResourceSet;
import org.apache.catalina.webresources.StandardRoot;

import com.network.SocketServer;
import com.socket.SocketReadThread;

public class Launcher {
	public static final Optional<String> port = Optional.ofNullable(System.getenv("PORT"));
	
	public static void main(String[] args) throws ServletException, LifecycleException, IOException {
		String webappDirLocation = "src/main/webapp/";
        Tomcat tomcat = new Tomcat();

        //The port that we should run on can be set into an environment variable
        //Look for that variable and default to 8080 if it isn't there.
        String webPort = System.getenv("PORT");
        if(webPort == null || webPort.isEmpty()) {
            webPort = "80";
        }

        tomcat.setPort(Integer.valueOf(webPort));
        Connector con = tomcat.getConnector();
        con.setUseIPVHosts(true);
        con.setAttribute("address", "0.0.0.0");
        tomcat.setConnector(con);
        
        StandardContext ctx = (StandardContext) tomcat.addWebapp("/", new File(webappDirLocation).getAbsolutePath());
        System.out.println("configuring app with basedir: " + new File("./" + webappDirLocation).getAbsolutePath());

        // Declare an alternative location for your "WEB-INF/classes" dir
        // Servlet 3.0 annotation will work
        File additionWebInfClasses = new File("target/classes");
        WebResourceRoot resources = new StandardRoot(ctx);
        resources.addPreResources(new DirResourceSet(resources, "/WEB-INF/classes",
                additionWebInfClasses.getAbsolutePath(), "/"));
        ctx.setResources(resources);

        tomcat.start();
        tomcat.getServer().await();
        
        SocketServer socketServer = new SocketServer();
	}
}
