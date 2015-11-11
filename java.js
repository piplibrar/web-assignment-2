var back = 'BRAR.jpg';
var tile = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg'];

function randOrd(a, b)
{
	return (Math.round(Math.random()));
} 
var im = []; 
for (var i = 0; i < 10; i++) 
{
	im[i] = new Image();
	im[i].src = tile[i]; 
	tile[i] = '<img src="'+tile[i]+'" width="100" height="150" alt="tile" \/>';
	tile[i+10] = tile[i];
} 

    var a, b, c, d, e, f, g; 
	window.onload=start; 
	function start() 
	{
		for (var i = 0; i <= 19 ;i++) 
		displayBack(i);
		clearInterval(e);
		c = d = g = 0;
		tile.sort( randOrd );
		gr(); 
		e = setInterval('gr()', 1000);
	} 
	
	 
	function conceal() 
	{
		d = 0; 
		if (tile[a] != tile[b]) 
		{
			displayBack(a);
			displayBack(b);
		} 
		else 
			g++; 
		if (g >= 10) 
			clearInterval(e);
	}
	
	function disp(sel) 
	{
		if (d>1) 
		{
			clearTimeout(f); 
			conceal();
		}
		document.getElementById('t'+sel).innerHTML = tile[sel];
		if (d==0) 
			a = sel;
		else 
		{
			b = sel;
			f = setTimeout('conceal()', 900);}d++;
		} 
		
	
	function displayBack(i) 
{
	document.getElementById('t'+i).innerHTML = '<div onclick="disp('+i+');return false;"><img src="'+back+'" width="100" height="150" alt="Backside" \/><\/div>';
	}
        function gr() 
	{
		var min = Math.floor(c/60);
		var sec = tmr%60;document.getElementById('g').value = min+':'+ (sec<10 ? '0' : '') + sec;
		tmr++;
	}            