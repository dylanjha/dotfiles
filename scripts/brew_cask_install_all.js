const execa = require('execa')
const Listr = require('listr')
const FILE_NAME = './files/brew_cask_list.txt'
const fs = require('fs')


fs.readFile(FILE_NAME, 'utf8', (err, data) => {
  if (err) throw err;

  const apps = data.split('\n').join(' ');
  const cmds = [
    {
      title: `Installing a bunch of apps: ${apps}`,
      task: () => execa('brew cask install', [apps], {shell: true})
    }
  ];

  const listr = new Listr(cmds)
  listr.run().catch(err => {
    console.error(err);
  });
});

