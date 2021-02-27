import chokidar from 'chokidar'
import { resolve, dirname } from 'path'
import axios from 'axios'
import * as P from 'ts-prime'

const run = async () => {
    const files = Object.keys(require.cache).filter((q) => q.startsWith(dirname(resolve("./index.ts"))))
    for (const x of files) {
        delete require.cache[x]
    }
    const x = require("./index.ts")
    await x.run()
    await axios.get("http://localhost:7000/__lightserver__/trigger")

}
const debounced = P.debounce(run, 100)



const watcher = chokidar.watch(__dirname, { ignored: /^\./, persistent: true });
watcher
    .on('add', debounced)
    .on('change', debounced)
