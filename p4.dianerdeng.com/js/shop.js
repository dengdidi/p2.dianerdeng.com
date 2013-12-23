
		/* VALIDATING */

			function validate(formCalc){

				fail	 =	validateItemMsrp1(document.getElementById('itemMsrp1').value)
				fail	+=	validateItemQty1(document.getElementById('itemQty1').value)
				fail	+=	validateCoupon1(document.getElementById('coupon1').value)
				fail	+=	validateCouponQty1(document.getElementById('couponQty1').value)
				fail	+=	validateMultiply1(document.getElementById('multiply1').value)

				fail	+=	validateItemMsrp2(document.getElementById('itemMsrp2').value)
				fail	+=	validateItemQty2(document.getElementById('itemQty2').value)
				fail	+=	validateCoupon2(document.getElementById('coupon2').value)
				fail	+=	validateCouponQty2(document.getElementById('couponQty2').value)
				fail	+=	validateMultiply2(document.getElementById('multiply2').value)

				fail	+=	validateItemMsrp3(document.getElementById('itemMsrp3').value)
				fail	+=	validateItemQty3(document.getElementById('itemQty3').value)
				fail	+=	validateCoupon3(document.getElementById('coupon3').value)
				fail	+=	validateCouponQty3(document.getElementById('couponQty3').value)
				fail	+=	validateMultiply3(document.getElementById('multiply3').value)

				fail	+=	validateItemMsrp4(document.getElementById('itemMsrp4').value)
				fail	+=	validateItemQty4(document.getElementById('itemQty4').value)
				fail	+=	validateCoupon4(document.getElementById('coupon4').value)
				fail	+=	validateCouponQty4(document.getElementById('couponQty4').value)
				fail	+=	validateMultiply4(document.getElementById('multiply4').value)

				fail	+=	validateItemMsrp5(document.getElementById('itemMsrp5').value)
				fail	+=	validateItemQty5(document.getElementById('itemQty5').value)
				fail	+=	validateCoupon5(document.getElementById('coupon5').value)
				fail	+=	validateCouponQty5(document.getElementById('couponQty5').value)
				fail	+=	validateMultiply5(document.getElementById('multiply5').value)

				fail	+=	validateItemMsrp6(document.getElementById('itemMsrp6').value)
				fail	+=	validateItemQty6(document.getElementById('itemQty6').value)
				fail	+=	validateCoupon6(document.getElementById('coupon6').value)
				fail	+=	validateCouponQty6(document.getElementById('couponQty6').value)
				fail	+=	validateMultiply6(document.getElementById('multiply6').value)

				fail	+=	validateItemMsrp7(document.getElementById('itemMsrp7').value)
				fail	+=	validateItemQty7(document.getElementById('itemQty7').value)
				fail	+=	validateCoupon7(document.getElementById('coupon7').value)
				fail	+=	validateCouponQty7(document.getElementById('couponQty7').value)
				fail	+=	validateMultiply7(document.getElementById('multiply7').value)

				fail	+=	validateItemMsrp8(document.getElementById('itemMsrp8').value)
				fail	+=	validateItemQty8(document.getElementById('itemQty8').value)
				fail	+=	validateCoupon8(document.getElementById('coupon8').value)
				fail	+=	validateCouponQty8(document.getElementById('couponQty8').value)
				fail	+=	validateMultiply8(document.getElementById('multiply8').value)

				fail	+=	validateItemMsrp9(document.getElementById('itemMsrp9').value)
				fail	+=	validateItemQty9(document.getElementById('itemQty9').value)
				fail	+=	validateCoupon9(document.getElementById('coupon9').value)
				fail	+=	validateCouponQty9(document.getElementById('couponQty9').value)
				fail	+=	validateMultiply9(document.getElementById('multiply9').value)

				fail	+=	validateItemMsrp10(document.getElementById('itemMsrp10').value)
				fail	+=	validateItemQty10(document.getElementById('itemQty10').value)
				fail	+=	validateCoupon10(document.getElementById('coupon10').value)
				fail	+=	validateCouponQty10(document.getElementById('couponQty10').value)
				fail	+=	validateMultiply10(document.getElementById('multiply10').value)

				if (fail == "") return true
					else {
						alert(fail); 
						return false
					}
				
			}
			
			/* ITEM 1 VALIDATION */
			function validateItemMsrp1(field){
				if (field == "")
					return "Check Item #1 MSRP."
				return""
			}

			function validateItemQty1(field){
				if (field == "")
					return "Check Item #1 QTY."
				return""
			}

			function validateCoupon1(field){
				if (field == "")
					return "Check Item #1 Coupon."
				return""
			}

			function validateCouponQty1(field){
				if (field == "")
					return "Check Item #1 Coupon QTY."
				return""
			}		

			function validateMultiply1(field){
				if (field == "")
					return "Check Item #1 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}

			/* ITEM 2 VALIDATION */
			function validateItemMsrp2(field){
				if (field == "")
					return "Check Item #2 MSRP."
				return""
			}

			function validateItemQty2(field){
				if (field == "")
					return "Check Item #2 QTY."
				return""
			}

			function validateCoupon2(field){
				if (field == "")
					return "Check Item #2 Coupon."
				return""
			}

			function validateCouponQty2(field){
				if (field == "")
					return "Check Item #2 Coupon QTY."
				return""
			}		

			function validateMultiply2(field){
				if (field == "")
					return "Check Item #2 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}

			/* ITEM 3 VALIDATION */
			function validateItemMsrp3(field){
				if (field == "")
					return "Check Item #3 MSRP."
				return""
			}

			function validateItemQty3(field){
				if (field == "")
					return "Check Item #3 QTY."
				return""
			}

			function validateCoupon3(field){
				if (field == "")
					return "Check Item #3 Coupon."
				return""
			}

			function validateCouponQty3(field){
				if (field == "")
					return "Check Item #3 Coupon QTY."
				return""
			}		

			function validateMultiply3(field){
				if (field == "")
					return "Check Item #3 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 4 VALIDATION */
			function validateItemMsrp4(field){
				if (field == "")
					return "Check Item #4 MSRP."
				return""
			}

			function validateItemQty4(field){
				if (field == "")
					return "Check Item #4 QTY."
				return""
			}

			function validateCoupon4(field){
				if (field == "")
					return "Check Item #4 Coupon."
				return""
			}

			function validateCouponQty4(field){
				if (field == "")
					return "Check Item #4 Coupon QTY."
				return""
			}		

			function validateMultiply4(field){
				if (field == "")
					return "Check Item #4 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 5 VALIDATION */
			function validateItemMsrp5(field){
				if (field == "")
					return "Check Item #5 MSRP."
				return""
			}

			function validateItemQty5(field){
				if (field == "")
					return "Check Item #5 QTY."
				return""
			}

			function validateCoupon5(field){
				if (field == "")
					return "Check Item #5 Coupon."
				return""
			}

			function validateCouponQty5(field){
				if (field == "")
					return "Check Item #5 Coupon QTY."
				return""
			}		

			function validateMultiply5(field){
				if (field == "")
					return "Check Item #5 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 6 VALIDATION */
			function validateItemMsrp6(field){
				if (field == "")
					return "Check Item #6 MSRP."
				return""
			}

			function validateItemQty6(field){
				if (field == "")
					return "Check Item #6 QTY."
				return""
			}

			function validateCoupon6(field){
				if (field == "")
					return "Check Item #6 Coupon."
				return""
			}

			function validateCouponQty6(field){
				if (field == "")
					return "Check Item #6 Coupon QTY."
				return""
			}		

			function validateMultiply6(field){
				if (field == "")
					return "Check Item #6 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 7 VALIDATION */
			function validateItemMsrp7(field){
				if (field == "")
					return "Check Item #7 MSRP."
				return""
			}

			function validateItemQty7(field){
				if (field == "")
					return "Check Item #1 QTY."
				return""
			}

			function validateCoupon7(field){
				if (field == "")
					return "Check Item #7 Coupon."
				return""
			}

			function validateCouponQty7(field){
				if (field == "")
					return "Check Item #7 Coupon QTY."
				return""
			}		

			function validateMultiply7(field){
				if (field == "")
					return "Check Item #7 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 8 VALIDATION */
			function validateItemMsrp8(field){
				if (field == "")
					return "Check Item #8 MSRP."
				return""
			}

			function validateItemQty8(field){
				if (field == "")
					return "Check Item #8 QTY."
				return""
			}

			function validateCoupon8(field){
				if (field == "")
					return "Check Item #8 Coupon."
				return""
			}

			function validateCouponQty8(field){
				if (field == "")
					return "Check Item #8 Coupon QTY."
				return""
			}		

			function validateMultiply8(field){
				if (field == "")
					return "Check Item #8 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 9 VALIDATION */
			function validateItemMsrp9(field){
				if (field == "")
					return "Check Item #9 MSRP."
				return""
			}

			function validateItemQty9(field){
				if (field == "")
					return "Check Item #9 QTY."
				return""
			}

			function validateCoupon9(field){
				if (field == "")
					return "Check Item #9 Coupon."
				return""
			}

			function validateCouponQty9(field){
				if (field == "")
					return "Check Item #9 Coupon QTY."
				return""
			}		

			function validateMultiply9(field){
				if (field == "")
					return "Check Item #9 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	

			/* ITEM 10 VALIDATION */
			function validateItemMsrp10(field){
				if (field == "")
					return "Check Item #10 MSRP."
				return""
			}

			function validateItemQty10(field){
				if (field == "")
					return "Check Item #10 QTY."
				return""
			}

			function validateCoupon10(field){
				if (field == "")
					return "Check Item #10 Coupon."
				return""
			}

			function validateCouponQty10(field){
				if (field == "")
					return "Check Item #10 Coupon QTY."
				return""
			}		

			function validateMultiply10(field){
				if (field == "")
					return "Check Item #1 Multiply. Enter at least 1 for no coupon doubling/tripling!"
				return""
			}	



			function oopCost(){

				/*Item 1*/
				var lineItemMsrp1	= parseFloat(document.getElementById('itemMsrp1').value);
				var lineItemQty1	= parseFloat(document.getElementById('itemQty1').value);
				var lineCoupon1		= parseFloat(document.getElementById('coupon1').value);
				var lineCouponQty1	= parseFloat(document.getElementById('couponQty1').value);
				var lineMultiply1	= parseFloat(document.getElementById('multiply1').value);
				
				var lineItemCost1	= lineItemMsrp1 * lineItemQty1;
				var lineSavings1	= (lineCoupon1 * lineMultiply1) * lineCouponQty1;
				var lineItem1 		= lineItemCost1 - lineSavings1;

				document.getElementById('lineItem1').value = lineItem1;

				/*Item 2*/
				var lineItemMsrp2	= parseFloat(document.getElementById('itemMsrp2').value);
				var lineItemQty2	= parseFloat(document.getElementById('itemQty2').value);
				var lineCoupon2		= parseFloat(document.getElementById('coupon2').value);
				var lineCouponQty2	= parseFloat(document.getElementById('couponQty2').value);
				var lineMultiply2	= parseFloat(document.getElementById('multiply2').value);
				
				var lineItemCost2	= lineItemMsrp2 * lineItemQty2;
				var lineSavings2	= (lineCoupon2 * lineMultiply2) * lineCouponQty2;
				var lineItem2 		= lineItemCost2 - lineSavings2;

				document.getElementById('lineItem2').value = lineItem2;

				/*Item 3*/
				var lineItemMsrp3	= parseFloat(document.getElementById('itemMsrp3').value);
				var lineItemQty3	= parseFloat(document.getElementById('itemQty3').value);
				var lineCoupon3	= parseFloat(document.getElementById('coupon3').value);
				var lineCouponQty3	= parseFloat(document.getElementById('couponQty3').value);
				var lineMultiply3	= parseFloat(document.getElementById('multiply3').value);
				
				var lineItemCost3	= lineItemMsrp3 * lineItemQty3;
				var lineSavings3	= (lineCoupon3 * lineMultiply3) * lineCouponQty3;
				var lineItem3 		= lineItemCost3 - lineSavings3;

				document.getElementById('lineItem3').value = lineItem3;

				/*Item 4*/
				var lineItemMsrp4	= parseFloat(document.getElementById('itemMsrp4').value);
				var lineItemQty4	= parseFloat(document.getElementById('itemQty4').value);
				var lineCoupon4		= parseFloat(document.getElementById('coupon4').value);
				var lineCouponQty4	= parseFloat(document.getElementById('couponQty4').value);
				var lineMultiply4	= parseFloat(document.getElementById('multiply4').value);
				
				var lineItemCost4	= lineItemMsrp4 * lineItemQty4;
				var lineSavings4	= (lineCoupon4 * lineMultiply4) * lineCouponQty4;
				var lineItem4 		= lineItemCost4 - lineSavings4;

				document.getElementById('lineItem4').value = lineItem4;

				/*Item 5*/
				var lineItemMsrp5	= parseFloat(document.getElementById('itemMsrp5').value);
				var lineItemQty5	= parseFloat(document.getElementById('itemQty5').value);
				var lineCoupon5		= parseFloat(document.getElementById('coupon5').value);
				var lineCouponQty5	= parseFloat(document.getElementById('couponQty5').value);
				var lineMultiply5	= parseFloat(document.getElementById('multiply5').value);
				
				var lineItemCost5	= lineItemMsrp5 * lineItemQty5;
				var lineSavings5	= (lineCoupon5 * lineMultiply5) * lineCouponQty5;
				var lineItem5 		= lineItemCost5 - lineSavings5;

				document.getElementById('lineItem5').value = lineItem5;

				/*Item 6*/
				var lineItemMsrp6	= parseFloat(document.getElementById('itemMsrp6').value);
				var lineItemQty6	= parseFloat(document.getElementById('itemQty6').value);
				var lineCoupon6		= parseFloat(document.getElementById('coupon6').value);
				var lineCouponQty6	= parseFloat(document.getElementById('couponQty6').value);
				var lineMultiply6	= parseFloat(document.getElementById('multiply6').value);
				
				var lineItemCost6	= lineItemMsrp6 * lineItemQty6;
				var lineSavings6	= (lineCoupon6 * lineMultiply6) * lineCouponQty6;
				var lineItem6 		= lineItemCost6 - lineSavings6;

				document.getElementById('lineItem6').value = lineItem6;

				/*Item 7*/
				var lineItemMsrp7	= parseFloat(document.getElementById('itemMsrp7').value);
				var lineItemQty7	= parseFloat(document.getElementById('itemQty7').value);
				var lineCoupon7		= parseFloat(document.getElementById('coupon7').value);
				var lineCouponQty7	= parseFloat(document.getElementById('couponQty7').value);
				var lineMultiply7	= parseFloat(document.getElementById('multiply7').value);
				
				var lineItemCost7	= lineItemMsrp7 * lineItemQty7;
				var lineSavings7	= (lineCoupon7 * lineMultiply7) * lineCouponQty7;
				var lineItem7 		= lineItemCost7 - lineSavings7;

				document.getElementById('lineItem7').value = lineItem7;

				/*Item 8*/
				var lineItemMsrp8	= parseFloat(document.getElementById('itemMsrp8').value);
				var lineItemQty8	= parseFloat(document.getElementById('itemQty8').value);
				var lineCoupon8		= parseFloat(document.getElementById('coupon8').value);
				var lineCouponQty8	= parseFloat(document.getElementById('couponQty8').value);
				var lineMultiply8	= parseFloat(document.getElementById('multiply8').value);
				
				var lineItemCost8	= lineItemMsrp8 * lineItemQty8;
				var lineSavings8	= (lineCoupon8 * lineMultiply8) * lineCouponQty8;
				var lineItem8 		= lineItemCost8 - lineSavings8;

				document.getElementById('lineItem8').value = lineItem8;

				/*Item 9*/
				var lineItemMsrp9	= parseFloat(document.getElementById('itemMsrp9').value);
				var lineItemQty9	= parseFloat(document.getElementById('itemQty9').value);
				var lineCoupon9		= parseFloat(document.getElementById('coupon9').value);
				var lineCouponQty9	= parseFloat(document.getElementById('couponQty9').value);
				var lineMultiply9	= parseFloat(document.getElementById('multiply9').value);
				
				var lineItemCost9	= lineItemMsrp9 * lineItemQty9;
				var lineSavings9	= (lineCoupon9 * lineMultiply9) * lineCouponQty9;
				var lineItem9 		= lineItemCost9 - lineSavings9;

				document.getElementById('lineItem9').value = lineItem9;

				/*Item 10*/
				var lineItemMsrp10	= parseFloat(document.getElementById('itemMsrp10').value);
				var lineItemQty10	= parseFloat(document.getElementById('itemQty10').value);
				var lineCoupon10	= parseFloat(document.getElementById('coupon10').value);
				var lineCouponQty10	= parseFloat(document.getElementById('couponQty10').value);
				var lineMultiply10	= parseFloat(document.getElementById('multiply10').value);
				
				var lineItemCost10	= lineItemMsrp10 * lineItemQty10;
				var lineSavings10	= (lineCoupon10 * lineMultiply10) * lineCouponQty10;
				var lineItem10 		= lineItemCost10 - lineSavings10;

				document.getElementById('lineItem10').value = lineItem10;

				/* TOTAL */
				var total =	lineItem1 + lineItem2 + lineItem3 + lineItem4 + lineItem5 + lineItem6 + lineItem7 + lineItem8 + lineItem9 + lineItem10;

				if (total = NaN) return true
					else {
						document.getElementById('total').value = 0;
						return false
					}
				
				document.getElementById('total').value = total;
					


			}

