package com.testpackage;

import java.util.ArrayList;
import java.util.List;

public class RemoveClass {
private void testMethod() {
	List<String> list = new ArrayList<String>();
	list.add("HI");
	list.stream().forEach((l)->System.out.println(l));
	System.out.println("HIihiihih");
}

/*public static void main(String[] args) {
	RemoveClass removeClass = new RemoveClass();
	//removeClass.testMethod();
}*/
}
