const execa = require('execa')
const Listr = require('listr')
const FILES = require('../src/files')

const cmds = [
  {
    title: "Remove existing files",
    task: () => execa.command('rm -rf ./files')
  },
  {
    title: "Create files/ dir",
    task: () => execa.command('mkdir ./files')
  }
]


FILES.forEach((file) => {
  cmds.push({
    title: `Copy ${file.src}`,
    task: () => execa.command(`cp ${file.src} ./files/${file.name}`, {shell: true})
  })
})

const copyFiles = new Listr(cmds)

copyFiles.run().catch(err => {
	console.error(err);
});
