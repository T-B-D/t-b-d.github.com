/*
 * 
 * work in progress
 * feel free to lend a hand if you have the time
 * /Fredrik
 *
 */

// a lot of iPhone users visiting the site, needs to do something about that /Fredrik
//
// navigator.userAgent.match(/iPhone/i) != null || navigator.userAgent.match(/iPod/i) != null

$(function() {
  var terminal = document.getElementById("terminal"),
      interval,
      command = "",
      commandInput = $("#commandInput"),
      output = $("#output");
         

  function scrollToBottom() {
    interval = window.setInterval(scroll,1);
  }

  function scroll() {
    if(terminal.scrollTop >= terminal.scrollHeight - terminal.offsetHeight){
      clearInterval(interval); 
    } else {
      terminal.scrollTop = terminal.scrollTop + 12;  
    }
  }

  scrollToBottom();





  window.onkeypress = input;

  function commandInputFocus() {
    if (navigator.userAgent.match(/iPad/i) != null ){
      commandInput.attr('disabled', 'disabled');
      commandInput.removeAttr('autofocus');
    } else {
      commandInput.focus(); 
    }
  }
  commandInputFocus();

  $("body").on( "click", function(){
    commandInputFocus();
  });  




  function input(e, that, clicked) {
    var unicode=e.keyCode? e.keyCode : e.charCode;

    if (unicode === 13 || clicked === true) {
      if (that !== undefined) {
        command = $(that).attr("class").split(" ")[0]; 
      } else {
        command = commandInput.val();
      }
      
      var commandInputLabel = $("#commandInputLabel");
      var terminalHeading = $("#terminalHeading");
      var newLabel = function(){ return commandInputLabel.html("t-b-d.org:~ " + command + "$"); }
      var newOutput = function(content){return output.html(output.html() + '<div><label class="ib">' + commandInputLabel.html() + '</label> <input disabled value="' + command + '"></div>' + content)};
      var newTerminalHeading = function(){return terminalHeading.html(command + " — TBD")}
      
      command = $.trim(command);

      if (command === "hackathon") {
        newOutput(hackathon);
        newTerminalHeading();
        newLabel();
      } else if (command === "crew") {
        newOutput(crew);
        newTerminalHeading();
        newLabel();
      } else if (command === "manifesto") {
        newOutput(manifesto);
        newTerminalHeading();
        newLabel();
      } else if (command === "program") {
        newOutput(program);
        newTerminalHeading();
        newLabel();
      } else if (command === "challenges") {
        newOutput(challenges);
        newTerminalHeading();
        newLabel();
      } else if (command === "register") {
        newOutput(register);
        newTerminalHeading();
        newLabel();
      } else if (command === "sponsors") {
        newOutput(sponsors);
        newTerminalHeading();
        newLabel();
      } else if (command === "help" || /ls\s*/.test(command) || /dir\s*/.test(command)) {
        newOutput(help);
        newTerminalHeading();
        newLabel();
      } else if (command === "contact") {
        newOutput(contact);
        newTerminalHeading();
        newLabel();
      } else if (command === "menu") {
        newOutput(menu);
        newTerminalHeading();
        newLabel();
      } else if (command === "coffee") {
        newOutput(coffee);
        newTerminalHeading();
        newLabel();
      } else if (command === "") {
        newOutput("");  
      } else {
        newOutput("<p>command not found</p>");
      }
      
      commandInput.val("");
      command = "";
      clearInterval(interval)
      commandInputFocus();
      scrollToBottom();

    }
  }     

  $("body").on({ click: function(){
      input(false, this, true);
      return false;
    }, mouseenter: function(){
      commandInput.val($(this).attr("class").split(" ")[0]);
    }, mouseleave: function(){
      commandInput.val("");
    }
  }, "a.c");  

});