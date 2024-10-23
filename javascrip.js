//contador_onload
function contador_onload(){now=new Date();timeElapsed=now.getTime()-comenzar.getTime();delete now;secsElapsed=0;hunsElapsed=0;out="";secsElapsed=Math.floor(timeElapsed/1000);timeElapsed=timeElapsed%1000;hunsElapsed=Math.floor(timeElapsed/10);timeElapsed=timeElapsed%10;out+=((secsElapsed<10)?"0":"")+secsElapsed+"<span class=\"dot\">.</span>";out+=((hunsElapsed<10)?"0":"")+hunsElapsed;document.getElementById('numbox').innerHTML=out;stopID=setTimeout("contador_onload()",10);}
function mostrar_fecha(){var d=new Date();var gmt=-d.getTimezoneOffset()/60;var month=new Array(12);month[0]="Enero";month[1]="Febrero";month[2]="Marzo";month[3]="Abril";month[4]="Mayo";month[5]="Junio";month[6]="Julio";month[7]="Agosto";month[8]="Septiembre";month[9]="Octubre";month[10]="Noviembre";month[11]="Diciembre";var todaysDate=month[d.getUTCMonth()]+' '+d.getUTCDate()+', '+d.getUTCFullYear()+'-'+((d.getUTCHours()<10)?"0":"")+d.getUTCHours()+':'+((d.getUTCMinutes()<10)?"0":"")+d.getUTCMinutes()+'  GMT'+'-'+((d.getHours()<10)?"0":"")+d.getHours()+':'+((d.getMinutes()<10)?"0":"")+d.getMinutes()+'  hora local'+'GMT  '+gmt;document.getElementById('datebar').innerHTML=todaysDate;}
//Tiempo en la pagina
var onHours=" ";var onMinutes=" ";var onSeconds=" ";var offHours=0;var offMinutes=0;var offSeconds=0;var logSeconds=0;var logMinutes=0;var logHours=0;var OnTimeValue=" ";var OffTimeValue=" ";var PageTimeValue=" ";function getLogonTime(){var now=new Date();var ampm=(now.getHours()>=12)?" P.M.":" A.M."
var Hours=now.getHours();Hours=((Hours>12)?Hours-12:Hours);var Minutes=((now.getMinutes()<10)?":0":":")+now.getMinutes();var Seconds=((now.getSeconds()<10)?":0":":")+now.getSeconds();OnTimeValue=(" "+Hours+Minutes+Seconds+" "+ampm);onHours=now.getHours();onMinutes=now.getMinutes();onSeconds=now.getSeconds();}
function getLogoffTime(){var now=new Date();var ampm=(now.getHours()>=12)?" P.M.":" A.M."
var Hours=now.getHours();Hours=((Hours>12)?Hours-12:Hours);var Minutes=((now.getMinutes()<10)?":0":":")+now.getMinutes();var Seconds=((now.getSeconds()<10)?":0":":")+now.getSeconds();OffTimeValue=(" "+Hours+Minutes+Seconds+" "+ampm);offHours=now.getHours();offMinutes=now.getMinutes();offSeconds=now.getSeconds();timer();}
function timer(){if(offSeconds>=onSeconds){logSeconds=offSeconds-onSeconds;}
else{offMinutes-=1;logSeconds=(offSeconds+60)-onSeconds;}
if(offMinutes>=onMinutes){logMinutes=offMinutes-onMinutes;}
else{offHours-=1;logMinutes=(offMinutes+60)-onMinutes;}
logHours=offHours-onHours;logHours=((logHours<10)?"0":":")+logHours;logMinutes=((logMinutes<10)?":0":":")+logMinutes;logSeconds=((logSeconds<10)?":0":":")+logSeconds;PageTimeValue=(" "+logHours+logMinutes+logSeconds);displayTimes();}
function displayTimes(){alert("\nEntraste en esta página a las: "+OnTimeValue+"\n\n "+OffTimeValue+"\n\nTiempo total: "+PageTimeValue);}
//Tiempo en la pagina2
startday=new Date();clockStart=startday.getTime();function initStopwatch(){var myTime=new Date();return((myTime.getTime()-clockStart)/1000);}
function getSecs(){var tSecs=Math.round(initStopwatch());var iSecs=tSecs%60;var iMins=Math.round((tSecs-30)/60);var sSecs=""+((iSecs>9)?iSecs:"0"+iSecs);var sMins=""+((iMins>9)?iMins:"0"+iMins);document.getElementById('timespent').value=sMins+":"+sSecs;window.setTimeout('getSecs()',1000);}
//RelojTop
function doClock(){setTimeout("doClock()",1e3);t=new Date;m=t.getMonth();d=t.getDay();dt=t.getDate();y=t.getFullYear();h=t.getHours();if(h<12){ap="AM"}else{ap="PM";h=h-12}mn=pad(t.getMinutes());s=pad(t.getSeconds());if(h==0){h=12}clockID.innerHTML=''+calDays[d]+", "+dt+" de "+months[m]+" del "+y+" - "+h+":"+mn+":"+s+" "+ap}function pad(a){if(a<10){a="0"+a}return a}months=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");calDays=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado")
//Reloj barra
var H='....';var H=H.split('');var M='.....';var M=M.split('');var S='......';var S=S.split('');var Ypos=0;var Xpos=0;var Ybase=8;var Xbase=8;var dots=12;function clock(){var time=new Date();var secs=time.getSeconds();var sec=-1.57+Math.PI*secs/30;var mins=time.getMinutes();var min=-1.57+Math.PI*mins/30;var hr=time.getHours();var hrs=-1.57+Math.PI*hr/6+Math.PI*parseInt(time.getMinutes())/360;for(i=0;i<dots;++i){document.getElementById("dig"+(i+1)).style.top=0-15+40*Math.sin(-0.49+dots+i/1.9).toString()+"px";document.getElementById("dig"+(i+1)).style.left=0-14+40*Math.cos(-0.49+dots+i/1.9).toString()+"px";}
for(i=0;i<S.length;i++){document.getElementById("sec"+(i+1)).style.top=Ypos+i*Ybase*Math.sin(sec).toString()+"px";document.getElementById("sec"+(i+1)).style.left=Xpos+i*Xbase*Math.cos(sec).toString()+"px";}
for(i=0;i<M.length;i++){document.getElementById("min"+(i+1)).style.top=Ypos+i*Ybase*Math.sin(min).toString()+"px";document.getElementById("min"+(i+1)).style.left=Xpos+i*Xbase*Math.cos(min).toString()+"px";}
for(i=0;i<H.length;i++){document.getElementById("hour"+(i+1)).style.top=Ypos+i*Ybase*Math.sin(hrs).toString()+"px";document.getElementById("hour"+(i+1)).style.left=Xpos+i*Xbase*Math.cos(hrs).toString()+"px";}
setTimeout('clock()',50);}
//Reloj Internet Explorer
function sbClock(){var DateString=(new Date()).toString();self.status=DateString.substring(0,3+DateString.lastIndexOf(':'));setTimeout("sbClock()",200);}
sbClock()
//clockID
clockID=document.getElementById('clock');doClock();
//Buscador
var domainroot="norfipc.com";function Gsitesearch(curobj){curobj.q.value="site:"+domainroot+" "+curobj.qfront.value}
window.onload=function(){
clock();
getLogonTime();
window.setTimeout('getSecs()',1);
comenzar = new Date();
mostrar_fecha();
contador_onload();
}


document.getElementById('comentario-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener el nombre y el comentario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const timestamp = new Date().toLocaleString();

    // Crear un nuevo elemento de comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `<p><strong>${nombre}:</strong>  ${comentario}</p>
                                 <p><strong>Publicado:</strong> ${timestamp}</p>
                                 <button onclick="toggleRespuesta(this)">Responder</button>
                                 <div class="respuesta-box">
                                     <textarea placeholder="Escribe tu respuesta..."></textarea>
                                     <button onclick="guardarRespuesta(this)">Enviar</button>
                                 </div>
                                 <div class="respuestas"></div>`;

    // Agregar el nuevo comentario a la lista de comentarios
    document.getElementById('lista-comentarios').appendChild(nuevoComentario);

    // Limpiar el formulario
    document.getElementById('comentario-form').reset();
});

function toggleRespuesta(button) {
    const respuestaBox = button.nextElementSibling;
    respuestaBox.style.display = respuestaBox.style.display === 'none' ? 'block' : 'none';
}

function guardarRespuesta(button) {
    const respuestaBox = button.parentElement;
    const textarea = respuestaBox.querySelector('textarea');
    const respuestaTexto = textarea.value;
    const timestamp = new Date().toLocaleString();
    if (respuestaTexto.trim() !== '') {
        const respuestasDiv = respuestaBox.nextElementSibling;
        const nuevaRespuesta = document.createElement('div');
        nuevaRespuesta.classList.add('respuesta');
        nuevaRespuesta.innerHTML = `<strong>Anónimo:</strong> ${respuestaTexto} <p><strong>Publicado: </strong>${timestamp}</p>`;
        respuestasDiv.appendChild(nuevaRespuesta);
        textarea.value = ''; // Limpiar textarea
        respuestaBox.style.display = 'none'; // Ocultar caja de respuesta
    } else {
        alert('Por favor, escribe una respuesta.');
    }
}