setInterval(()=>{
    ss=new Date();
    hr=ss.getHours();
    hm=ss.getMinutes();
    sc=ss.getSeconds();
    hour_m=30*hr+hm/2;
    min_m=hm*6;
    sec_m=sc*6;
    hour.style.transform=`rotate(${hour_m}deg)`;
    min.style.transform=`rotate(${min_m}deg)`;
    sec.style.transform=`rotate(${sec_m}deg)`;
},1000)
