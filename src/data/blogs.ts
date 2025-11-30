import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'AI Agents with MCP Servers',
    title: 'Building Smarter AI Agents with MCP Servers: A Practical Guide',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/building-smarter-ai-agents-with-mcp-servers-a-practical-guide-3f40bbdffc3b'
  },
  {
    id: 'Ghostty-terminal',
    title: 'Ghostty: A Terminal That Actually Gets It',
    readTime: '3 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/ghostty-a-terminal-that-actually-gets-it-9bf831db84f1'
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
