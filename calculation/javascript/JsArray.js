function printName()
{
		
	for(i= 0 ;i < 10 ; i++)
	{
	document.writeln("<br>" +(i+10) + "." + "Bala");
	}
	document.writeln("<br>" +(i+1) + "." + "Bala");
}
printName();
console.log(i);

					function multiplicationTable(m){
							var str = "";
							for(i = 1; i<=20; i++) {

							var str = str + i + "*" + m + "="+ (i * m)  + "<br/>";
							
							}
							document.getElementById("myDiv").innerHTML=str;
							console.log(str);
						}
						multiplicationTable(4);