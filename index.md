<script src="https://cdn.jsdelivr.net/gh/galkin33rus/NumberConverter/test/javascript/main.js"></script>
<script src="https://cdn.jsdelivr.net/gh/galkin33rus/NumberConverter/Converter.js"></script>
<script src="https://cdn.jsdelivr.net/gh/galkin33rus/NumberConverter/MathBigNum.js"></script>

<style>
	body {width: 100%;}
	input {font-size: 16px;}
	.form {font-family:arial;margin: 0 auto; width: 450px;}		
	.title {font-family:arial;font-size:20px;text-align:center;margin:0 50px 10px 0;cursor:pointer;}
	#result {margin-top:5px;}
</style>
	
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
	
