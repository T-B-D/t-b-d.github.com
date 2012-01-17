/*
 * 
 * work in progress
 * feel free to lend a hand if you have the time
 * /Fredrik
 *
 */


/* dom ready by YuriKolovsky */
var ready=(function(){var f,b,c={};c["[object Boolean]"]="boolean";c["[object Number]"]="number";c["[object String]"]="string";c["[object Function]"]="function";c["[object Array]"]="array";c["[object Date]"]="date";c["[object RegExp]"]="regexp";c["[object Object]"]="object";var d={isReady:false,readyWait:1,holdReady:function(g){if(g){d.readyWait++}else{d.ready(true)}},ready:function(g){if((g===true&&!--d.readyWait)||(g!==true&&!d.isReady)){if(!document.body){return setTimeout(d.ready,1)}d.isReady=true;if(g!==true&&--d.readyWait>0){return}f.resolveWith(document,[d])}},bindReady:function(){if(f){return}f=d._Deferred();if(document.readyState==="complete"){return setTimeout(d.ready,1)}if(document.addEventListener){document.addEventListener("DOMContentLoaded",b,false);window.addEventListener("load",d.ready,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",b);window.attachEvent("onload",d.ready);var g=false;try{g=window.frameElement==null}catch(h){}if(document.documentElement.doScroll&&g){a()}}}},_Deferred:function(){var j=[],k,h,i,g={done:function(){if(!i){var m=arguments,n,q,p,o,l;if(k){l=k;k=0}for(n=0,q=m.length;n<q;n++){p=m[n];o=d.type(p);if(o==="array"){g.done.apply(g,p)}else{if(o==="function"){j.push(p)}}}if(l){g.resolveWith(l[0],l[1])}}return this},resolveWith:function(m,l){if(!i&&!k&&!h){l=l||[];h=1;try{while(j[0]){j.shift().apply(m,l)}}finally{k=[m,l];h=0}}return this},resolve:function(){g.resolveWith(this,arguments);return this},isResolved:function(){return !!(h||k)},cancel:function(){i=1;j=[];return this}};return g},type:function(g){return g==null?String(g):c[Object.prototype.toString.call(g)]||"object"}};function a(){if(d.isReady){return}try{document.documentElement.doScroll("left")}catch(g){setTimeout(a,1);return}d.ready()}if(document.addEventListener){b=function(){document.removeEventListener("DOMContentLoaded",b,false);d.ready()}}else{if(document.attachEvent){b=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",b);d.ready()}}}}function e(h){d.bindReady();var g=d.type(h);f.done(h)}return e})();

ready(function(){
  var terminal = document.getElementById("terminal");
  var interval;
  var timeout;

  function scrollToBottom() {
    interval = window.setInterval(scroll,1);
  }

  function scroll() {
    if(terminal.scrollTop >= terminal.scrollHeight - terminal.offsetHeight){
      clearInterval(interval) 
    } else {
      terminal.scrollTop = terminal.scrollTop + 6; 
    }
  }

  scrollToBottom();


  window.onkeypress = input;
  var command = "";
  var commandInput = document.getElementById("commandInput");
  var output = document.getElementById("output");

  function input(e) {
    // var evtobj=window.event? event : e;
    // if (evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)
    // }


    
    var unicode=e.keyCode? e.keyCode : e.charCode;
    // console.log(unicode);
    if (unicode === 13) {
      command = commandInput.value;
      var commandInputLabel = document.getElementById("commandInputLabel");
      var oldLabel = '<p>' + commandInputLabel.innerHTML + '</p>';
      var newLabel = function(){ commandInputLabel.innerHTML = "t-b-d.org:~ " + command + "$"; }
       
      if (command === "about") {
        output.innerHTML = output.innerHTML + oldLabel + about;
      } else if (command === "crew") {
        output.innerHTML = output.innerHTML + oldLabel + crew;
      } else if (command === "manifesto") {
        output.innerHTML = output.innerHTML + oldLabel + manifesto;
      } else if (command === "program") {
        output.innerHTML = output.innerHTML + oldLabel + program;
      } else if (command === "register") {
        output.innerHTML = output.innerHTML + oldLabel + register;
      } else if (command === "sponsors") {
        output.innerHTML = output.innerHTML + oldLabel + sponsors;
      } else {
        output.innerHTML = output.innerHTML + oldLabel + "command not found";
      }
      newLabel();
      commandInput.value = "";
      command = "";
      clearInterval(interval)
      scrollToBottom();



    }
  }
  


});