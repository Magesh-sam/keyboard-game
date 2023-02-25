document.addEventListener("keydown", function(event) {
    const keycode = event.keyCode;
    
    if (keycode >= 65 && keycode <= 90) {

     
      const audio = document.querySelector(`#audio-${String.fromCharCode(keycode)}`);
      
   
      if (audio) {
        audio.currentTime = 0; 
        audio.play();
      }
    }
    
  });

  const key = document.querySelectorAll('.key');
  
  
  key.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('clicked');
      setTimeout(() => {
        item.classList.remove('clicked');
      },500)
      const keycode = item.dataset.keycode;
      const audio = document.querySelector(`#audio-${String.fromCharCode(keycode)}`);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    });
  });  
  


  document.addEventListener('keydown', (event) => {
    const keycode = event.keyCode;
    
  

    if (keycode >= 65 && keycode <= 90) {
     
      const box = document.querySelector(`#key-${String.fromCharCode(keycode)}`);
      
      box.classList.add('pressed');
    }
    }
  );
  
  document.addEventListener('keyup', (event) => {
    const keycode = event.keyCode;
    
  

    if (keycode >= 65 && keycode <= 90) {
     
      const box = document.querySelector(`#key-${String.fromCharCode(keycode)}`);
      
      box.classList.remove('pressed');
      
      
    }
  });
 
  