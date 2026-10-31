// Per-browser fictional cat position. User choices restart a 30-minute stay.
const CatWander=(()=>{
 const interval=30*60*1000;
 function start(list,id,now=Date.now()){const p=list.find(p=>p.id===id)||list[0];return{id:p.id,name:p.name,nextAt:now+interval};}
 function restore(list,value,now=Date.now()){if(value&&Number.isFinite(value.nextAt)&&value.nextAt<=now+interval){const p=list.find(p=>p.name===value.name);if(p)return{id:p.id,name:p.name,nextAt:value.nextAt};}return start(list,list[0].id,now);}
 function nearest(list,id){const origin=list.find(p=>p.id===id);return list.filter(p=>p.id!==id).sort((a,b)=>LocationSearch.distance(origin,a)-LocationSearch.distance(origin,b)||a.id-b.id)[0]||origin;}
 function advance(list,state,now=Date.now()){let result={...state},steps=Math.max(0,Math.floor((now-result.nextAt)/interval)+1);if(!steps)return result;const deadline=result.nextAt+steps*interval,seen=new Map();while(steps>0){if(seen.has(result.id)){const cycle=seen.get(result.id)-steps;steps%=cycle;if(!steps)break;seen.clear();}seen.set(result.id,steps);const p=nearest(list,result.id);result.id=p.id;result.name=p.name;steps--;}result.nextAt=deadline;return result;}
 return{interval,start,restore,nearest,advance};
})();
