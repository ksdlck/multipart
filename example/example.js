(function(){
  var Multipart, m;
  Multipart = require('../lib/multipart').Multipart;
  m = new Multipart;
  m.add('key', 'value');
  m.add('key', 'value', 'filename', 'type');
  m.add('key', 'value');
  console.log(m.encode());
}).call(this);
