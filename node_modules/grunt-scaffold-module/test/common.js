module.exports = {  
  'grunt-scaffold-module': { 
    'has valid project.yml file.': require( '../' ).testProjectValidity(),
    'has valid project structure.': require( '../' ).testStructure(),
    'has valid public methods.': require( '../' ).testMethods(),
    'has valid public classess.': require( '../' ).testClasses()       
  } 
}