
import render from 'preact-render-to-string';
import { pages } from './load';
import { writeAsync, path } from 'fs-jetpack'
const root = path(__dirname, "../")

async function renderFiles() {
    console.log("Rendering")

    await Promise.all(
        pages
        .map((q) => {
                return {
                    ...q,
                    content: render(q.content)
                }
            })
            .map((q) => {
                return writeAsync(path(root, "./dist/", q.page), q.content)
            })
    )
}


export function run() {
    renderFiles()
}