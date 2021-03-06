var Multipart = (function(){
  var escape = function(r){
    var c, i;
    c = "";
    i = 0;
    while (-1 !== (i = r.indexOf('"'))) {
      c += r.substring(0, i);
      c += '\\"';
      r = r.substring(i + 1, r.length);
    }
    return c + r;
  };
  Multipart.displayName = 'Multipart';
  var prototype = Multipart.prototype, constructor = Multipart;
  function Multipart(){
    this.boundary = Math.random() + "";
    this.data = [];
  }
  prototype.add = function(name, val, filename, type){
    this.data.push({
      name: name,
      val: val,
      filename: filename,
      type: type
    });
  };
  prototype.encode = function(){
    var cont, name, val, filename, type, _i, _ref, _len, _ref2;
    cont = "";
    for (_i = 0, _len = (_ref = this.data).length; _i < _len; ++_i) {
      _ref2 = _ref[_i], name = _ref2.name, val = _ref2.val, filename = _ref2.filename, type = _ref2.type;
      cont += "--" + this.boundary + "\r\n";
      cont += "Content-Disposition: form-data; name=\"" + escape(name) + "\"";
      if (filename != null) {
        cont += "; filename=\"" + escape(filename) + "\"";
        if (type != null) {
          cont += "\r\nContent-Type: " + type;
        }
      }
      cont += "\r\n";
      cont += "\r\n" + val + "\r\n";
    }
    return cont += "--" + this.boundary + "--";
  };
  return Multipart;
}());
