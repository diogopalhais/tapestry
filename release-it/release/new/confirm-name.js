var opts = require('../../opts');

module.exports = function (cb) {
  var question = 'Confirm that "' + opts.nextRelease.name + '" will be the name of the next release? (y/n)'[opts.env.promptColor];
  var choice;

  question = question[opts.env.promptColor];

  prompt.get(question, function (err, data) {
    if (err) return false;
    var choice = data[question];

    if (choice === 'Y' || choice === 'y')
      return cb(null);

    else if (choice === 'N' || choice === 'n') {
      question = 'Last chance fancy pants, what\'s the release\' name?'[opts.env.promptColor];

      prompt.get(question, function (err, data) {
        if (err) return false;
        opts.nextRelease.name = data[question];
        return cb(null);
      });
    }

    else
      return false;
  });
};
