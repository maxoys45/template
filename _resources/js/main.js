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

    this.drag();

  },
  
  options: {
   
  },
  
  setup: function() {
    
  },
  
  events: function() {
    
    
  },

  drag: function() {

    new Draggable.Draggable(document.querySelectorAll('.mainNav__list'), {
      draggable: 'li',
    })
      .on('drag:start', () => console.log('drag:start'))
      .on('drag:move',  () => console.log('drag:move'))
      .on('drag:stop',  () => console.log('drag:stop'));

  }
  
}

window.tools = tools;

document.addEventListener('DOMContentLoaded', function() {
  
  tools.init(true);
  
});