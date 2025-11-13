import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { blogPosts } from '../data/content.js';

const Blog = () => (
  <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
    <section className="px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas, frameworks, and trends straight from the Bright Digital team"
          description="Stay ahead of what’s next with growth strategies, creative inspiration, and deep-dive analyses."
          align="center"
        />
      </div>
    </section>

    <section className="px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/insights/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="h-48 w-full overflow-hidden">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <span className="text-xs uppercase tracking-widest text-primary/60 dark:text-slate-400">{post.date}</span>
              <h3 className="text-lg font-semibold text-primary dark:text-white group-hover:text-accent">{post.title}</h3>
              <p className="flex-1 text-sm text-primary/70 dark:text-slate-300">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-primary/60 dark:text-slate-400">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/5 px-3 py-1 dark:bg-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-accent dark:text-slate-200">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
