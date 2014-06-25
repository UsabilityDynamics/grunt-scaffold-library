module.exports = {  
  'grunt-scaffold-library': { 
    'has valid project structure.': require( 'grunt-scaffold-module' ).testStructure(),
    'has valid public methods.': require( 'grunt-scaffold-module' ).testMethods(),
    'has valid public classess.': require( 'grunt-scaffold-module' ).testClasses()       
  } 
}