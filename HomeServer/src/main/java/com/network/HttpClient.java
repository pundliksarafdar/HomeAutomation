package com.network;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;

import com.google.gson.Gson;

public class HttpClient {
	
	
	//HTTP get request
	
	public static String sendGet(String url) throws ClientProtocolException, IOException{
		RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 * 1000).build();
		org.apache.http.client.HttpClient httpClient = HttpClientBuilder.create().setDefaultRequestConfig(requestConfig).build(); //Use this instead 

		HttpGet request = new HttpGet(url);
		HttpResponse response = httpClient.execute(request);

		// Get the response
		BufferedReader rd = new BufferedReader
		    (new InputStreamReader(
		    response.getEntity().getContent()));

		String line = "";
		StringBuffer stringBuf = new StringBuffer();
		while ((line = rd.readLine()) != null) {
			stringBuf.append(line);
		}
		
		return stringBuf.toString();
	}
	// HTTP POST request
		public static String sendPost(NameValuePair postObject,String url) throws Exception {
			RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(30 * 1000).build();
			org.apache.http.client.HttpClient httpClient = HttpClientBuilder.create().setDefaultRequestConfig(requestConfig).build(); //Use this instead 
			try {
			    CloseableHttpClient client = HttpClients.custom().build();
				HttpUriRequest request = RequestBuilder.post()
				  .addParameter(postObject)
				  .setUri(url)
				  .setHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded")
				  .build();
				CloseableHttpResponse response = client.execute(request);
				
			 // Get the response
				BufferedReader rd = new BufferedReader
				    (new InputStreamReader(
				    response.getEntity().getContent()));

				String line = "";
				StringBuffer stringBuf = new StringBuffer();
				while ((line = rd.readLine()) != null) {
					stringBuf.append(line);
				}
				
				return stringBuf.toString();

			}catch (Exception ex) {

			    ex.printStackTrace();

			} finally {
			    //Deprecated
			    //httpClient.getConnectionManager().shutdown(); 
			}
			return null;

		}

}
