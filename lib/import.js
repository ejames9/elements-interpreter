// This file tests the import function portion of the elements.js interpreter.


import({
  'lodash': ['omit', 'join', 'tap', 'deburr'],
'alias': ['log', 'css', 'make', 'put'],
'elements': null
});

import({'lodash': ['omit', 'join', 'tap', 'deburr'],
 			'alias': ['log', 'css', 'make', 'put'],
		  'elements': null
});

'hell'
import({ 'lodash': ['omit', 'join', 'tap', 'deburr'],
 			 'alias': ['log', 'css', 'make', 'put'],
		   'elements': null});

       import({ 'lodash': ['omit', 'join', 'tap', 'deburr'],
        			 'alias': ['log', 'css', 'make', 'put'],
       		   'elements': null,
             'jquery': '$'
        });
var once = function(event, el, callback) {      //DONE:0 Finish once function.
                                                       //TODO:0 Test once function.
  var callBack = function() {
    callback;
    document.getElementById(el).removeEventListener(event, callBack);
  };

  import({ 'lodash': ['omit', 'join', 'tap', 'deburr'],
   			 'alias': ['log', 'css', 'make', 'put'],
  		   'elements': null

  });


  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return (function() {
        document.getElementById(el).addEventListener(event, callBack);
      }) ();
    } else if (el[0] === '.') {
      el = el.slice(1);
      return (function() {
        document.getElementsByClassName(el)[0].addEventListener(event, callBack);
      }) ();
    } else {
      return (function() {
        document.getElementsByTagName(el).addEventListener(event, callBack);
      }) ();
    }
  } else {
    return (function() {
      el.addEventListener(event, callBack);
    }) ();
   }
};



import({'lodash': ['omit',
						       'join',
						        'tap',
						     'deburr'],
         'alias': ['log'
						     , 'css'
						     , 'make'
						     , 'put'],
        'elements': null
});

import({'lodash': [ 'omit',
						       'join',
						        'tap',
						     'deburr'],
         'alias': ['log'
						     , 'css'
						     , 'make'
						     , 'put'],
        'elements': null,
           'jquery': '$' });

import({'lodash': ['omit',
						 'join',
						 'tap',
						 'deburr'],
         'alias': ['log'
						, 'css'
						, 'make'
						, 'put'],
        'elements': null,
         'jquery': '$' });

module.exports = {
  once: once
}
