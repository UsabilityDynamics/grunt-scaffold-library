[![Stories in Ready](https://badge.waffle.io/usabilitydynamics/grunt-scaffold-library.png?label=ready&title=Ready)](https://waffle.io/usabilitydynamics/grunt-scaffold-library)
[![Dependency status](https://david-dm.org/UsabilityDynamics/grunt-scaffold-library.png)](https://david-dm.org/UsabilityDynamics/grunt-scaffold-library#info=dependencies&view=table)

* Unlinke our older scaffold modules, the new "grunt-scaffold-*" modules are much more involved into the projects they scaffold.

### Installing
The module should be installed globally.

```sh
npm install -g UsabilityDynamics/grunt-scaffold-library
```

### Usage
At the command-line, cd into an empty directory, run this command and follow the prompts.

When install globally, following CLI commands may be used.

  * `scaffold-library install` - Create new module from scaffold in current directory. 
  * `scaffold-library update` - Update module currently installed using scaffold.
  * `scaffold-library validate` - Validate currenly install module using scaffold.
  * `scaffold-library -v` - Check version.

The legacy method still works as well.
```
grunt-init scaffold-library
```

### Procedural Usage
This module contains several useful grunt Tasks, Mocha Tests and regular Methods which can be refered by scaffolded modules.


```js
// Read the .project.yml file and get a list of features.
var project = require( 'grunt-scaffold-library' ).getProject();
console.log( project.features );
```

```
rm -rf *.* examples lib node_modules static test vendor && scaffold-library create
```

### Mocha Example
```js
module.exports = {  
  'Project': { 
    
    'has project-yml file.': require( 'grunt-scaffold-module' ).testProjectValidity({
      debug: false
    }),
    
    'has requied properties.': require( 'grunt-scaffold-module' ).testStructure({
      debug: false      
    })
    
  },

  'API': {

    'has expected methods': require( 'grunt-scaffold-module' ).testMethods({
      debug: false
    }),

    'has valid public classess.': require( 'grunt-scaffold-module' ).testClasses({
      debug: false
    })

  },

  'Coverage': {    
    
    'PHP Unit Tests': require( 'grunt-scaffold-module' ).phpUnit({
      dir: 'lib/*.php',
      severity: '',
      standard: 'Zend',
      warningSeverity: '',
      ignore: 'php'
    }),
    
    'PHP Mass Detector': require( 'grunt-scaffold-module' ).phpmd({
      dir: 'lib/*.php',
      rulesets: 'codesize'
    }),
    
    'JS Hint': require( 'grunt-scaffold-module' ).jsHint({
      
    }),

    'nodeUnit': require( 'grunt-scaffold-module' ).nodeUnit({
      debug: false
    }),

    'custom test': function customTest() {  
      //console.log({'asdf': "asdf"});      
      //console.log( this._runnable );      
    }
    
  }
}
```