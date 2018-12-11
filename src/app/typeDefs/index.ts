import * as dir from 'dir_filenames'

const defs: string[] = dir(`${process.env.PWD}/src/app/typeDefs/defs`)

export let typeDefs: string | string[]
if (defs.length > 0) {
  if (defs.length === 1) {
    typeDefs = require(defs[0]).typeDefs
  } else {
    let defsArr: string[] = []
    defs.map(def => {
      defsArr.push(require(def).typeDefs)
    })
    typeDefs = defsArr
  }
}