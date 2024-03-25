let ladder = {
    step: 0,   
    
    up: function() {
      this.step++;
      return this; 
    },  
    
    down: function() {
      this.step--;
      return this; 
    },
     
    showStep: function() {       
        return this.step  
    }
  };
  ladder.up().up().down().showStep();
  alert("Поточна позиція: " + ladder.showStep());