const execa = require('execa')
const Listr = require('listr')
const FILES = require('../src/files')

const cmds = []

FILES.forEach((file) => {
  cmds.push({
    title: `Copy ${file.name} to ${file.src}`,
    task: () => execa.command(`cp ./files/${file.name} ${file.src}`, {shell: true})
  })
})

const recreateDotfiles = new Listr(cmds)

recreateDotfiles.run().catch(err => {
	console.error(err);
});
