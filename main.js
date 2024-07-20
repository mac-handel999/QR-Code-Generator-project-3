 const text = document.querySelector('#text');
 const btn = document.querySelector('.get-QRcode');
 const img = document.querySelector('img');
 const div = document.querySelector('.QRcode-img');
 const link = document.querySelector('.link');
 
 
 btn.addEventListener('click', () => {
   if (text.value !==  "  ") {
     img.src = "/images/QR code.png";
     img.innerHTML = img;
     
     img.style.border =  "solid black 3px";
     
     img.style.borderRadius = "10px";
     
     div.style.background ="red";
     
     div.style.border = "solid black 3px";
     
     div.style.borderRadius = "10px";    
     
     link.innerHTML =text.value;
     
     
     
     
   } else {
     return false;
     img.innerHTML = null;
   }
   
   
 });