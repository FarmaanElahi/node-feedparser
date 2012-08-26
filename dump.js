var util = require('util')
  , FeedParser = require('./')
  , parser = new FeedParser()
  , file = process.argv[2];

if (!file) {
  process.exit(2);
}
parser.on('error', console.error);
parser.on('end', function(){
  console.log(util.inspect(arguments, null, 10));
});
parser.parseFile(file);
