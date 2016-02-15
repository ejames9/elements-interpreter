// This file tests the elements syntax portion of the elements.js interpreter.
//Testing Testing Testing Testing.

var _ = require('element.js').interpreter;
var imports = require('element.js').imports;



import({
     'lodash': ['omit', 'deburr', 'each', 'map'],
'elements.js': ['on', 'off', 'put', 'log', 'make']
});



1 /*--------------------------------------------------------*/ 1
<main<'#container'<ol='#list'<li='.list-item'=3/>/>/>/>
                    .color('red')
                    .put('body');
          .color('blue')
          .border('1px solid yellow')
          .borderRadius('25px');
2 /*--------------------------------------------------------*/ 2
 <'#footer'/>
           .on('click', fuckOff);
3 /*--------------------------------------------------------*/ 3
 <'#header'<button=2/>/>
           .on('docready', fuckOnn);
4 /*--------------------------------------------------------*/ 4
<body<button='.submit'=5/>/>
                .width('200px')
                .height('100px')
                .backgroundColor('transparent')
                .border('1px solid white')
                .borderRadius('10px')
                .on('click', exeCute);
5 /*--------------------------------------------------------*/ 5
<'#footer'<'#tab'/><'.buttons'=2/>/>
                      .on('click', fuckOff);
6 /*--------------------------------------------------------*/ 6
<'#header'/>
          .on('docready', fuckOnn);
7 /*--------------------------------------------------------*/ 7
<input='#input'/>
8 /*--------------------------------------------------------*/ 8
<body<button='#submit'/>/>
                .width('200px')
                .height('100px')
                .backgroundColor('transparent')
                .border('1px solid white')
                .borderRadius('10px')
                .on('click', exeCute);
 /*--------------------------------------------------------*/
