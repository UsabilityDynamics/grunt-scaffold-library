module.exports = function( grunt ) {
  
  grunt.registerTask( 'publish', function() {
    
  });
  
  function forLater() {
    
    github.authenticate({
      type: "oauth",
      token: "d3ac736ffb7ef8c16fbae8825d7331843a8edaee"
    });

    github.user.getFollowingFromUser({
      user: "andypotanin"
    }, function(err, res) {
      console.log(JSON.stringify(res));
    });

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });


    
  }  
  
}