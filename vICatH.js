var w=0,iNumeroProd=1000; window.addEventListener("load",ZZ,false);
function Ar28(V,A){var w,x,y,z; A=A||'';V+='';x=V.split('.');y=x[0];z=x.length>1?'.'+x[1]:'';w=/(\d+)(\d{3})/;while(w.test(y)){y=y.replace(w,'$1'+','+'$2');}return A+y+z;}function Ar29(V){return V.replace(/([^0-9\.\-])/g,'')*1;}function Ar30(I){if(document.getElementById(I)!==null){document.getElementById(I).style.display='none';document.getElementById(I).style.visibility="hidden";}}function Ar31(V){if(document.getElementById(V)!==null){document.getElementById(V).style.display='block';document.getElementById(V).style.visibility="visible";}}function Ar73(){var U=window.location.href;if(U.indexOf("?")!=-1){U=U.substr(0,U.indexOf("?"));}return U;}function Ar82(name){name=name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return results === null?"":decodeURIComponent(results[1].replace(/\+/g," "));}function Ar94(I){I.value=I.value.replace(/[^\/\d]/g,'');}function Ar112(){var b=false;if(typeof(Storage)!=="undefined"){b=true;}return b;}function Ar113(n,v){if(Ar112()&&n.length>0){if(v.length>0){localStorage.setItem(n,v);}else{localStorage.removeItem(n);}}}function Ar114(n){var c="";if(Ar112()){if(localStorage.getItem(n)!==null){c=localStorage.getItem(n);}}return c;}function Ar115(n){if(Ar112()&&localStorage.getItem(n)!==null){localStorage.removeItem(n);}}function Ar506(A){var b=false;if(A.length>0&&document.getElementById(A)!==null){b=true;}return b;}function Ar201(i,v){if(i.length>0 && document.getElementById(i)!==null){document.getElementById(i).innerHTML=v;}}function Ar200(i,v){if(i.length>0 && document.getElementById(i)!==null){document.getElementById(i).value=v;}}
function Total(){var sTotal=0;for(i=1;i<=iNumeroProd;i++){if(Ar506(("c"+i))&&Ar506(("h"+i))){sTotal+=Number(document.getElementById(("h"+i)).value);}}Ar201("total",Ar28(sTotal,"$"));Ar200("txtTotal",sTotal);}
function M(N,L,idX){if(N.length>0 && L.length>0 && idX.length>0){var i,X,sNvCant,aLS=L.split("@@");sNvCant=""+Number(document.getElementById(idX).value);Ar113((aLS[1]+"_"+aLS[2]),(aLS[0]+"@@"+aLS[1]+"@@"+aLS[2]+"@@"+aLS[3]+"@@"+aLS[4]+"@@"+sNvCant));if(Ar506(("c"+N))&&Ar506(("p"+N))){X=(Number(document.getElementById(("c"+N)).value) * Number(Ar29(document.getElementById(("p"+N)).innerHTML)));}if(Ar506("s"+N)){Ar201(("s"+N),Ar28(X,"$"));}if(Ar506("h"+N)){Ar200(("h"+N),X);}Total();}}
function QuitarProd(V,X){Ar115((V+"_"+X));if(Ar506(("c"+X))){Ar200(("c"+X),"");}if(Ar506(("h"+X))){Ar200(("h"+X),"");}if(Ar506(("s"+X))){Ar201(("s"+X),"");}Ar30(("r"+X));for(i=1;i<=iNumeroProd;i++){M(i);}Total();}
function Limpiar(){Ar201("total","");Ar200("txtTotal","");for(var L=1;L<=iNumeroProd;L++){if(Ar506(("c"+L)) && Ar506(("h"+L)) && Ar506(("s"+L))){Ar200(("c"+L),"");Ar200(("h"+L),"");Ar201(("s"+L),"");}}}
function BotBuy(sNomPro,sLocStorVal){if(Ar506("Buy")){document.getElementById("Buy").onclick=function(){if(Ar114(sNomPro).length>0){Ar200("Buy",sAdd);Ar30("irCarrito");Ar201("lnlIrCarrito",sIrACarrito);document.getElementById("Buy").style="color:green;font-size:x-large;background-Color:white";Ar115(sNomPro);}else{Ar200("Buy",sDel);Ar31("irCarrito");Ar201("lnlIrCarrito",sIrACarrito);Ar113(sNomPro,sLocStorVal);document.getElementById("Buy").style="color:red;font-size:x-large;background-Color:white";}};}}
function Z(R,a,i,A,S,sNomPro,sLocStorVal){BotBuy(sNomPro,sLocStorVal);if(Ar506(i)){var k=document.getElementById(i);document.getElementById(A).onclick=function(){if(w==0){w=a.length-1;}else{w--;}k.src=R+a[w];};document.getElementById(S).onclick=function(){if(w<a.length-1){w++;}else{w=0;}k.src=R+a[w];};}}
function ZZ(){Ar201("lnlIrCarrito",sIrACarrito);if(Ar506("lsValures")){Ar201("Buy",sAdd);document.getElementById("Buy").style="color:green;font-size:x-large;background-Color:white";var sNomPro,aLocStorVal,sLocStorVal=document.getElementById("lsValures").value;aLocStorVal=sLocStorVal.split("@@");sNomPro=aLocStorVal[1]+"_"+aLocStorVal[2];if(Ar114(sNomPro).length>0){Ar31("irCarrito");document.getElementById("Buy").style="color:red;font-size:x-large;background-Color:white";}else{Ar30("irCarrito");document.getElementById("Buy").style="color:green;font-size:x-large;background-Color:white";}if(typeof ZZZ === 'function'){ZZZ();}if(Ar506("Buy")){if((Ar114(sNomPro).length>0)){Ar200("Buy",sDel);document.getElementById("Buy").style="color:red;font-size:x-large;background-Color:white";}else{Ar200("Buy",sAdd);document.getElementById("Buy").style="color:green;font-size:x-large;background-Color:white";}}if(Ar506("cAnt")){Z("",aI,"iX","cAnt","cSig",sNomPro,sLocStorVal);}else{BotBuy(sNomPro,sLocStorVal);}}else{if(Ar506("cAnt")){Z("",aI,"iX","cAnt","cSig",sNomPro,sLocStorVal);}}}