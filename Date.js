//alert("Welcome to Time Machine");
function currentTime()
{
	let t=new Date();
	
	let hr=t.getHours();
	let min=t.getMinutes();
	let sec=t.getSeconds();
	let  ms=t.getMilliseconds();
	let m="am";
	if(hr>12 && hr<24)
	{
		m="pm";
		hr%=12;
	}
	document.getElementById("t1").innerHTML=hr;
	document.getElementById("t2").innerHTML=min;
	document.getElementById("t3").innerHTML=sec;
	document.getElementById("t4").innerHTML=m;
	document.getElementById("zone").innerHTML=t;
}
setInterval(currentTime,1 );
currentTime();