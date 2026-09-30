// posts.data.ts
import { ContentData, createContentLoader } from 'vitepress'


declare const data: ContentData[]
export { data }

export default createContentLoader('blog/**/*.md', {
    transform(raw): ContentData[] {
        return raw
            .filter(post => post.frontmatter.date)
            .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
    }
}) 