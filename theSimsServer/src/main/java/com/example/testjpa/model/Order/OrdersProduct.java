package com.example.testjpa.model.Order;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.metamodel.StaticMetamodel;

import com.example.testjpa.model.inventory.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "orders_product")
@StaticMetamodel(OrdersProduct.class)
public class OrdersProduct  {

	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		private int quantity;
	
	 	@ManyToOne
	 	@JsonIgnore
	    private Orders orders;
	  

	    @ManyToOne   
	    private Product product;
	    
	    private int subTotal;
	    
	    private int finalPrice;


		public OrdersProduct() {
			super();
			// TODO Auto-generated constructor stub
		}


		public OrdersProduct( int quantity, Orders orders, Product product) {
			super();
			
			this.quantity = quantity;
			this.orders = orders;
			this.product = product;
//			this.subTotal = this.product.getBasePrice()*this.quantity;
		}


		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public int getQuantity() {
			return quantity;
		}


		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}


		public Orders getOrders() {
			return orders;
		}


		public void setOrders(Orders orders) {
			this.orders = orders;
		}


		public Product getProduct() {
			return product;
		}


		public void setProduct(Product product) {
			this.product = product;
		}


		public int getSubTotal() {
			return subTotal;
		}


		public void setSubTotal(int subTotal) {
			this.subTotal = subTotal;
		}


		public int getFinalPrice() {
			return finalPrice;
		}


		public void setFinalPrice(int finalPrice) {
			this.finalPrice = finalPrice;
		}


		@Override
		public String toString() {
			return "OrdersProduct [id=" + id + ", quantity=" + quantity + "]";
		}    
	    
	 
	    
	    
	  
	    
}
