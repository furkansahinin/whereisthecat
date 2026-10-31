// Editorial neighbourhood centres, not address geocoding or walking directions.
const LocationSearch=(()=>{
 const normalize=s=>s.toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i').trim().replace(/\s+/g,' ');
 const regions=[
 ['Tophane',41.0273,28.9869,1200],['Fındıklı',41.0334,28.9926,1000],
 ['Tünel',41.028,28.974,1000],['Tarlabaşı',41.0365,28.975,1300],['Dolapdere',41.0405,28.977,1500],['Serdar-ı Ekrem',41.0277,28.9767,800],
 ['Galata',41.0256,28.9741,1000],['Karaköy',41.024,28.9797,1200],['Taksim',41.0369,28.985,1200],['Beyoğlu',41.032,28.978,2500],['Çukurcuma',41.031,28.9792,800],['Cihangir',41.0315,28.985,1000],['Asmalımescit',41.0288,28.974,800],['Şişhane',41.028,28.971,900],['İstiklal Caddesi',41.033,28.9785,1200],['Bankalar Caddesi',41.0241,28.9731,700],['Sıraselviler',41.0339,28.9858,900],['Felek Sokak',41.0238,28.9756,600],['Dudu Odaları Sokak',41.0342,28.9761,600],['Vefa',41.0158,28.9572,1000],['Beyazıt',41.0102,28.9652,1100],['Cibali',41.0241,28.9596,1100],['Fatih',41.023,28.949,2500],['Eminönü',41.0175,28.97,1400],['Sirkeci',41.013,28.977,1200],['Sultanahmet',41.0054,28.9768,1500],['Balat',41.0292,28.9498,1800],['Fener',41.029,28.952,1500],['Beşiktaş',41.0434,29.004,2000],['Kadıköy',40.9906,29.0258,2000],['Üsküdar',41.025,29.015,2000],['Kasımpaşa',41.0337,28.969,1400],['Hasköy',41.0415,28.9498,1500],['İstanbul',41.03,28.99,100000]
 ].map(([name,lat,lng,radius])=>({name,lat,lng,radius}));
 const aliases={'istiklal':'istiklal caddesi','asmali mescit':'asmalimescit','bankalar':'bankalar caddesi','dudu odalari':'dudu odalari sokak','felek':'felek sokak','istanbul galata':'galata','beyoglu istanbul':'beyoglu'};
 function resolve(text){let key=normalize(text);const coords=key.match(/^(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)$/);if(coords){const lat=Number(coords[1]),lng=Number(coords[2]);if(lat>=40.65&&lat<=41.65&&lng>=27.8&&lng<=30.05)return{name:`${lat.toFixed(4)}, ${lng.toFixed(4)}`,lat,lng,radius:1500};return null;}key=aliases[key]||key;if(key!=='istanbul')key=key.replace(/(?:,? istanbul|,? turkey|,? turkiye)$/,'').trim();return regions.find(r=>normalize(r.name)===key)||null;}
 function distance(a,b){const rad=Math.PI/180,dlat=(b.lat-a.lat)*rad,dlng=(b.lng-a.lng)*rad,h=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlng/2)**2;return 6371000*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)));}
 const nearby=(list,location)=>list.map(p=>({...p,distance:distance(location,p)})).filter(p=>p.distance<=location.radius).sort((a,b)=>a.distance-b.distance||a.id-b.id);
 const format=m=>m<1000?`${Math.round(m/50)*50} m`:`${(m/1000).toFixed(1)} km`;
 return{normalize,regions,resolve,distance,nearby,format};
})();
