import { FC } from 'react'
import { BlogPost } from '@/types/blog'

interface BlogCardProps {
  blog: BlogPost
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const CardContent = () => (
    <article className="group cursor-pointer touch-manipulation">
      {/* Swiss Design Grid Layout */}
      <div className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-200 dark:border-neutral-800">
        
        {/* Title - Takes up most of the grid */}
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-tight mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {blog.title}
          </h2>
        </div>

        {/* Metadata - Right aligned, minimal */}
        <div className="col-span-12 lg:col-span-4 lg:text-right">
          <div className="flex lg:justify-end gap-4 text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
            <span>{blog.readTime}</span>
          </div>
        </div>

      </div>
    </article>
  )

  return (
    <a 
      href={blog.externalUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full touch-manipulation active:opacity-75"
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <CardContent />
    </a>
  )
}
