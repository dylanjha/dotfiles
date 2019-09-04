const execa = require('execa')
const Listr = require('listr')

const cmds = [
  {title: 'Running recreate_dotfiles.js', task: () => execa.command('yarn recreate-dotfiles') },
  {title: 'Create ~/.vim/undodir', task: () => execa.command('mkdir -p ~/.vim/undodir') }
]

console.log('cmds', cmds)

const setup = new Listr(cmds)
setup.run().catch(err => {
	console.error(err);
});
