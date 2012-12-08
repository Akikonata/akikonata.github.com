var Command = function(){
	// 键盘事件状态
	var 
	state = {},
	Command = {
		init : function(){
			window.addEventListener('mousedown',handle2,false);
			window.addEventListener('mouseup',handle2,false);
			window.addEventListener('keydown', handle, false);
			window.addEventListener('keyup', handle, false);
		},
		state : state,
		bind : true
	};
	
	//事件绑定
	function handle (e){
		if(!Command.bind) return;
		var code = e.keyCode,
		timeNow = +new Date();
		//alert(code);
		switch (e.type) {
			case 'keydown':
				if (state[code] > 0) return;
				state[code] = timeNow;
				if (code == 80){
					Game.pause();
				}
				break;
			case 'keyup':
				state[code] = 0;
				break;
		}
	}
	//用虚拟按键控制
	function handle2 (e){
		if(e.target.id!='p2left'&&e.target.id!='p2right'&&e.target.id!='p2up'&&e.target.id!='p2down') return;
		var code = false;
		switch(e.target.id){
			case 'p2left':code=37; break;
			case 'p2right':code=39; break;
			case 'p2up':code=38; break;
			case 'p2down':code=40; break;
			default: break;
		}
		console.log(code);
		timeNow = +new Date();
		switch (e.type) {
			case 'mousedown':
				if (state[code] > 0) return;
				state[code] = timeNow;
				if (code == 80){
					Game.pause();
				}
				break;
			case 'mouseup':
				state[code] = 0;
				break;
		}
	}
	return Command;
}()