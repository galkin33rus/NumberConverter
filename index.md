<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<script src="javascript/main.js"></script>
		<script src="javascript/Converter.js"></script>
		<script src="javascript/MathBigNum.js"></script>
		<title>HexToDec</title>
		<style>
			body {width: 100%;}
			input {font-size: 16px;}
			.form {font-family:arial;margin: 200px auto; width: 450px;}		
			.title {font-family:arial;font-size:20px;text-align:center;margin:0 50px 10px 0;cursor:pointer;}
			#result {margin-top:5px;}
		</style>
	</head>
	<body>
		<div class="form">
			<div class='title' id="titleBtn">HEX >> DEC</div>
			<input type="text" id="calc" style="width:300px;"/>
			<input type="button" id="btnGo" value="Convert" onclick="toDec()"/> 
			<div>
				<input type="button" value="Clear" onclick="clearText()"/> 
				<input type="button" value="Reverce" onclick="reverce()"/> 
			</div>			
			<div id="result">			
			</div>
		</div>		
	</body>	
</html>
