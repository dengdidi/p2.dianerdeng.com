			function validateQ(formQuikShop){

				fail	 =	validateItemMsrpQ(document.getElementById('itemMsrpQ').value)
				fail	+=	validateItemQtyQ(document.getElementById('itemQtyQ').value)
				fail	+=	validateCouponQ(document.getElementById('couponQ').value)
				fail	+=	validateCouponQtyQ(document.getElementById('couponQtyQ').value)
				fail	+=	validateMultiplyQ(document.getElementById('multiplyQ').value)
			
			if (fail == "") return true
					else {
						alert(fail); 
						return false
					}
				
			}				

			/* ITEM Q VALIDATION */
			
			function validateItemMsrpQ(field){
				if (field == "")
					return "Check Item MSRP."
				return""
			}

			function validateItemQtyQ(field){
				if (field == "")
					return "Check Item QTY."
				return""
			}

			function validateCouponQ(field){
				if (field == "")
					return "Check Item Coupon."
				return""
			}

			function validateCouponQtyQ(field){
				if (field == "")
					return "Check Item Coupon QTY."
				return""
			}		

			function validateMultiplyQ(field){
				if (field == "")
					return "Check Item Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}


			function oopCostQ(){

				var lineItemMsrpQ	= parseFloat(document.getElementById('itemMsrpQ').value);
				var lineItemQtyQ	= parseFloat(document.getElementById('itemQtyQ').value);
				var lineCouponQ		= parseFloat(document.getElementById('couponQ').value);
				var lineCouponQtyQ	= parseFloat(document.getElementById('couponQtyQ').value);
				var lineMultiplyQ	= parseFloat(document.getElementById('multiplyQ').value);
				
				var lineItemCostQ	= lineItemMsrpQ * lineItemQtyQ;
				var lineSavingsQ	= (lineCouponQ * lineMultiplyQ) * lineCouponQtyQ;
				var lineItemQ 		= lineItemCostQ - lineSavingsQ;

				document.getElementById('lineItemQ').value = lineItemQ;
				
				if (total = lineItemQ) return true
					else {
						document.getElementById('lineItemQ').value = 0;
						return false
					}



			}

			