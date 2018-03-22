var tools = {
  
  debug: true,

  log: function(){
    if(this.debug){
      for(var i=0;i<arguments.length; i++){
        console.log(arguments[i]);
      }
    }
  },

  init: function(debug) {

  	this.debug = (debug) ? debug : false;

  	this.setup();

  	this.events();

  },
  
  options: {
   
  },
  
  setup: function() {
    
    var [a, ,b] = [1,2,3];

    this.log(a,b);
    
  },
  
  events: function() {
    
    
  }
  
}

window.tools = tools;

document.addEventListener('DOMContentLoaded', function() {
  
  tools.init(true);
  
});