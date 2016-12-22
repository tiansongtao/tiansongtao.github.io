function openJianli (){
	var iframeObj = document.getElementsByClassName('content-index');
	var bt = document.getElementsByClassName('bt-xuan-xiang-name');
	for(var i=0;i<bt.length;i++){
		bt[i].index=i;
		iframeObj[i].style.display='none';
	}
	iframeObj[0].style.display='block';
	
}


function openGithub (){
		var iframeObj = document.getElementsByClassName('content-index');
	var bt = document.getElementsByClassName('bt-xuan-xiang-name');
	for(var i=0;i<bt.length;i++){
		bt[i].index=i;
		iframeObj[i].style.display='none';
	}
	iframeObj[1].style.display='block';
}

function openBoke (){
		var iframeObj = document.getElementsByClassName('content-index');
	var bt = document.getElementsByClassName('bt-xuan-xiang-name');
	for(var i=0;i<bt.length;i++){
		bt[i].index=i;
		iframeObj[i].style.display='none';
	}
	iframeObj[2].style.display='block';
}
