/*! JSHell 3.0. Build 051924 */
function _JSHell_randomChoice(n){return n[Math.floor(Math.random()*n.length)]}function _JSHell_randomIntFromInterval(n,r){return Math.floor(Math.random()*(r-n+1)+n)}function _JSHell_shuffleArray(n){for(let r=n.length-1;r>0;r--){const t=Math.floor(Math.random()*(r+1));[n[r],n[t]]=[n[t],n[r]]}return n}function _JSHell_ngf(n=0,r="[]+",t=1,e=8,l=null,a=!1){return part1=-2==n?"!".repeat(_JSHell_randomIntFromInterval(1,5)):n<=-1?"":"!".repeat(2*_JSHell_randomIntFromInterval(1,2)+n),"rp"==r?(part3a=r.repeat(_JSHell_randomIntFromInterval(t,e)).toString(),partx=_JSHell_randomIntFromInterval(t,e),part3b=Array.from({length:partx},(()=>Math.floor(Math.random()*partx))).toString(),part3c=part3a+part3b,part2=part3c.split(","),part2="["+_JSHell_shuffleArray(part2).toString()+"]"):"rl"==l?(part2="["+r.repeat(_JSHell_randomIntFromInterval(t,e)).slice(0,-1)+"]",part2=part2.replaceAll("[]",(function(){return x=_JSHell_randomIntFromInterval(t,e),"[".repeat(x)+"]".repeat(x)}))):"string"==typeof r?"inside"==l?(x=_JSHell_randomIntFromInterval(t,e),part2="["+"[".repeat(x)+"]".repeat(x)+"]"):part2="["+r.repeat(_JSHell_randomIntFromInterval(t,e)).slice(0,-1)+"]":"number"==typeof r&&(part2="["+Array.from({length:_JSHell_randomIntFromInterval(t,e)},(()=>Math.floor(40*Math.random())))),partf=a?"["+part1+part2+"][0]":part1+part2,partf}function _JSHell_getUndef(n="50"){return pf="0"==n?"[[]][[]]":"50"==n?"[]"+_JSHell_ngf(-1,"[]+",3,5):"[]"+_JSHell_ngf(-1,"[]+",3,5,"rl",!1),pf}function JSHell(n,r,t,e,l){0==l&&(r="try{"+r+"}catch{}");var a={},o={false:"![[]+[]]",true:"!![[]+[]]",undefined:"[[]][[]]",NaN:"+[![[]+[]]]",Infinity:"+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])"},f={Array:"[[]+[]]",Number:"(+[[]+[]])",String:"([]+[]+[])",Boolean:"(!!![[]+[]])",Function:'[]["flat"]',RegExp:'Function("return/"+false+"/")()',Object:'[]["entries"]()'},u={a:'(false+"")[1]',b:'([]["entries"]()+"")[2]',c:'([]["flat"]+"")[3]',d:'(undefined+"")[2]',e:'(true+"")[3]',f:'(false+"")[0]',g:"(false+[0]+String)[20]",h:'(+(101))["to"+String["name"]](21)[1]',i:"([false]+undefined)[10]",j:'([]["entries"]()+"")[3]',k:'(+(20))["to"+String["name"]](21)',l:'(false+"")[2]',m:'(Number+"")[11]',n:'(undefined+"")[1]',o:'(true+[]["flat"])[10]',p:'(+(211))["to"+String["name"]](31)[1]',q:'("")["fontcolor"]([0]+false+")[20]',r:'(true+"")[1]',s:'(false+"")[3]',t:'(true+"")[0]',u:'(undefined+"")[0]',v:'(+(31))["to"+String["name"]](32)',w:'(+(32))["to"+String["name"]](33)',x:'(+(101))["to"+String["name"]](34)[1]',y:"(NaN+[Infinity])[10]",z:'(+(35))["to"+String["name"]](36)',A:'(NaN+[]["entries"]())[11]',B:"(+[]+Boolean)[10]",C:'Function("return escape")()(("")["italics"]())[2]',D:'Function("return escape")()([]["flat"])["slice"]("-1")',E:'(RegExp+"")[12]',F:"(+[]+Function)[10]",G:'(false+Function("return Date")()())[30]',H:null,I:'(Infinity+"")[0]',J:null,K:null,L:null,M:'(true+Function("return Date")()())[30]',N:'(NaN+"")[0]',O:"(+[]+Object)[10]",P:null,Q:null,R:"(+[]+RegExp)[10]",S:"(+[]+String)[10]",T:'(NaN+Function("return Date")()())[30]',U:'(NaN+Object()["to"+String["name"]]["call"]())[11]',V:null,W:null,X:null,Y:null,Z:null," ":'(NaN+[]["flat"])[11]',"!":null,'"':'("")["fontcolor"]()[12]',"#":null,$:null,"%":'Function("return escape")()([]["flat"])[21]',"&":'("")["fontcolor"](")[13]',"'":null,"(":'([]["flat"]+"")[13]',")":'([0]+false+[]["flat"])[20]',"*":null,"+":"(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[2]",",":'[[]]["concat"]([[]])+""',"-":'(+(.+[0000001])+"")[2]',".":"(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]","/":'(false+[0])["italics"]()[10]',":":'(RegExp()+"")[3]',";":'("")["fontcolor"](NaN+")[21]',"<":'("")["italics"]()[0]',"=":'("")["fontcolor"]()[11]',">":'("")["italics"]()[2]',"?":'(RegExp()+"")[2]',"@":null,"[":'([]["entries"]()+"")[0]',"\\":'(RegExp("/")+"")[1]',"]":'([]["entries"]()+"")[22]',"^":null,_:null,"`":null,"{":'(true+[]["flat"])[20]',"|":null,"}":'([]["flat"]+"")["slice"]("-1")',"~":null};function i(n){var r=n.charCodeAt(0);if(r<256)return"\\"+r.toString(8);var t=r.toString(16);return"\\u"+("0000"+t).substring(t.length)}function c(n){return i(n).replace("\\","t")}return a.SIMPLE=Object.assign({},o),a.CONSTRUCTORS=Object.assign({},f),o[void 0]=_JSHell_getUndef(n),"0"==n?(o=a.SIMPLE,f=a.CONSTRUCTORS):"50"==n?(o.true=_JSHell_ngf(0,"[]+",2,4),o.false=_JSHell_ngf(1,"[]+",2,4),o.NaN="+["+_JSHell_ngf(1,"[]+",2,4)+"]",f.Array=_JSHell_ngf(-1,"[],",1,5),f.Boolean=_JSHell_ngf(-2,"[]+",1,5),f.Function=_JSHell_ngf(-1,"[]+",1,5)+'["flat"]',f.Number="(+"+_JSHell_ngf(-1,"[]+",1,5)+")",f.String="("+_JSHell_ngf(-1,"[]+",1,5)+")[0]"):(o.true=_JSHell_ngf(0,"[]+",2,6,"rl",!0),o.false=_JSHell_ngf(1,"[]+",2,6,"rl",!0),o.NaN="+["+_JSHell_ngf(1,"[]",2,6,"inside")+"]",f.Array=_JSHell_ngf(-1,"[],",1,5,null,!0),f.Boolean=_JSHell_ngf(-2,"[]+",1,5,null,!0),f.Function=_JSHell_ngf(-1,"[]+",1,5)+'["flat"]',f.Number="(+"+_JSHell_ngf(-1,"[]+",1,5)+")",f.String="("+_JSHell_ngf(-1,"[]+",1,5)+")[0]"),function(){var n,r,t;for(r=0;r<10;r++){for(n="+[]",r>0&&(n="+!"+n),t=1;t<r;t++)n="+!+[]"+n;r>1&&(n=n.substr(1)),u[r]="["+n+"]"}}(),function(){var n,r,t,e="";function l(r,t){n=t instanceof Array?n.replace(new RegExp(r,"gi"),(function(n){return _JSHell_randomChoice(t)})):n.replace(new RegExp(r,"gi"),t)}function a(n,r){return u[r]}function i(n,t){var e=t.split(""),l=+e.shift(),o="+[]";for(l>0&&(o="+!"+o),r=1;r<l;r++)o="+!+[]"+o;return l>1&&(o=o.substr(1)),[o].concat(e).join("+").replace(/(\d)/g,a)}for(r=32;r<=126;r++)if(e=String.fromCharCode(r),n=u[e]){for(t in o)l(t,o[t]);for(t in f)l("\\b"+t,f[t]+'["constructor"]');l("(\\d\\d+)",i),l("\\((\\d)\\)",a),l("\\[(\\d)\\]",a),l("GLOBAL",'Function("return this")()'),l('\\+""',"+[]"),l('""',"[]+[]"),u[e]=n}}(),function(){var n,r,t,e=/[^\[\]\(\)\!\+]{1}/g,l=94;function a(){var n,r,l=!1;for(n in t={},u)(r=u[n])&&r.match(e)&&(t[n]=r,l=!0);return l}function o(n,r){return r.split("").join("+")}function f(n){return t[n]?n:u[n]}for(n in u)u[n]&&(u[n]=u[n].replace(/\"([^\"]+)\"/gi,o));for(;a();){for(n in t)r=(r=u[n]).replace(e,f),u[n]=r,t[n]=r;0==l--&&console.error("Could not compile the following chars:",t)}}(),function n(r,t,e,l=null){var a=[];if(!r)return"";var f="";for(var p in u)u[p]&&(f+=p);f=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),f=new RegExp("[^"+f+"]","g");var g=(r.match(f)||[]).length;g>1?r=r.replace(/[^0123456789.adefilnrsuN]/g,c):g>0&&(r=(r=r.replace(/["\\]/g,i)).replace(f,i));var _="";for(var s in o)_+=s+"|";return _+=".",r.replace(new RegExp(_,"g"),(function(n){var r=o[n];if(r)a.push("("+r+"+[])");else{if(!(r=u[n]))throw new Error("Found unmapped character: "+n);a.push(r)}})),a=a.join("+"),/^\d$/.test(r)&&(a+="+[]"),g>1&&(a="("+a+")["+n("split")+"]("+n("t")+")["+n("join")+"]("+n("\\")+")"),g>0&&(a="[]["+n("flat")+"]["+n("constructor")+"]("+n('return"')+"+"+a+"+"+n('"')+")()"),t&&(a=e?"[]["+n("flat")+"]["+n("constructor")+"]("+n("return eval")+")()("+a+")":"[]["+n("flat")+"]["+n("constructor")+"]("+a+")()"),a}(r,t,e)}
