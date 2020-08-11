package com.example.testjpa.controller.Inventory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.testjpa.model.ApiResponse;
import com.example.testjpa.model.Employee;
import com.example.testjpa.model.inventory.Product;
import com.example.testjpa.service.Inventory.InventoryService;

@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "*")
public class InventoryController {
	@Autowired
	InventoryService inventoryService;
	
	
	@GetMapping("/")
	public ResponseEntity<ApiResponse<List<Product>>> getAll() {
		System.out.println("getting the inventory*********************************************");
		List<Product> productList = inventoryService.getAll();

	 
		return ResponseEntity.ok(new ApiResponse<List<Product>>(productList));

	}

}