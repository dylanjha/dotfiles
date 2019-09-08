const execa = require('execa')
const Listr = require('listr')
const FILES = require('../src/files')
const fs = require('fs')

const cmds = [
  {
    title: "Calling 'brew cask' and getting the list",
    task: async () => {
      const { stdout } = await execa('brew cask list', {shell: true});
      fs.writeFile('./files/brew_cask_list.txt', stdout, (err) => {
        if (err) throw err;
      });
    }
  }
]

const listr = new Listr(cmds)

listr.run().catch(err => {
	console.error(err);
});
