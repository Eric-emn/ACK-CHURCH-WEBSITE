const posts = [
    {
      id: 1,
      title: 'Walking by Faith in Uncertain Times',
      href: '#',
      description:
        'Discover how to trust God when the future is unclear. This devotional shares a testimony of hope and direction rooted in scripture.',
      date: 'Apr 28, 2025',
      datetime: '2025-04-28',
      category: { title: 'Devotionals', href: '#' },
      author: {
        name: 'Pastor Grace Mwende',
        role: 'Lead Pastor',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1531891437562-5c5ab5e8d2d1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Serving One Another in Love',
      href: '#',
      description:
        'A powerful story from our Outreach Team on how acts of service brought healing and reconciliation to a local community.',
      date: 'Mar 14, 2025',
      datetime: '2025-03-14',
      category: { title: 'Community Outreach', href: '#' },
      author: {
        name: 'James Kariuki',
        role: 'Outreach Coordinator',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'The Power of Worship in Hard Seasons',
      href: '#',
      description:
        'Worship isn’t just about music—it’s about surrender. Read how one family found peace through praise during trials.',
      date: 'Feb 21, 2025',
      datetime: '2025-02-21',
      category: { title: 'Worship & Praise', href: '#' },
      author: {
        name: 'Sarah Wanjiku',
        role: 'Worship Leader',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function ChurchBlog() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Stories of Faith & Ministry
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Be encouraged and inspired by real stories from our church family and reflections on God’s Word.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  