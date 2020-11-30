'use scrict'

   function frissit() {
        most = new Date();
        hrs  = most.getHours();
        min  = most.getMinutes();
        sec  = most.getSeconds();
        
        if( hrs < 10 )   hrs = "0" + hrs;
        if( min < 10 )   min = "0" + min;
        if( sec < 10 )   sec = "0" + sec;


        document.querySelector('.clock').textContent = `${hrs}:${min}:${sec}`;
        
    };
    setInterval('frissit()',1000);
    frissit();


