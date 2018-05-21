
WordNet-RIS-DE
==============

WordNet Reduced Information Set (RIS): German (DE)

<p/>
<img src="https://nodei.co/npm/wordnet-ris-de.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/wordnet-ris-de.png" alt=""/>

About
-----

This is a [Node.js](https://nodejs.org/) module shipping the
[CC-BY-SA-4.0](https://spdx.org/licenses/CC-BY-SA-4.0.html) licensed,
120K words containing, on-the-fly downloaded [WordNet LMF (XML)](https://github.com/globalwordnet/schemas)
data file of [Open DE WordNet 1.0](https://github.com/hdaSprachtechnologie/odenet/)
from the [Open DE WordNet Initiative](https://ikum.mediencampus.h-da.de/projekt/open-de-wordnet-initiative/)
in the Reduced Information Set (RIS) format, as on-the-fly generated with the
[wordnet-ris](https://npmjs.com/wordnet-ris) module.

Installation
------------

```shell
$ npm install wordnet-ris wordnet-ris-de
```

Usage
-----

```js
(async () => {

    const RIS   = require("wordnet-ris")
    const RISde = require("wordnet-ris-de")

    console.log(RISde.name)

    let ris = new RIS(RISde.db)
    let results = await ris.lookup("sprecher")
    console.log(results)

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})
```

```
Open DE WordNet 1.0 (2018-05-11) [26 MB, CC-BY-SA-4.0]
```

License
-------

Copyright (c) 2018 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

