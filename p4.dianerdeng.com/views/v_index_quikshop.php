<html>

<head>
	<meta charset="utf-8">
	<title><?php if(isset($title)) echo $title; ?></title>
	
	<link href="../css/styles.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/jquery.form.js"></script>
	<script type="text/javascript" src="../js/quikcalc.js"></script>

	<noscript> Sorry, your browser does not support JavaScript </noscript>
	
</head>

<body>
	<div id = "content">
		<h2>Quik Calc: Quickly Calculate 1 OOP Item</h2>
		
		<h4>Store: 	<input name="storeNameQ" 	id="storeNameQ" 	size="20"></h4>
		<br>

		<form name = "formQuikShop" onSubmit "return validateQ(this)";>
			<table border="0">

				
				<tr>
				<td></td> 
				<td>Item Name: 	<input name="itemNameQ" 	id="itemNameQ" 	size="10"></td>
				<td>MSRP: 		<input name="itemMsrpQ" 	id="itemMsrpQ" 	size="6"></td>
				<td>Item QTY: 	<input name="itemQtyQ" 		id="itemQtyQ" 	size="4"></td>
				<td>Coupon: 	<input name="couponQ" 		id="couponQ" 	size="6"></td>
				<td>Coupon QTY: <input name="couponQtyQ" 	id="couponQtyQ" size="4"></td>
				<td>Multiply: 	<input name="multiplyQ" 	id="multiplyQ" 	size="4"></td>
				</tr>
			</table>

			<center>
					<br>
					<input onclick="validateQ(formQuikShop); oopCostQ();" type="button" value="Submit">
					<br><br>
					<h3><b>Item OOP Cost: </b><input name="lineItemQ" id ="lineItemQ" size="10" readonly=true></h3>
			</center>
		</form>

	</div>
</body>

</html>