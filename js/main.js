function a4_0x351c(_0x201083,_0x25952e){const _0x2878bb=a4_0x2878();return a4_0x351c=function(_0x351c32,_0x35efc6){_0x351c32=_0x351c32-0x111;let _0x170ed0=_0x2878bb[_0x351c32];return _0x170ed0;},a4_0x351c(_0x201083,_0x25952e);}function a4_0x2878(){const _0x29ee81=['4026430wqcOSp','1033710GScaHG','toString','createElement','classList','getElementById','indexOf','buttons','151626TuvEra','innerText','add','quantity','getItem','shop','setItem','details','16521xtUiim','splice','data','div','appendChild','2175846hWIcZm','500RkkJma','stringify','item','parse','onclick','img','src','21641184RGfMVm','push','append','find','3381938OBxVEu','map'];a4_0x2878=function(){return _0x29ee81;};return a4_0x2878();}const a4_0x4f7672=a4_0x351c;(function(_0x15b66b,_0x204f02){const _0x57b243=a4_0x351c,_0x5b75de=_0x15b66b();while(!![]){try{const _0x3b1be7=-parseInt(_0x57b243(0x12f))/0x1+-parseInt(_0x57b243(0x128))/0x2+-parseInt(_0x57b243(0x114))/0x3*(parseInt(_0x57b243(0x11a))/0x4)+-parseInt(_0x57b243(0x127))/0x5+parseInt(_0x57b243(0x119))/0x6+-parseInt(_0x57b243(0x125))/0x7+parseInt(_0x57b243(0x121))/0x8;if(_0x3b1be7===_0x204f02)break;else _0x5b75de['push'](_0x5b75de['shift']());}catch(_0x24ac14){_0x5b75de['push'](_0x5b75de['shift']());}}}(a4_0x2878,0x67271));import{shopItemsData}from'./Data.js';const shop=document['getElementById'](a4_0x4f7672(0x111)),basket=JSON[a4_0x4f7672(0x11d)](localStorage[a4_0x4f7672(0x133)](a4_0x4f7672(0x116))||'[]'),generateShop=()=>{const _0x51b1db=[];return shopItemsData['map'](({id:_0x1d5e2f,name:_0x131758,price:_0x51cba6,desc:_0xefef75,img:_0x251bd9})=>{const _0x24ff2b=a4_0x351c,_0x11e2ec=document['createElement']('div'),_0x46ca3c=document[_0x24ff2b(0x12a)](_0x24ff2b(0x11f)),_0x4c3e7f=document[_0x24ff2b(0x12a)]('div'),_0x31a912=document['createElement']('h3'),_0x354c68=document['createElement']('p'),_0x5879b5=document[_0x24ff2b(0x12a)](_0x24ff2b(0x117)),_0x37a172=document[_0x24ff2b(0x12a)]('h2'),_0x223f75=document[_0x24ff2b(0x12a)](_0x24ff2b(0x117)),_0x5b165f=document[_0x24ff2b(0x12a)]('i'),_0x2354fe=document[_0x24ff2b(0x12a)](_0x24ff2b(0x117)),_0x559149=document['createElement']('i');_0x11e2ec[_0x24ff2b(0x12b)][_0x24ff2b(0x131)](_0x24ff2b(0x11c)),_0x4c3e7f[_0x24ff2b(0x12b)][_0x24ff2b(0x131)](_0x24ff2b(0x113)),_0x5879b5[_0x24ff2b(0x12b)][_0x24ff2b(0x131)]('price-quantity'),_0x223f75[_0x24ff2b(0x12b)][_0x24ff2b(0x131)](_0x24ff2b(0x12e)),_0x5b165f[_0x24ff2b(0x12b)][_0x24ff2b(0x131)]('bi','bi-dash-lg'),_0x2354fe[_0x24ff2b(0x12b)][_0x24ff2b(0x131)](_0x24ff2b(0x132)),_0x559149[_0x24ff2b(0x12b)]['add']('bi','bi-plus-lg'),_0x11e2ec['id']='product-id-'+_0x1d5e2f,_0x46ca3c[_0x24ff2b(0x120)]=_0x251bd9,_0x31a912[_0x24ff2b(0x130)]=_0x131758,_0x354c68[_0x24ff2b(0x130)]=_0xefef75,_0x37a172[_0x24ff2b(0x130)]='$'+_0x51cba6,_0x2354fe['id']=_0x1d5e2f,_0x2354fe[_0x24ff2b(0x130)]='0',_0x5b165f[_0x24ff2b(0x11e)]=()=>decrement(_0x1d5e2f),_0x559149[_0x24ff2b(0x11e)]=()=>increment(_0x1d5e2f),_0x11e2ec['appendChild'](_0x46ca3c),_0x11e2ec[_0x24ff2b(0x118)](_0x4c3e7f),_0x4c3e7f[_0x24ff2b(0x118)](_0x31a912),_0x4c3e7f['appendChild'](_0x354c68),_0x4c3e7f[_0x24ff2b(0x118)](_0x5879b5),_0x5879b5[_0x24ff2b(0x118)](_0x37a172),_0x5879b5['appendChild'](_0x223f75),_0x223f75[_0x24ff2b(0x118)](_0x5b165f),_0x223f75['appendChild'](_0x2354fe),_0x223f75['appendChild'](_0x559149),_0x51b1db[_0x24ff2b(0x122)](_0x11e2ec);}),_0x51b1db;},items=generateShop();shop[a4_0x4f7672(0x123)](...items);const increment=_0x3bcb49=>{const _0x596e14=a4_0x4f7672,_0xe8068f=basket[_0x596e14(0x124)](_0x5853fc=>_0x5853fc['id']===_0x3bcb49);_0xe8068f?_0xe8068f['item']++:basket[_0x596e14(0x122)]({'id':_0x3bcb49,'item':0x1}),updateLocalStorage(_0x3bcb49);},decrement=_0x11f0dd=>{const _0x17b20a=a4_0x4f7672,_0x19b41f=basket[_0x17b20a(0x124)](_0x51e61a=>_0x51e61a['id']===_0x11f0dd);if((_0x19b41f===null||_0x19b41f===void 0x0?void 0x0:_0x19b41f[_0x17b20a(0x11c)])===0x1)basket[_0x17b20a(0x115)](basket[_0x17b20a(0x12d)](_0x19b41f),0x1);else _0x19b41f&&_0x19b41f['item']--;updateLocalStorage(_0x11f0dd);},updateLocalStorage=_0x29ed0c=>{const _0x296183=a4_0x4f7672;localStorage[_0x296183(0x112)](_0x296183(0x116),JSON[_0x296183(0x11b)](basket)),update(_0x29ed0c);},update=_0x214bbf=>{const _0xe2167a=a4_0x4f7672,_0x545d90=document[_0xe2167a(0x12c)](_0x214bbf),_0x23369e=basket[_0xe2167a(0x124)](_0x3c2112=>_0x3c2112['id']===_0x214bbf);_0x23369e?_0x545d90[_0xe2167a(0x130)]=_0x23369e[_0xe2167a(0x11c)]['toString']():_0x545d90['innerText']='0',calculation();},calculation=()=>{const _0x1db4c8=a4_0x4f7672,_0x1a9655=document['getElementById']('cartAmount');let _0x120daa=0x0;basket[_0x1db4c8(0x126)](_0x4b0b94=>_0x120daa+=_0x4b0b94[_0x1db4c8(0x11c)]),_0x1a9655['innerText']=_0x120daa[_0x1db4c8(0x129)]();},retrieveData=()=>{const _0x2845a3=a4_0x4f7672;basket[_0x2845a3(0x126)](({id:_0x4a1f6b})=>{update(_0x4a1f6b);});};retrieveData();