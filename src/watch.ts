import chokidar from 'chokidar'
import { resolve, dirname } from 'path'


import * as P from 'ts-prime'

const wa = async () => {
    const files = Object.keys(require.cache).filter((q) => q.startsWith(dirname(resolve("./index.ts"))))
    for (const x of files) {
        delete require.cache[x]
    }
    const x = require("./index.ts")
    await x.run()

}

const debounced = P.throttle(wa, 100)

var watcher = chokidar.watch(__dirname, {ignored: /^\./, persistent: true});


watcher
  .on('add', debounced)
  .on('change', debounced)
