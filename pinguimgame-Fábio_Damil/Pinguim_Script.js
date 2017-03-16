/*    
        @licstart  The following is the entire license notice for this page.

        Copyright (C) 2015  Carlos J. Costa

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

var maxHeight, maxWidth, interval1, interval2, interval3, interval4, moveTo, roma, portal, tesou, espad, 
	escud,tesouX, tesouY, espadX, espadY, escudX, escudY, bandX, bandY, ping;

function init(){
    // Limites do mapa
	maxHeight = 550;
	maxWidth = 560; 
	tesou = 0;
	espad = 0;
	escud = 0;
	ping = 0;
	roma = false
	portal = false
}
function afterMove(){
	// coordenadas do pinguim
	var XPos = parseInt(document.getElementById('character').style.left);
	var YPos = parseInt(document.getElementById('character').style.top);

	//coordenadas do tesouro
	tesouX = parseInt(document.getElementById('tesouro').style.left);
	tesouY = parseInt(document.getElementById('tesouro').style.top);
	
	//coordenadas da espada
	espadX = parseInt(document.getElementById('espada').style.left);
	espadY = parseInt(document.getElementById('espada').style.top);

	//coordenadas do escudo
	escudX = parseInt(document.getElementById('escudo').style.left);
	escudY = parseInt(document.getElementById('escudo').style.top);
	
	//coordenadas do bandido
	bandX = parseInt(document.getElementById('bandido').style.left);
	bandY = parseInt(document.getElementById('bandido').style.top);
	

	//Zona para entrar em Roma
	if (YPos>=310 && YPos<=330 && XPos>=250 && XPos<=270 && portal==true){
		document.getElementById('map').src = 'roma.jpg';
		roma = true;
	}
	//Zona para sair de Roma
	if (roma == true && YPos>=450 && YPos<=470 && XPos>=370 && XPos<=390){
		document.getElementById('map').src = 'screen.png';
		roma = false;
	}
	// teleporte da torre
	if(roma == false && XPos==110 && YPos==210){
		document.getElementById('character').style.left = "330px";
		document.getElementById('character').style.top = "100px";
	}
	//Ativar o portal
	if (tesou == 1 && espad == 1 && escud == 1){
		portal = true;
	}
	//document.getElementById('pos').innerHTML="pos x="+XPos+" e pos y="+YPos;
	pontuar(XPos,YPos);
	verTesouro();
	verPortal();
	verEspada();
	verEscudo();
	verPrincesa();
	verBandido();
	fimJogo();
};

function verTesouro() {
	var display = document.getElementById('tesouro').style.display;
	var display2 = document.getElementById('tesouro2').style.display;
	if (roma==true || tesou>=1) {
	document.getElementById('tesouro').style.display = "none";
	document.getElementById('tesouro2').style.display = "block";
	} else {
	document.getElementById('tesouro').style.display = "block";
	document.getElementById('tesouro2').style.display = "none";
	}
}
function verEspada() {
	var display = document.getElementById('espada').style.display;
	var display2 = document.getElementById('espada2').style.display;
	if (roma==true || espad>=1) {
	document.getElementById('espada').style.display = "none";
	document.getElementById('espada2').style.display = "block";
	} else {
	document.getElementById('espada').style.display = "block";
	document.getElementById('espada2').style.display = "none";
	}
}
function verEscudo() {
	var display = document.getElementById('escudo').style.display;
	var display2 = document.getElementById('escudo2').style.display;
	if (roma==true || escud>=1) {
	document.getElementById('escudo').style.display = "none";
	document.getElementById('escudo2').style.display = "block";
	} else {
	document.getElementById('escudo').style.display = "block";
	document.getElementById('escudo2').style.display = "none";
	}
}
function verPortal() {
	var display = document.getElementById('portal').style.display;
	if (tesou>=1 && espad>=1 && escud>=1 && roma==false) {
	document.getElementById('portal').style.display = "block";
	} else {
	document.getElementById('portal').style.display = "none";
	}
}
function verBandido() {
	var display = document.getElementById('bandido').style.display;
	if (roma==true) {
	document.getElementById('bandido').style.display = "none";
	} else {
	document.getElementById('bandido').style.display = "block";
	}
}
function verPrincesa() {
	var display = document.getElementById('princesa').style.display;
	if (roma==true) {
	document.getElementById('princesa').style.display = "block";
	} else {
	document.getElementById('princesa').style.display = "none";
	}
}
//fim do jogo
function fimJogo() {
	var display = document.getElementById('map').style.display;
	var display2 = document.getElementById('character').style.display;
	var display3 = document.getElementById('princesa').style.display;
	var display4 = document.getElementById('princesa2').style.display;
	if (roma==true && ping >= 1) {
	document.getElementById('princesa').style.display = "none";
	document.getElementById('map').style.display = "none";
	document.getElementById('character').style.display = "none";
	document.getElementById('princesa2').style.display = "block";
	}
}

//posições aleatórias
function alterarPosicao() {
tesouX = parseInt(document.getElementById('tesouro').style.left = Math.floor(Math.random()*55)*10);
tesouY = parseInt(document.getElementById('tesouro').style.top = Math.floor(Math.random()*54)*10);

espadX = parseInt(document.getElementById('espada').style.left = Math.floor(Math.random()*55)*10);
espadY = parseInt(document.getElementById('espada').style.top = Math.floor(Math.random()*54)*10);

escudX = parseInt(document.getElementById('escudo').style.left = Math.floor(Math.random()*55)*10);
escudY = parseInt(document.getElementById('escudo').style.top = Math.floor(Math.random()*54)*10);

}

function alterarBandido() {
setTimeout(alterarBandido, 2000);
bandX = parseInt(document.getElementById('bandido').style.left = Math.floor(Math.random()*55)*10);
bandY = parseInt(document.getElementById('bandido').style.top = Math.floor(Math.random()*54)*10);	
}

function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	
	var a = document.getElementById('character').style.top; // posição y actual
	if (a == '') a="100";
	if(parseInt(a) < maxHeight){ // verifica se está dentro do limite inferior do mapa
		b=parseInt(a)+10;
		document.getElementById('character').style.top=b+"px";      
		afterMove();
	}
};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left'); // 
	var n= Math.round(Math.random()*2); // variavel aleatoria para movimento com valores de 0 a 2
	document.getElementById('character').setAttribute('class',myclass[n]); // vai imprimir a imagem e dar sensação de movimento; o class vai alterar o atributo classe
	var a = document.getElementById('character').style.top; // guardar em "a", a distância ao topo
	if (a=='') a="100";
	if(parseInt(a) > 0){ // verifica se está dentro do limite superior do mapa
		b=parseInt(a)-10; //parseint é para transformar em inteiro
		document.getElementById('character').style.top=b+"px"; // atualiza posição do boneco
		afterMove();
	}
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left'); 
	var n= Math.round(Math.random()*2); 
	document.getElementById('character').setAttribute('class',myclass[n]); 
	var a = document.getElementById('character').style.left; 
	if (a=='') a="100";
	if(parseInt(a) < maxWidth){ // verifica se está dentro do limite à direita do mapa
		b=parseInt(a)+10;
		document.getElementById('character').style.left=b+"px";  
		afterMove();
	}
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left'); 
	var n= Math.round(Math.random()*2); 
	document.getElementById('character').setAttribute('class',myclass[n]); 
	var a = document.getElementById('character').style.left; 
	if (a=='') a="100";
	if(parseInt(a) > 0){ // verifica se está dentro do limite à esquerda do mapa
		b=parseInt(a)-10;
		document.getElementById('character').style.left=b+"px";      
		afterMove();	
	}
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
	if (e.keyCode===32) stop(); //space
}

//objetivos
function pontuar(xPos, yPos){
	if(roma == false){ // Tesouros e armadilhas no mapa
		if(xPos==tesouX && yPos==tesouY && tesou==0) {
			tesou++;
			document.getElementById("mensagem").innerHTML="Apanhou o tesouro";
		}
		if(xPos==espadX && yPos==espadY && espad==0) {
			espad++;
			document.getElementById("mensagem").innerHTML="Apanhou a espada";
		}
		if(xPos==escudX && yPos==escudY && escud==0) {
			escud++;
			document.getElementById("mensagem").innerHTML="Apanhou o escudo";
		}
		if(xPos>=bandX && xPos<=bandX+40 && yPos>=bandY && yPos<=bandY+40 && (escud==1 || espad==1 || tesou==1) ) {
			escud=0;
			tesou=0;
			espad=0;
			portal = false;
			document.getElementById("mensagem").innerHTML="Perdeste os teus items";
		}
	} else { // Fim do jogo
		if(xPos==150 && yPos==240) {
			ping++;
			document.getElementById("mensagem").innerHTML="Parabéns!! Terminaste o jogo!!";
		}
	}	
	verTesouro();
	verPortal();
	verEspada();
	verEscudo();
	fimJogo();
}

window.onload =init;