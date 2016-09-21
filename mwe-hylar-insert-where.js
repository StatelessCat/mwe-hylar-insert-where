const H = require('hylar')

// An encoding of https://www.w3.org/TR/2004/REC-rdf-schema-20040210/#ch_domain
const query =
      'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \n' +
      'INSERT { \n' +
      '  ?c a ?b . \n' +
      '} \n' +
      'WHERE { \n' +
      '  ?a rdfs:domain ?b . \n' +
      '  ?c ?a ?d .  \n' +
      '} '

// Just to give some triples to inititialize Hylar
const emptyOntology =
      '@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . ' +
      'rdf:type rdf:type rdf:Property .'
const mimeType = 'text/turtle'

var Hylar = new H()
Hylar.load(emptyOntology, mimeType).then(function (response) {
  console.log(response)

  // Load an INSERT WHERE query
  return Hylar.query(query)
}).then(function (qanswer) {
  // We never get here ):
  console.log(qanswer)
}).catch(function (err) {
  console.log(err)
  // TypeError: Cannot read property 'length' of undefined
  //   at Hylar.query (/home/raph/code/mwe-hylar-insert-where/node_modules/hylar/hylar/hylar.js:188:48)
  //   at /home/raph/code/mwe-hylar-insert-where/mwe-hylar-insert-where.js:21:16
  //   at _fulfilled (/home/raph/code/mwe-hylar-insert-where/node_modules/q/q.js:834:54)
  //   at self.promiseDispatch.done (/home/raph/code/mwe-hylar-insert-where/node_modules/q/q.js:863:30)
  //   at Promise.promise.promiseDispatch (/home/raph/code/mwe-hylar-insert-where/node_modules/q/q.js:796:13)
  //   at /home/raph/code/mwe-hylar-insert-where/node_modules/q/q.js:556:49
  //   at runSingle (/home/raph/code/mwe-hylar-insert-where/node_modules/q/q.js:137:13)
  //   at flush (/home/raph/code/mwe-hylar-insert-where/node_modules/q/q.js:125:13)
  //   at _combinedTickCallback (internal/process/next_tick.js:67:7)
  //   at process._tickCallback (internal/process/next_tick.js:98:9)
})

