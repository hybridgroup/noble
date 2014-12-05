var cp = require('child_process');

if (process.platform === 'darwin') {
   cp.exec("npm install git://github.com/hybridgroup/node-xpc-connection.git#pre-compiled-binaries", function(err) {
     if  (!!err){
       console.log('An error occurred: ', err);
       console.log('Try installing xpc-connection module manually by running:');
       console.log("\"npm install git://github.com/hybridgroup/node-xpc-connection.git#pre-compiled-binaries\"");
     } else {
       console.log("xpc connection module has been installed!");
     }
   });
}
