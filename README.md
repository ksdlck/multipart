Multipart
=========
POST multipart/form-data encoded messages.

SYNOPSIS
--------

Coco:

    {Multipart} = require \multipart

    m = new Multipart

    m.add \key \value
    m.add \filekey \filevalue \filename \filetype

    console.log m.encode ()

Using Node.js' `http.request` to make a multipart/form-data encoded POST request.

    http = require \http

    m = new Multipart

    m.add \field1 \value1
    m.add \field2 \value2

    req = http.request do
      headers:
        "Content-Type": "multipart/form-data; boundary=#{m.boundary}"

    req.write m.encode ()
    req.end ()

LICENSE
-------

Copyright (c) 2012 Karel Sedláček <k@ksdlck.com> (http://ksdlck.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
