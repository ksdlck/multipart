(function(){
  var Multipart, m;
  Multipart = require('../lib/multipart').Multipart;
  m = new Multipart;
  m.add("this key has \"quotes\" in it", 'value');
  console.log(m.encode());
}).call(this);
