package com.example.testjpa.repository.Order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.testjpa.model.Order.Orders;

@Repository
public interface OrderRepository extends JpaRepository<Orders,Long> {
	 
	
	

}