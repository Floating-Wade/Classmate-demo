if (sessionStorage.getItem('accessGranted')) {
	
	
	} else {
	alert('您尚未获得访问权限，请先在相关页验证身份！');
	window.location.href = '../index.html'; // 跳转到生成权限的页面
	}

// 监听整个文档的右键菜单事件
document.addEventListener('contextmenu', function(event) {
    // 阻止默认的右键菜单行为
    event.preventDefault();
 
    // 可以在这里添加自定义的逻辑，比如显示自定义的菜单
});

function CAEC()
{
	// 选取所有class为clean的元素
	var elements = document.querySelectorAll('.clean');
	
	// 遍历这些元素
	elements.forEach(function(element) {
	    // 删除元素
	    element.remove();
	});
}

window.onload=function()
{
	
	var input3=document.getElementById("input3");
	var xinmin=document.getElementById("input1");
	var anhao=document.getElementById("input2");
	
	input3.onclick=function()
	{
		var bidui=(
		xinmin.value=="丘素榕"&&anhao.value=="123456"||
		xinmin.value=="江若澜"&&anhao.value=="123456"||
		/*在此处添加账号密码，格式：
		
		xinmin.value=="xx"&&anhao.value=="xxx"||
		
		在xx中写名字，xxx中写密码
		*/
	   xinmin.value=="请在这里填写名字哦"&&anhao.value==""
		);
		if(bidui)
		{
			//from AI————
			// 查询所有class为clean的元素
			var elementsToClean = document.querySelectorAll('.clean');
			 
			// 遍历这些元素并移除它们
			elementsToClean.forEach(function(element) {
			  element.remove();
			});
			//————from AI
			
			
			function xuehuanow()
			{
			//aiiiiiiiii
			var xuehuaya=document.createElement("canvas");
			xuehuaya.setAttribute("id", "snowflake-canvas");
			xuehuaya.setAttribute("class", "over");
			xuehuaya.setAttribute("style", "position: absolute;width: 100%;height: 100%;top: 0;left: 0;");
			// 获取body的引用
			var body = document.body;
			// 获取body的第一个子元素
			var firstChild = body.firstChild;
			// 如果body有子元素，则将新元素插入到第一个子元素之前
			if (firstChild) {
			    body.insertBefore(xuehuaya, firstChild);
			} else {
			    // 如果body没有子元素，则直接将新元素添加到body中
			    body.appendChild(xuehuaya);
			}
			
			const canvas = document.getElementById('snowflake-canvas');
			const ctx = canvas.getContext('2d');
			const snowflakes = [];
			const flakeCount = 200;
			const snowflakeRange = 50;
			const snowflakeSpeed = 1;
			const snowflakeOpacity = 0.5;
			 
			function init() {
			  canvas.width = window.innerWidth;
			  canvas.height = window.innerHeight;
			  for (let i = 0; i < flakeCount; i++) {
			    snowflakes.push({
			      x: Math.random() * canvas.width,
			      y: Math.random() * canvas.height,
			      size: Math.random() * snowflakeRange,
			      speed: Math.random() * snowflakeSpeed,
			      opacity: snowflakeOpacity
			    });
			  }
			  animateSnow();
			}
			 
			function animateSnow() {
			  ctx.clearRect(0, 0, canvas.width, canvas.height);
			  snowflakes.forEach((flake) => {
			    flake.y += flake.speed;
			    flake.x += Math.cos(flake.y * 0.1) * 0.5;
			    if (flake.y > canvas.height) {
			      flake.y = 0;
			    }
			    ctx.beginPath();
			    ctx.fillStyle = 'white';
			    ctx.globalAlpha = flake.opacity;
			    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
			    ctx.fill();
			  });
			 var fuck=requestAnimationFrame(animateSnow);
			 function stopSnow(){
				 cancelAnimationFrame(fuck);
			 }
			 window.stopSnow=stopSnow;
			}
			 
			window.addEventListener('resize', () => {
			  canvas.width = window.innerWidth;
			  canvas.height = window.innerHeight;
			});
			init();
			var timeoutover=setTimeout(() => {
			  ctx.clearRect(0, 0, canvas.width, canvas.height);
			}, 2000); // 持续时间2秒
			//aiiiiiiiii
			}
			xuehuanow()
			
			
			document.body.style.backgroundImage = "url('p/verygood.jpg')";
			document.body.style.backgroundSize = "1800px";
			
			var h1 = document.createElement("h1");
			h1.className = "h1";
			h1.textContent="上杭县2021届（9）班回忆录";
			Object.assign(h1.style, {
			  fontWeight:"bold",
			  fontStyle: 'oblique',
			  color: 'black',
			  letterSpacing:"6px",
			  textShadow:"2px 3px 1px orange",
			  textAlign:"center"
			});
			h1.addEventListener('mouseenter', function() {
			        this.style.color = 'yellow';
			    });
			    h1.addEventListener('mouseleave', function() {
			        this.style.color = '';
			    });
			var parent = document.getElementById('aa').parentNode;
			parent.insertBefore(h1, document.getElementById('aa'));
			//ai
			document.getElementById('menu-btn').addEventListener('click', function() {
			  var menu = document.getElementById('nav-menu');
			  if (menu.style.transform === 'translateX(-210px)') {
			    menu.style.transform = 'translateX(0)';
			  } else {
			    menu.style.transform = 'translateX(-210px)';
			  }
			});
			var forcolor=document.getElementById('menu-btn');
			forcolor.addEventListener('mouseenter', function() {
			        this.style.backgroundColor = 'deepskyblue';
			});
			forcolor.addEventListener('mouseleave', function() {
			    this.style.backgroundColor = 'lightpink';
			});
		}
		else
		{
			alert("账号或密码出错啦！\n要不···再试试？");
		}
	}
	var a_txxx=document.getElementById("a_txxx");
	a_txxx.onclick=function myFunction()
	{
		stopSnow();
		//from AI————
		// 查询所有class为over的元素
		var elementsToOver = document.querySelectorAll('.over');
		 
		// 遍历这些元素并移除它们
		elementsToOver.forEach(function(element) {
		  element.remove();
		});
		//————from AI
		
		var br=document.createElement("br");
		br.setAttribute("class","over");
		document.body.appendChild(br);
		
		var txxx_button=document.createElement("button");
		txxx_button.setAttribute("class","over");
		txxx_button.setAttribute("style", "width:160px;font-size:25px;;background-color:lightskyblue;box-shadow:5px 5px 2px gray;");
		txxx_button.addEventListener('mouseenter', function() {
		        this.style.backgroundColor = 'deepskyblue';
		});
		txxx_button.addEventListener('mouseleave', function() {
		    this.style.backgroundColor = 'lightskyblue';
		});
		txxx_button.addEventListener('click', function() {
		    this.style.backgroundColor = 'blue';
		});
		document.body.appendChild(txxx_button);
		
		var txxx_button_span=document.createElement("span");
		txxx_button_span.setAttribute("class","over");
		txxx_button_span.setAttribute("id","txxx_button_span");
		txxx_button_span.setAttribute("style", "color:white;");
		txxx_button_span.innerHTML = '同学名册';
		txxx_button.appendChild(txxx_button_span);
		
		var txxx_div1=document.createElement("div");
		txxx_div1.setAttribute("class","over");
		txxx_div1.setAttribute("style", "width:160px;");
		document.body.appendChild(txxx_div1);
		
		var txxx_ul=document.createElement("ul");
		txxx_ul.setAttribute("class","over");
		txxx_ul.setAttribute("id", "txxx_ul");
		txxx_ul.setAttribute("style", "display:none;list-style:url(p/trying.png)");
		txxx_div1.appendChild(txxx_ul);
		
		txxx_button.addEventListener('click', function()
		{
			var aa=txxx_ul.getAttribute("style");
			if(aa=="display:none;list-style:url(p/trying.png)")
			{
				txxx_ul.setAttribute("style", "display:block;list-style:url(p/trying.png)");
			}
			else
			{
				txxx_ul.setAttribute("style", "display:none;list-style:url(p/trying.png)");
			}
		})
		
		var li1=document.createElement("li");
		var li2=document.createElement("li");
		var li3=document.createElement("li");
		var li4=document.createElement("li");
		var li5=document.createElement("li");
		var li6=document.createElement("li");
		var li7=document.createElement("li");
		var li8=document.createElement("li");
		var li9=document.createElement("li");
		var li10=document.createElement("li");
		var li11=document.createElement("li");
		var li12=document.createElement("li");
		
		
		li1.setAttribute("class","over");
		li2.setAttribute("class","over");
		li3.setAttribute("class","over");
		li4.setAttribute("class","over");
		li5.setAttribute("class","over");
		li6.setAttribute("class","over");
		li7.setAttribute("class","over");
		li8.setAttribute("class","over");
		li9.setAttribute("class","over");
		li10.setAttribute("class","over");
		li11.setAttribute("class","over");
		li12.setAttribute("class","over");
		
		li1.innerHTML="丘素榕";
		li2.innerHTML="江若澜";
		li3.innerHTML="梁俊辉";
		li4.innerHTML="黎怡枭";
		li5.innerHTML="李宥琳";
		li6.innerHTML="林晶";
		li7.innerHTML="陈俞丹";
		li8.innerHTML="林子宸";
		li9.innerHTML="林思扬";
		li10.innerHTML="游锦强";
		li11.innerHTML="钟天琪";
		li12.innerHTML="林宸";
		
		for(var changeli=1;changeli<13;changeli++)
		{
			var forli="li"+changeli;
			var forliok=eval(forli);
			forliok.setAttribute("style","box-shadow:3px 3px 4px lightskyblue;text-align:center;text-shadow:2px 2px 2px gray;font-size:25px;font-style:oblique;color:aquamarine;background-color:whitesmoke;border:20px skyblue;border-radius: 30px; font-family: 'cursive', Courier, monospace;");
			txxx_ul.appendChild(forliok);
		}
		
		li1.onclick=function()
		{
			CAEC()
			
			var div_back=document.createElement('div');
			div_back.setAttribute("class","clean")
			div_back.setAttribute("style","margin:12px;border: 2px solid whitesmoke;box-shadow:6px 6px 6px gray;border-radius: 50px;background-color:white;max-width:100%;background:url(p/girl.jpg) no-repeat 0px 0px;background-size: cover;");
			document.body.appendChild(div_back);
			
			var name=document.createElement('p');
			name.textContent="姓名：丘素榕";
			name.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(name);
			
			var gender=document.createElement('p')
			gender.textContent="性别：Girl";
			gender.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(gender);
			
			var number=document.createElement('p')
			number.textContent="座号：1号";
			number.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(number);
			
			var message=document.createElement('p');
			message.textContent="相关信息：";
			message.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(message);
			
			var video=document.createElement('video');
			video.setAttribute('style','max-width:100%;margin-left:10px;')
			video.setAttribute("controls","");
			div_back.appendChild(video);
			var source=document.createElement("source");
			source.setAttribute("type","video/mp4");
			source.setAttribute("src","../phone/video/a.mp4");//目录修改区
			video.appendChild(source);
			
			
		}
		
		li2.onclick=function()
		{
			CAEC()
			
			var div_back=document.createElement('div');
			div_back.setAttribute("class","clean")
			div_back.setAttribute("style","margin:12px;border: 2px solid whitesmoke;box-shadow:6px 6px 6px gray;border-radius: 50px;background-color:white;max-width:100%;background:url(p/girl.jpg) no-repeat 0px 0px;background-size: cover;");
			document.body.appendChild(div_back);
			
			var name=document.createElement('p');
			name.textContent="姓名：江若澜";
			name.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(name);
			
			var gender=document.createElement('p')
			gender.textContent="性别：Girl";
			gender.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(gender);
			
			var number=document.createElement('p')
			number.textContent="座号：2号";
			number.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(number);
			
			var message=document.createElement('p');
			message.textContent="相关信息：";
			message.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(message);
			
			var video=document.createElement('video');
			video.setAttribute('style','max-width:100%;margin-left:10px;')
			video.setAttribute("controls","");
			div_back.appendChild(video);
			var source=document.createElement("source");
			source.setAttribute("type","video/mp4");
			source.setAttribute("src","../phone/video/a.mp4");//目录修改区
			video.appendChild(source);
			
			
		}
		
		li3.onclick=function()
		{
			CAEC()
			
			var div_back=document.createElement('div');
			div_back.setAttribute("class","clean")
			div_back.setAttribute("style","margin:12px;border: 2px solid whitesmoke;box-shadow:6px 6px 6px gray;border-radius: 50px;background-color:white;max-width:100%;background:url(p/boy.png) no-repeat 0px 0px;background-size: cover;");
			document.body.appendChild(div_back);
			
			var name=document.createElement('p');
			name.textContent="姓名：梁俊辉";
			name.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(name);
			
			var gender=document.createElement('p')
			gender.textContent="性别：Boy";
			gender.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(gender);
			
			var number=document.createElement('p')
			number.textContent="座号：3号";
			number.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(number);
			
			var message=document.createElement('p');
			message.textContent="相关信息：";
			message.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(message);
			
			var video=document.createElement('video');
			video.setAttribute('style','max-width:100%;margin-left:10px;')
			video.setAttribute("controls","");
			div_back.appendChild(video);
			var source=document.createElement("source");
			source.setAttribute("type","video/mp4");
			source.setAttribute("src","../phone/video/b.mp4");//目录修改区
			video.appendChild(source);
			
			
		}
		
		li4.onclick=function()
		{
			CAEC()
			
			var div_back=document.createElement('div');
			div_back.setAttribute("class","clean")
			div_back.setAttribute("style","margin:12px;border: 2px solid whitesmoke;box-shadow:6px 6px 6px gray;border-radius: 50px;background-color:white;max-width:100%;background:url(p/girl.jpg) no-repeat 0px 0px;background-size: cover;");
			document.body.appendChild(div_back);
			
			var name=document.createElement('p');
			name.textContent="姓名：黎怡枭";
			name.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(name);
			
			var gender=document.createElement('p')
			gender.textContent="性别：Girl";
			gender.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(gender);
			
			var number=document.createElement('p')
			number.textContent="座号：4号";
			number.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(number);
			
			var message=document.createElement('p');
			message.textContent="相关信息：";
			message.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(message);
			
			var video=document.createElement('video');
			video.setAttribute('style','max-width:100%;margin-left:10px;')
			video.setAttribute("controls","");
			div_back.appendChild(video);
			var source=document.createElement("source");
			source.setAttribute("type","video/mp4");
			source.setAttribute("src","../phone/video/怡枭组.mp4");//目录修改区
			video.appendChild(source);
			
			
		}
		
		li5.onclick=function()
		{
			CAEC()
			
			var div_back=document.createElement('div');
			div_back.setAttribute("class","clean")
			div_back.setAttribute("style","margin:12px;border: 2px solid whitesmoke;box-shadow:6px 6px 6px gray;border-radius: 50px;background-color:white;max-width:100%;background:url(p/girl.jpg) no-repeat 0px 0px;background-size: cover;");
			document.body.appendChild(div_back);
			
			var name=document.createElement('p');
			name.textContent="姓名：李宥琳";
			name.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(name);
			
			var gender=document.createElement('p')
			gender.textContent="性别：Girl";
			gender.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(gender);
			
			var number=document.createElement('p')
			number.textContent="座号：5号";
			number.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(number);
			
			var message=document.createElement('p');
			message.textContent="相关信息：";
			message.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
			div_back.appendChild(message);
			
			var photo=document.createElement('img');
			photo.setAttribute("style","max-width:100%;");
			photo.setAttribute("src","../phone/photo/a.jpg");
			div_back.appendChild(photo);
			
			var video=document.createElement('video');
			video.setAttribute('style','max-width:100%;margin-left:10px;')
			video.setAttribute("controls","");
			div_back.appendChild(video);
			var source=document.createElement("source");
			source.setAttribute("type","video/mp4");
			source.setAttribute("src","../phone/video/c.mp4");//目录修改区
			video.appendChild(source);
			
			
		}
		
		li6.onclick=function()
		{
			
				CAEC()
				
				var div_back=document.createElement('div');
				div_back.setAttribute("class","clean")
				div_back.setAttribute("style","margin:12px;border: 2px solid whitesmoke;box-shadow:6px 6px 6px gray;border-radius: 50px;background-color:white;max-width:100%;background:url(p/girl.jpg) no-repeat 0px 0px;background-size: cover;");
				document.body.appendChild(div_back);
				
				var name=document.createElement('p');
				name.textContent="姓名：林晶";
				name.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
				div_back.appendChild(name);
				
				var gender=document.createElement('p')
				gender.textContent="性别：Girl";
				gender.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
				div_back.appendChild(gender);
				
				var number=document.createElement('p')
				number.textContent="座号：6号";
				number.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
				div_back.appendChild(number);
				
				var message=document.createElement('p');
				message.textContent="相关信息：";
				message.setAttribute("style","color:pink;font-size:30px;font-style:oblique;padding-left:10px;text-shadow:2px 2px 2px gray;")
				div_back.appendChild(message);
				/*
				var photo=document.createElement('img');
				photo.setAttribute("style","max-width:100%;");
				photo.setAttribute("src","../phone/photo/a.jpg");
				div_back.appendChild(photo);
				*/
				var video=document.createElement('video');
				video.setAttribute('style','max-width:100%;margin-left:10px')
				video.setAttribute("controls","");
				div_back.appendChild(video);
				var source=document.createElement("source");
				source.setAttribute("type","video/mp4");
				source.setAttribute("src","../phone/video/a.mp4");//目录修改区
				video.appendChild(source);
				
				
			
		}
	}
}