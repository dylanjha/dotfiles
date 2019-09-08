const execa = require('execa')
const Listr = require('listr')

const cmds = [
  {title: 'Running recreate_dotfiles.js', task: () => execa.command('yarn recreate-dotfiles') },
  {title: 'Create ~/.vim/undodir', task: () => execa.command('mkdir -p ~/.vim/undodir') },
  {title: 'Running brew cask install for everything', task: () => execa.command('yarn brew-cask-install-all') }
]

console.log('cmds', cmds)

const setup = new Listr(cmds)
setup.run().catch(err => {
	console.error(err);
});
