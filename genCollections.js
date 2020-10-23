const fs = require('fs')
const path = require('path')
const cfg = require('./svits.config.json')
const matter = require('gray-matter')

function init() {
  const cPath = path.resolve(__dirname, '.collections')
  if (fs.existsSync(cPath)) {
    fs.rmdirSync(cPath, { recursive: true })
  }
  fs.mkdirSync(cPath)
  var names = []
  cfg.collections.forEach(c => {
    const p = path.resolve(__dirname, c.path)
    fs.readdir(p, (err, dir) => {
      if (err) {
        return
      }
      names.push(c.name)
      const urls = getUrls(c, dir)
      const data = JSON.stringify(JSON.parse(JSON.stringify(urls)), null, 2)
      fs.writeFileSync(path.join(cPath, `${c.name}.json`), data)
      fs.writeFileSync(path.join(cPath, 'index.js'), getIndex(names))
    })
  })
}

const getIndex = names => {
  const imports = n => {
    let buffer = ''
    n.forEach(n => {
      buffer += `import ${n} from './${n}.json'\n`
    })
    return buffer
  }
  const exports = n => {
    let buffer = 'export {'
    n.forEach(n => {
      buffer += `${n}, `
    })
    buffer += '}'
    return buffer
  }
  return imports(names) + exports(names)
}

const getUrls = (c, dir) => {
  let urls = []
  const files = dir
    .filter(isFile)
    .map(d => ({
      url: path.join(c.url, d).split('.md').join(''),
      path: path.resolve(__dirname, c.path, d)
    }))
  files.forEach(f => {
    urls.push({url: f.url, ...readContent(f.path)})
  })
  return urls
}

const isFile = name => /\.md/.test(name) && name !== 'index.md'

const readContent = path => {
  const buffer = fs.readFileSync(path)
  const { data } = matter(buffer)
  return { ...data }
}

if (cfg.collections && cfg.collections.length) {
  init()
}
