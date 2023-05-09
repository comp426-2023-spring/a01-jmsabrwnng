// Require http module
const http = require('http');

// Require fs module
const fs = require('fs');

// Require minimist module
const argv = require('minimist')(process.argv.slice(2));

// Use minimist to process the "--port=" argument from the command line
const port = argv.port || 3000;

// Use the fs module to read the file
const readFile = () => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1); // Exit the process in case of an error
    }
    // Create the server
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

    // Start the server listening on the specified port
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });
};

// Call the readFile function
readFile();
