/*
 * Node.js Scaffolding Template
 *
 *
 * @todo After scaffolding, run "npm install" automatically.
 * @todo If GitHub repository given, attempt to create repository and commmit project after creation.
 * @todo If GitHub repository was created, create Wiki and set up as subdmodule in static/wiki.
 * 
 * @version 1.0.0
 */
var deepExtend = require( 'deep-extend' );

var options = {
  type: 'module'
};

exports.description = 'Create Module.';
exports.template = function(grunt, init, done) {


  var prompts = [
    init.prompt( 'name' ),
    init.prompt( 'version', '0.0.1' ),
    init.prompt( 'description', 'Module.' ),
    init.prompt( 'repository' )
  ];

  init.process( options, prompts, processCallback );

  function processCallback( err, props ) {
  
    var _package = deepExtend( require( './root/package.json' ), props );

    // Copy Files.
    init.copyAndProcess( init.filesToCopy( _package ), _package );

  	// Empty folders won't be copied over so make them here
  	grunt.file.mkdir( 'test/acceptance' );
  	grunt.file.mkdir( 'static/audits' );

    // Write Package to Disk.
    init.writePackageJSON( 'package.json', _package );
    
    done();

  }
  
};

