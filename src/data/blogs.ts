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
  },
  {
    id: 'n8n-Workflow-Automation',
    title: 'Why n8n Changed How I Think About Workflow Automation',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/why-n8n-changed-how-i-think-about-workflow-automation-234549af7a27'
  },
  {
    id: 'GraphQL',
    title: 'GraphQL: Why I Stopped Writing REST APIs',
    readTime: '5 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/graphql-why-i-stopped-writing-rest-apis-b282b4f8ed60'
  },
  {
    id: 'Microsoft Clarity',
    title: 'Microsoft Clarity: The Free Analytics Tool You’re Probably Sleeping On',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/microsoft-clarity-the-free-analytics-tool-youre-probably-sleeping-on-2b835c0113a1'
  },
  {
    id: 'Shadcn UI',
    title: 'Shadcn UI: Why I’m Never Going Back to Traditional Component Libraries',
    readTime: '5 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/shadcn-ui-why-im-never-going-back-to-traditional-component-libraries-10c49babb496'
  },
    {
    id: 'Supabase',
    title: 'I Tried Supabase for My Side Project and Now I’m Never Going Back',
    readTime: '4 min read',
    externalUrl: 'https://medium.com/@ananyavhegde2001/i-tried-supabase-for-my-side-project-and-now-im-never-going-back-a216d448bb69'
  },
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
