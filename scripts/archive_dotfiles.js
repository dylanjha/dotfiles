const execa = require('execa')
const Listr = require('listr')
const FILES = require('../src/files')

const cmds = FILES.map((file) => ({
  title: `Remove file ${file.src}`,
  task: () => execa.command(`rm -f ./files/${file.name}`)
}))

cmds.push({
  title: "Create files/ dir",
  task: () => execa.command('mkdir -p ./files')
})


FILES.forEach((file) => {
  cmds.push({
    title: `Copy ${file.src}`,
    task: () => {
      if (file.name === 'gitconfig') {
        // replace gitconfig signing_key with xxxx
        execa.command(`sed -e "s/signingkey[[:space:]]=[[:space:]].*$/signingkey = xxxxxxx/" ${file.src} > ./files/${file.name}`, {shell: true})
      } else {
        execa.command(`cp ${file.src} ./files/${file.name}`, {shell: true})
      }
    }
  })
})

const copyFiles = new Listr(cmds)

copyFiles.run().catch(err => {
	console.error(err);
});
