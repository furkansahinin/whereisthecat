const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');const c=vm.createContext({});
vm.runInContext(fs.readFileSync('location-search.js','utf8')+'\n'+fs.readFileSync('memory-places.js','utf8'),c);
const run=s=>vm.runInContext(s,c);
assert.equal(run("LocationSearch.resolve('GALATA').name"),'Galata');assert.equal(run("LocationSearch.resolve('Beyoglu').name"),'Beyoğlu');assert.equal(run("LocationSearch.resolve('Galata, İstanbul').name"),'Galata');
assert.equal(run("LocationSearch.resolve('41.0256, 28.9741').radius"),1500);assert.equal(run("LocationSearch.resolve('0, 0')"),null);assert.equal(run("LocationSearch.resolve('unrecognized address')"),null);
const list=run("LocationSearch.nearby(places,LocationSearch.resolve('Galata'))");assert.ok(list.some(p=>p.name.includes('Saint Pierre')));assert.ok(!list.some(p=>p.name.includes('Vefa')));assert.ok(list.every((p,i)=>!i||p.distance>=list[i-1].distance));
assert.equal(run("LocationSearch.nearby(places,LocationSearch.resolve('Kadıköy')).length"),0);assert.equal(run("LocationSearch.nearby(places,LocationSearch.resolve('İstanbul')).length"),run('places.length'));
assert.ok(run("LocationSearch.distance({lat:41,lng:29},{lat:41,lng:29})")===0);assert.ok(Math.abs(run("LocationSearch.distance({lat:41,lng:29},{lat:41.01,lng:29})")-1112)<3);
console.log('PASS: Turkish names, coordinates, unknown locations, radius filtering, distance order, empty regions and Istanbul-wide results.');
