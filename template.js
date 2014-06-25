/**
 * Library Scaffolding Template
 *
 * Will generate a composer.json, component.json and package.json files with directory structure compliant with
 * all three package managers.
 *
 * @example
 *
 *    // Clone Library Scaffolding template into Grunt's template directory
 *    $ git clone git@github.com:UsabilityDynamics/scaffold-library.git ~/.grunt-init/library
 *
 *    // Crate new directory for future library
 *    $ mkdir my-library
 *
 *    // Move into the new directory and call grunt-init
 *    $ cd my-library && grunt-init library
 *
 * @repository UsabilityDynamics/scaffold-library
 * @method Template
 * @author potanin@UD
 * @version 0.1.0
 */
function Template( grunt, init, done) {

  var deepExtend = require( 'deep-extend' );
  
  var _extend = grunt.util._.extend;

  init.process( {type: 'module'}, [

    init.prompt( 'name' ),
    init.prompt( 'description' ),
    init.prompt( 'version', '0.0.1' ),
    init.prompt( 'licenses' ),
    init.prompt( 'author_name', 'Usability Dynamics' ),
    init.prompt( 'author_email', 'info@UsabilityDynamics.com' ),
    init.prompt( 'author_url', 'http://UsabilityDynamics.com' ),
    init.prompt( 'node_version', '>=0.10.21' )

  ], function( err, props ) {

    var _package = deepExtend( require( './root/package.json' ), props );
    //var _composer = deepExtend( require( './root/composer.json' ) );
    
    props = _extend( props, {
      "keywords": [ "library", "component", "composer" ],
      "private": true,
      "directories": {
        "test": "./test",
        "templates": "./static/templates",
        "scripts": "./static/scripts",
        "vendor": "./vendor",
        "images": "./static/images",
        "styles": "./static/styles",
        "doc": "./static/codex",
        "lib": "./lib"
      },
      "publishConfig": {
        "registry": "http://rpm.udx.io"
      },  
      "scripts": {
        "test": "mocha --ui exports --reporter list",
        "start": "grunt start",
        "publish": "grunt publish",
        "prepublish": "grunt publish"
      },      
      "contributors": [
        {
          "name": "Anton Korotkov",
          "email": "anton.korotkov@UsabilityDynamics.com",
          "url": "http://UsabilityDynamics.com"
        },
        {
          "name": "Maxim Peshkov",
          "email": "maxim.peshkov@UsabilityDynamics.com",
          "url": "http://UsabilityDynamics.com"
        },
        {
          "name": "Andy Potanin",
          "email": "andy.potanin@UsabilityDynamics.com",
          "url": "http://UsabilityDynamics.com"
        }
      ],
      "dependencies": {
        "findup-sync": "^0.1.3",
        "load-grunt-tasks": "^0.6.0",
        "lodash": "^2.4.1"        
      },
      "devDependencies": {
        "grunt": "^0.4.5",
        "grunt-config": "^0.2.0",
        "grunt-contrib-clean": "~0.5.0",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-jscs": "^0.1.8",
        "grunt-contrib-less": "~0.8.3",
        "grunt-contrib-symlink": "~0.2.0",
        "grunt-contrib-uglify": "~0.2.4",
        "grunt-contrib-watch": "~0.5.3",
        "grunt-contrib-yuidoc": "~0.5.0",
        "grunt-markdown": "~0.4.0",
        "grunt-mocha-test": "~0.11.0",
        "grunt-phpcs": "~0.2.2",
        "grunt-phpunit": "~0.3.3",
        "grunt-shell": "~0.6.0",
        "grunt-scaffold-module": "UsabilityDynamics/grunt-scaffold-module",
        "grunt-scaffold-library": "UsabilityDynamics/grunt-scaffold-library",
        "mocha": "^1.20.1",
        "should": "~4.0.4"
      },
      "repo": {
        type: 'git',
        url: 'git://github.com/UsabilityDynamics/lib-' + props.name
      },
      "homepage": 'http://github.com/UsabilityDynamics/lib-' + props.name,
      "bugs":'http://github.com/UsabilityDynamics/lib-' + props.name + '/issues',
      "copyright": "Copyright (c) 2013 Usability Dynamics, Inc."
    });

    var component = {
      "name": props.name,
      "version": props.version,
      "description": props.description,
      "homepage": props.homepage,
      "name": 'usabilitydynamics/lib-' + props.name,
      "dependencies": {},
      "scripts": [ props.directories.scripts ],
      "templates": [ props.directories.templates ],
      "styles": [ props.directories.styles ],
      "files": [ props.directories.lib ],
      "authors": props.authors,
      "license": "MIT"
    }

    var composer = {
      "name": 'usabilitydynamics/' + props.name,
      "type": 'library',
      "version": props.version,
      "description": props.description,
      "require": {},
      "repositories": [
        { 
          "type": "composer", 
          "url": "http://repository.usabilitydynamics.com" 
        }
      ],
      "minimum-stability": "dev",
      "homepage": props.homepage,
      "authors": props.authors,
      "autoload": { "classmap": [ "lib" ] },
      "extra": {
        "component": component
      },
      "support": { "issues": props.bugs },
      "license": "MIT"
    }

    var _files = init.filesToCopy( props );

    init.copyAndProcess( _files , props );

    init.addLicenseFiles( _files , props.licenses);

    init.writePackageJSON( 'package.json', props );

    grunt.file.write( init.destpath( 'composer.json' ), JSON.stringify( composer, null, 2 ) );
    grunt.file.write( init.destpath( 'component.json' ), JSON.stringify( component, null, 2 ) );

    done();

  });

}

/**
 * Module Properties
 *
 */
Object.defineProperties( module.exports, {
  description: {
    value: 'Create a Composer, Component, Node.js shared library.',
    enumerable: true
  },
  notes: {
    value: '_Project name_ shoul not contain "lib" as it will prefixed automatically.',
    enumerable: true
  },
  after: {
    value: '',
    enumerable: true
  },
  warnOn: {
    value: '*',
    enumerable: true
  },
  template: {
    value: Template,
    enumerable: true
  }
});