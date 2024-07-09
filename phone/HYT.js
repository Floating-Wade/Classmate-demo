window.onload = function() {
	if (sessionStorage.getItem('accessGranted')) {
	
	home();
	} else {
	alert('您尚未获得访问权限，请先在相关页验证身份！');
	window.location.href = '../index.html'; // 跳转到生成权限的页面
	}



	function zhuzhiyoujian() //阻止右键
	{
		// 监听整个文档的右键菜单事件
		document.addEventListener('contextmenu', function(event) {
			// 阻止默认的右键菜单行为
			event.preventDefault();

			// 可以在这里添加自定义的逻辑，比如显示自定义的菜单
		});
	}
	zhuzhiyoujian(); //阻止右键

	document.addEventListener('keydown', function(event) {
		// 假设电源键+音量减键是截图快捷键（这取决于设备和Android版本）
		if (event.keyCode === 27 && event.ctrlKey && event.shiftKey) {
			alert('请不要截图！');
			// 在这里可以执行一些操作，如清空敏感数据或导航到另一个页面
			location.reload(false);
			event.preventDefault(); // 阻止默认行为
		}
	});

	function CAEC() {
		// 选取所有class为clean的元素
		var elements = document.querySelectorAll('.clean');

		// 遍历这些元素
		elements.forEach(function(element) {
			// 删除元素
			element.remove();
		});
	}

	function CAEO() {
		// 选取所有class为over的元素
		var elements = document.querySelectorAll('.over');

		// 遍历这些元素
		elements.forEach(function(element) {
			// 删除元素
			element.remove();
		});
	}

	function CAES() {
		// 选取所有class为speacial的元素
		var elements = document.querySelectorAll('.speacial');

		// 遍历这些元素
		elements.forEach(function(element) {
			// 删除元素
			element.remove();
		});
	}

	function CAEVP() {
		// 选取所有class为vp的元素
		var elements = document.querySelectorAll('.vp');

		// 遍历这些元素
		elements.forEach(function(element) {
			// 删除元素
			element.remove();
		});
	}




	function home() {
		CAEC();
		var div_head = document.createElement("div");
		div_head.setAttribute("id", "fuck");
		div_head.setAttribute("class", "speacial");
		div_head.setAttribute("style",
			"box-shadow:3px 3px 3px 8px gray;margin-left:10px;margin-right:10px;border: 3px solid white;border-radius: 50px;padding-bottom:6px;opacity:20;background:url(picture/div-head-background.png) no-repeat 0px 0px;background-size: cover;position: relative;max-width:100%"
		);
		document.body.appendChild(div_head);

		var img_home = document.createElement("img");
		img_home.setAttribute("src", "picture/homea.png");
		img_home.setAttribute("style", "max-width:100%;margin-left:20px;margin-top:40px");
		div_head.appendChild(img_home);

		img_home.onclick = function() {
			var div_home = document.createElement("div");
			div_home.setAttribute("style",
				"border-top-right-radius: 50px;position: fixed;top: 0;left: 0;width: 65%;height: 100%;background-color:white;box-shadow:3px 3px 3px gray; z-index: 9999; "
			);
			div_home.setAttribute("class", "over");
			body.appendChild(div_home);

			var div_home_text0 = document.createElement("p");
			div_home_text0.textContent = "菜单";
			div_home_text0.setAttribute("style",
				"margin-top:20px;margin-bottom:0px;font-size:70px;margin-left:36px;color:black;text-shadow:1px 1px 3px gray;padding:18px"
			);
			div_home.appendChild(div_home_text0);

			var div_home_text0 = document.createElement("p");
			div_home_text0.textContent = "返回首页";
			div_home_text0.setAttribute("style",
				"margin-top:0px;margin-bottom:0px;font-size:50px;margin-left:40px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
			);
			div_home.appendChild(div_home_text0);
			div_home_text0.onclick = function() {
				CAES();
				home();
				CAEO();
			}

			var div_home_text1 = document.createElement("p");
			div_home_text1.textContent = "同学信息";
			div_home_text1.setAttribute("style",
				"margin-top:0px;margin-bottom:0px;font-size:50px;margin-left:40px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
			);
			div_home.appendChild(div_home_text1);
			div_home_text1.onclick = function() {
				txxx();
				CAEO();
			}

			var div_home_text2 = document.createElement("p");
			div_home_text2.textContent = "视屏集录";
			div_home_text2.setAttribute("style",
				"margin-top:0px;margin-bottom:0px;font-size:50px;margin-left:40px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
			);
			div_home.appendChild(div_home_text2);
			div_home_text2.onclick = function() {
				spjl();
				CAEO();
			}

			var div_home_text3 = document.createElement("p");
			div_home_text3.textContent = "图片集录";
			div_home_text3.setAttribute("style",
				"margin-top:0px;margin-bottom:0px;font-size:50px;margin-left:40px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
			);
			div_home.appendChild(div_home_text3);
			div_home_text3.onclick = function() {
				tpjl();
				CAEO();
			}

			var div_home_text0 = document.createElement("p");
			div_home_text0.textContent = "四角矩阵-Quadrilateral Matrix团队下载站";
			div_home_text0.setAttribute("style",
				"margin-top:0px;margin-bottom:0px;font-size:50px;margin-left:40px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
			);
			div_home.appendChild(div_home_text0);
			div_home_text0.onclick = function() {
				window.open("../Download/teamDownload.html");
			}

			var div_home_textx = document.createElement("p");
			div_home_textx.textContent = "···敬请等待更新";
			div_home_textx.setAttribute("style",
				"margin-top:20px;margin-bottom:0px;font-size:50px;margin-left:40px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
			);
			div_home.appendChild(div_home_textx);

			var div_home_over = document.createElement("div");
			div_home_over.setAttribute("style",
				"position: fixed;top: 0;right: 0;width: 35%;height: 100%; z-index: 9999; ");
			div_home_over.setAttribute("class", "over");
			body.appendChild(div_home_over);

			div_home_over.onclick = function() {
				CAEO();
			}
		}

		var span_div_head = document.createElement("span");
		span_div_head.setAttribute("style",
			"color:lightblue;font-weight: 600;text-shadow:3px 3px 6px whitesmoke;font-size:60px;font-style:oblique;margin-top:0px;text-align:center;position:absolute;top:50px"
		); //position:absolute;right:5%;top:40px;
		span_div_head.textContent = "上杭县2021届（9）班回忆录";
		div_head.appendChild(span_div_head);

		var p_div_head = document.createElement("p");
		p_div_head.textContent = "❉❉首页&关于❉❉";
		p_div_head.setAttribute("class", "clean");
		p_div_head.setAttribute("style",
			"font-weight: 600;font-size:80px;margin-top:30px;text-align:center;color:snow;text-shadow:2px 2px 6px white"
		)
		div_head.appendChild(p_div_head);

		var div_body = document.createElement("div");
		div_body.setAttribute("class", "clean");
		div_body.setAttribute("style",
			"box-shadow:3px 3px 3px 8px gray;margin-top:18px;background-color:white;margin-left:10px;margin-right:10px;border-radius: 50px;"
		)
		document.body.appendChild(div_body);

		var p_div_body = document.createElement("p");
		p_div_body.textContent = "===-关于网站-===";
		p_div_body.setAttribute("class", "clean");
		p_div_body.setAttribute("style",
			"font-size:60px;font-weight: 600;text-align:center;margin-bottom:40px;margin-top:0px;padding-top:60px;"
		)
		div_body.appendChild(p_div_body);

		var img_div_body = document.createElement("img");
		img_div_body.setAttribute("class", "clean");
		img_div_body.setAttribute("src", "picture/div-body-img.png");
		img_div_body.setAttribute("style", "max-width:100%;text-align:center;");
		div_body.appendChild(img_div_body);

		function addLineBreaks(text) {
			return text.replace(/\n/g, "<br>");
		}

		var h2_fir = document.createElement("h2");
		h2_fir.setAttribute("class", "clean");
		h2_fir.textContent = "我们的请愿:";
		h2_fir.setAttribute("style", "margin-left:16px");
		div_body.appendChild(h2_fir);

		var p_body_div_body = document.createElement("p");
		p_body_div_body.setAttribute("class", "clean");
		p_body_div_body.innerHTML = addLineBreaks(
			"对于这座记忆殿堂：\n我们希望它犹如雨后春雨般成长，\n希望它能够弥补纸质回忆录的遗憾，\n使之成为天使一般————\n温暖而又美好。\n我们不愿它成为剧场的笑剧，\n不愿它成为漏风的墙，\n更不愿它成为伤人的利刃————\n以黑暗而存在。\n为此，制作组对同学您发出舞伴的邀请：\n在这座记忆的宫殿中，\n以美好的心境去观赏记忆之花，\n以动人的舞姿去感受记忆洪流的精彩涌动；\n请不要以高傲之心俯看他人的记忆花舞，\n亦不要伸手摘取“可远观而不可亵玩”的记忆花瓣。\n\n————光阴似箭，日月如梭。\n也许您今生只会参与一次这儿的舞会，\n但，\n我们会如林海般留在这里，\n殿堂的大门随时恭候嘉宾的到来。\n园丁们会守护这里的每一朵花朵，\n我们也会阻止暴雨带走花瓣，\n我们将用光阴的石料继续维护、创新着座宫殿。\n当您收到参观殿堂的邀请时,\n您已经成为了这座殿堂的主人；\n\n——这儿有52朵花，\n——11位主人，\n——两名园丁。\n\n愿这座殿堂能成为您的一本别致的回忆录，\n能成为您时常光顾的风景胜地，\n以及那份可以解冻您未来尘封温暖。\n\n再次感谢您的莅临。"
		);
		p_body_div_body.setAttribute("style",
			"margin-left:36px;color:black;text-shadow:1px 1px 3px gray;font-width:300px;padding:18px");
		div_body.appendChild(p_body_div_body);

		var h2_div_body = document.createElement("h2");
		h2_div_body.setAttribute("class", "clean");
		h2_div_body.textContent = "功能介绍:";
		h2_div_body.setAttribute("style", "margin-left:16px");
		div_body.appendChild(h2_div_body);

		var p_h2_div_body = document.createElement("p");
		p_h2_div_body.setAttribute("class", "clean");
		p_h2_div_body.innerHTML = addLineBreaks("同学信息查看\n同学留言\n集体有关图片\n图片（嘿嘿）");
		p_h2_div_body.setAttribute("style",
			"margin-left:36px;color:black;text-shadow:1px 1px 3px gray;font-width:300px;padding:18px");
		div_body.appendChild(p_h2_div_body);

		var h2_2_div_body = document.createElement("h2");
		h2_2_div_body.setAttribute("class", "clean");
		h2_2_div_body.textContent = "强调声明:";
		h2_2_div_body.setAttribute("style", "margin-left:16px");
		div_body.appendChild(h2_2_div_body);

		var p_h2_2_div_body = document.createElement("p");
		p_h2_2_div_body.setAttribute("class", "clean");
		p_h2_2_div_body.innerHTML = addLineBreaks(
			"本网站由四角矩阵-Quadrilateral Matrix TEAM制作，网站内如有您不愿被查询的隐私，请第一时间通知我们！我们会及时下架相关内容。\n如您有想上传、下架的内容或者其他想说的、想问的事情，请发给邮箱：3466473875@qq.com，或者联系作者QQ：3466473875。\n我们要求遵循网站规则（详细请见登录时的规则页面），反馈时必须注明有关内容、对象以及您的姓名与联系方式（对于上传内容，我们会优先征询有关人员是否同意）。\n必须遵守法律法规，禁止暴黄赌毒等不法内容上传，违者将受到举报。\n本网站内容倾向于回忆往事，建议上传内容倾向于友爱（不做强求）\n最后，希望各位能沉浸在回忆之境！！"
		);
		p_h2_2_div_body.setAttribute("style",
			"margin-left:36px;color:black;text-shadow:1px 1px 3px gray;font-width:300px;padding:18px");
		div_body.appendChild(p_h2_2_div_body);
	}

	function txxx() {
		CAEC();

		var p_div_head = document.createElement("p");
		p_div_head.textContent = "❉❉同学信息❉❉";
		p_div_head.setAttribute("class", "clean");
		p_div_head.setAttribute("style",
			"font-weight: 600;font-size:80px;margin-top:30px;text-align:center;color:snow;text-shadow:2px 2px 6px white"
		);
		var fuck = document.getElementById("fuck");
		fuck.appendChild(p_div_head);

		var div_body = document.createElement("div");
		div_body.setAttribute("class", "clean");
		div_body.setAttribute("style",
			"box-shadow:3px 3px 3px 8px gray;margin-top:18px;background-color:white;margin-left:10px;margin-right:10px;border-radius: 50px;"
		)
		document.body.appendChild(div_body);
		//请注意：前三段代码是每个部分必要的，除“同学信息”这几个字可以改

		var p_div_body = document.createElement("p");
		p_div_body.textContent = "===-点击选择同学-===";
		p_div_body.setAttribute("class", "clean");
		p_div_body.setAttribute("style",
			"padding-bottom:20px;font-size:60px;font-weight: 600;text-align:center;margin-top:0px;padding-top:20px;margin-bottom:0px"
		)
		div_body.appendChild(p_div_body);

		var txxx_div_body = document.createElement("div");
		txxx_div_body.setAttribute("class", "clean");
		txxx_div_body.setAttribute("style",
			"box-shadow:3px 3px 3px 8px gray;margin-top:18px;background-color:white;margin-left:10px;margin-right:10px;border-radius: 50px;"
		)

		var information1 = document.createElement("p");
		information1.setAttribute("style",
			"margin-top:10px;font-size:50px;margin-left:20px;font-style:oblique;text-shadow:2px 2px 2px lightgray;"
		);
		txxx_div_body.appendChild(information1);

		var information2 = document.createElement("p");
		information2.setAttribute("style",
			"font-size:50px;margin-left:20px;font-style:oblique;text-shadow:2px 2px 2px lightgray;");
		txxx_div_body.appendChild(information2);

		var information3 = document.createElement("p");
		information3.setAttribute("style",
			"font-size:50px;margin-left:20px;font-style:oblique;text-shadow:2px 2px 2px lightgray;");
		txxx_div_body.appendChild(information3);




		p_div_body.onclick = function() {
			var div_home_back = document.createElement("div");
			div_home_back.setAttribute("style",
				"position: fixed;top: 0;left: 0;width: 65%;height: 100%;background-color:white;box-shadow:3px 0px 3px gray; z-index: 9998; "
			);
			div_home_back.setAttribute("class", "over");
			body.appendChild(div_home_back);

			var div_home = document.createElement("div");
			div_home.setAttribute("style",
				"position:absolute;top: 0;left: 0;width: 65%;background-color:white; z-index: 9999; ");
			div_home.setAttribute("class", "over");
			body.appendChild(div_home);

			function classmates() {

				function person(name, colors, sex, seat, ppath1, vpath1, hpath1) {
					var div_home_text1 = document.createElement("p");
					div_home_text1.textContent = name;
					div_home_text1.setAttribute("style",
						"text-align:left;margin-top:0px;margin-bottom:0px;font-size:50px;color:black;text-shadow:1px 1px 3px gray;padding:18px;padding-bottom:0px;"
					);
					div_home.appendChild(div_home_text1);
					div_home_text1.onclick = function() {
						CAEO();
						CAEVP()
						document.body.appendChild(txxx_div_body);
						information1.style.color = colors;
						information2.style.color = colors;
						information3.style.color = colors;
						p_div_body.textContent = "===-" + name + "-===";
						information1.textContent = "性别：" + sex;
						information2.textContent = "座号：" + seat + "号";
						information3.textContent = "相关信息：";


						//需要集体搬迁--
						var img1 = document.createElement("img");
						img1.setAttribute("class", "vp");
						img1.setAttribute("style", "max-width:100%;");
						img1.setAttribute("src", ppath1);
						txxx_div_body.appendChild(img1);

						var video1 = document.createElement("video");
						video1.setAttribute("class", "vp");
						video1.setAttribute("style", "max-width:100%;");
						video1.setAttribute("controls", "");
						var source1 = document.createElement("source");
						source1.setAttribute("type", "video/mp4");
						source1.setAttribute("src", vpath1); //目录修改区
						txxx_div_body.appendChild(video1);
						video1.appendChild(source1);


						//--需要集体搬迁

						var adiv = document.createElement("div");
						adiv.setAttribute("class", "vp");
						adiv.setAttribute("style", "padding:40px;text-align:center");
						txxx_div_body.appendChild(adiv);

						var a = document.createElement("a");
						a.setAttribute("class", "vp");
						a.setAttribute("style", "margin-top:80px;font-size:50px;color:" + colors +
							";text-shadow:2px 2px 2px;box-shadow:2px 2px 2px;");
						a.setAttribute("href", hpath1);
						a.textContent = "点击此处查看更多信息";
						adiv.appendChild(a);


					}
				}

				//同学区
				person("丘素榕", "pink", "girl", "1", "photo/lose.jpg", "video/a.mp4", "person/lose.html");
				person("江若澜", "pink", "girl", "2", "photo/lose.jpg", "video/a.mp4", "person/lose.html");
				person("梁俊辉", "deepskyblue", "boy", "3", "photo/lose.jpg", "video/b.mp4", "person/lose.html");
				person("黎怡枭", "pink", "girl", "4", "photo/lose.jpg", "video/怡枭组.mp4", "person/lose.html");
				person("李宥琳", "pink", "girl", "5", "photo/a.jpg", "video/c.mp4", "person/lose.html");
				person("林晶", "pink", "girl", "6", "photo/lj.jpg", "video/a.mp4", "person/lose.html");
				person("陈俞丹", "pink", "girl", "7", "photo/cyd.jpg", "video/c.mp4", "person/lose.html");
				person("林子宸", "deepskyblue", "boy", "8", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("林思扬", "deepskyblue", "boy", "9", "photo/lsy_wbl.jpg", "video/d.mp4","person/lose.html");
				person("游锦强", "deepskyblue", "boy", "10", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("钟天琪", "deepskyblue", "boy", "11", "photo/lose.jpg", "video/b.mp4", "person/lose.html");
				person("林宸", "deepskyblue", "boy", "12", "photo/lose.jpg", "video/b.mp4", "person/lose.html");
				person("罗晨奕", "pink", "girl", "13", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("郭秋果", "pink", "girl", "14", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("林剑锋", "deepskyblue", "boy", "15", "photo/lose.jpg", "video/f.mp4","person/lose.html");
				person("林楚扬", "deepskyblue", "boy", "16", "photo/lose.jpg", "video/b.mp4","person/lose.html");
				person("阙星萍", "pink", "girl", "17", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("蓝思婧", "pink", "girl", "18", "photo/lose.jpg", "video/a.mp4", "person/lose.html");
				person("温博灵", "deepskyblue", "boy", "19", "photo/lsy_wbl.jpg", "video/lose.mp4","person/lose.html");
				person("林裕涵", "deepskyblue", "boy", "20", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("钟雁琴", "pink", "girl", "21", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("李云钦", "deepskyblue", "boy", "22", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("郑灵", "pink", "girl", "23", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("钟歆潼", "pink", "girl", "24", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("林健涛", "deepskyblue", "boy", "25", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("梁云飞", "deepskyblue", "boy", "26", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("李宸吉", "deepskyblue", "boy", "27", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("伍诗婷", "pink", "girl", "28", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("黄祯韵", "pink", "girl", "29", "photo/lose.jpg", "video/lose.mp4", "person/lose.html");
				person("林舒熔", "pink", "girl", "30", "photo/lose.jpg", "video/怡枭组.mp4", "person/lose.html");
				person("江鹏锦", "deepskyblue", "boy", "31", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("罗锦浩", "deepskyblue", "boy", "32", "photo/lose.jpg", "video/f.mp4","person/lose.html");
				person("宋柏瑶", "pink", "girl", "33", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("丘文娟", "pink", "girl", "34", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("刘晏珲", "deepskyblue", "boy", "35", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("游文锋", "deepskyblue", "boy", "36", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("林思婷", "pink", "girl", "37", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("吴金城", "deepskyblue", "boy", "38", "photo/lose.jpg", "video/d.mp4","person/lose.html");
				person("刘鑫蕾", "pink", "girl", "39", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("曾玥婷", "pink", "girl", "40", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("江圆媛", "pink", "girl", "41", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("伍建才", "deepskyblue", "boy", "42", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("赖成贤", "deepskyblue", "boy", "43", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("赖晨昊", "deepskyblue", "boy", "44", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("曹贤", "deepskyblue", "boy", "45", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("吴佳忻", "pink", "girl", "46", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("罗玉", "deepskyblue", "boy", "47", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("黎浩伟", "deepskyblue", "boy", "48", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("郑城飞", "deepskyblue", "boy", "49", "photo/lose.jpg", "video/b.mp4","person/lose.html");
				person("石桢宸", "deepskyblue", "boy", "50", "photo/szc.jpg", "video/b.mp4","person/lose.html");
				person("阙琳芳", "pink", "girl", "51", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("张子妍", "pink", "girl", "52", "photo/lose.jpg", "video/lose.mp4","person/lose.html");
				person("陈嘉俊", "deepskyblue", "boy", "53", "photo/lose.jpg", "video/lose.mp4","person/lose.html");



				//同学区
			}
			classmates();


			var div_home_over = document.createElement("div");
			div_home_over.setAttribute("style",
				"position: fixed;top: 0;right: 0;width: 35%;height: 100%; z-index: 9999; ");
			div_home_over.setAttribute("class", "over");
			body.appendChild(div_home_over);

			div_home_over.onclick = function() {
				CAEO();
			}
		}

	}

	function spjl() {
		CAEC();
		


		var p_div_head = document.createElement("p");
		p_div_head.textContent = "❉❉视屏集录❉❉";
		p_div_head.setAttribute("class", "clean");
		p_div_head.setAttribute("style",
			"font-weight: 600;font-size:80px;margin-top:30px;text-align:center;color:snow;text-shadow:2px 2px 6px white"
		);
		var fuck = document.getElementById("fuck");
		fuck.appendChild(p_div_head);

		var div_body = document.createElement("div");
		div_body.setAttribute("class", "clean");
		div_body.setAttribute("style",
			"box-shadow:3px 3px 3px 8px gray;margin-top:18px;background-color:white;margin-left:10px;margin-right:10px;border-radius: 50px;"
		)
		document.body.appendChild(div_body);
		//请注意：前三段代码是每个部分必要的，除“同学信息”这几个字可以改
		
		alert("由于网站正处于对外全面开放期，出于安全考虑，此功能暂时禁用。很抱歉给您带来不便。");
		CAES();
		home();
		CAEO();
		
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/a.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/b.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/c.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/d.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/e.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/f.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/g.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		/*var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/h.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/i.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);*/
		//--需要集体搬迁
		//需要集体搬迁--
		var video1 = document.createElement("video");
		video1.setAttribute("class", "vp");
		video1.setAttribute("style", "max-width:100%;");
		video1.setAttribute("controls", "");
		var source1 = document.createElement("source");
		source1.setAttribute("type", "video/mp4");
		source1.setAttribute("src", "video/j.mp4"); //目录修改区
		div_body.appendChild(video1);
		video1.appendChild(source1);
		//--需要集体搬迁

	}

	function tpjl() {
		CAEC();
		
		


		var p_div_head = document.createElement("p");
		p_div_head.textContent = "❉❉图片集录❉❉";
		p_div_head.setAttribute("class", "clean");
		p_div_head.setAttribute("style",
			"font-weight: 600;font-size:80px;margin-top:30px;text-align:center;color:snow;text-shadow:2px 2px 6px white"
		);
		var fuck = document.getElementById("fuck");
		fuck.appendChild(p_div_head);

		var div_body = document.createElement("div");
		div_body.setAttribute("class", "clean");
		div_body.setAttribute("style",
			"box-shadow:3px 3px 3px 8px gray;margin-top:18px;background-color:white;margin-left:10px;margin-right:10px;border-radius: 50px;"
		)
		document.body.appendChild(div_body);
		//请注意：前三段代码是每个部分必要的，除“同学信息”这几个字可以改

		alert("由于网站正处于对外全面开放期，出于安全考虑，此功能暂时禁用。很抱歉给您带来不便。");
		CAES();
		home();
		CAEO();

		var img1 = document.createElement("img");
		img1.setAttribute("class", "vp");
		img1.setAttribute("style", "max-width:100%;");
		img1.setAttribute("src", "photo/a.jpg"); //图片路径
		div_body.appendChild(img1);

		var img2 = document.createElement("img");
		img2.setAttribute("class", "vp");
		img2.setAttribute("style", "max-width:100%;");
		img2.setAttribute("src", "photo/b.jpg"); //图片路径
		div_body.appendChild(img2);

		var img3 = document.createElement("img");
		img3.setAttribute("class", "vp");
		img3.setAttribute("style", "max-width:100%;");
		img3.setAttribute("src", "photo/c.jpg"); //图片路径
		div_body.appendChild(img3);

		var img4 = document.createElement("img");
		img4.setAttribute("class", "vp");
		img4.setAttribute("style", "max-width:100%;");
		img4.setAttribute("src", "photo/d.jpg"); //图片路径
		div_body.appendChild(img4);
	}
}