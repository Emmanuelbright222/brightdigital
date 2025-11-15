import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/content.js';
import SectionHeading from '../components/SectionHeading.jsx';
import { FiArrowLeft } from 'react-icons/fi';

const renderContent = (content) => {
  const blocks = content.split('\n\n');
  return blocks.map((block, index) => {
    // H1 headings
    if (block.startsWith('# ')) {
      return (
        <h1 key={index} className="mt-8 text-3xl font-semibold text-primary dark:text-white first:mt-0">
          {block.replace('# ', '')}
        </h1>
      );
    }
    // H2 headings
    if (block.startsWith('## ')) {
      return (
        <h2 key={index} className="mt-8 text-2xl font-semibold text-primary dark:text-white first:mt-0">
          {block.replace('## ', '')}
        </h2>
      );
    }
    // H3 headings
    if (block.startsWith('### ')) {
      return (
        <h3 key={index} className="mt-6 text-xl font-semibold text-primary dark:text-white first:mt-0">
          {block.replace('### ', '')}
        </h3>
      );
    }
    // Lists
    if (block.includes('\n- ') || block.startsWith('- ')) {
      const items = block.split('\n').filter((line) => line.trim().startsWith('- '));
      return (
        <ul key={index} className="mt-4 space-y-2">
          {items.map((item, itemIndex) => {
            const text = item.replace(/^-\s*/, '').trim();
            // Handle bold text in list items
            const parts = text.split(/(\*\*.*?\*\*)/g);
            return (
              <li key={itemIndex} className="flex gap-2 text-base leading-relaxed text-primary/80 dark:text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  {parts.map((part, partIndex) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                      <strong key={partIndex} className="font-semibold text-primary dark:text-white">
                        {part.replace(/\*\*/g, '')}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }
    // Regular paragraphs with bold text support
    const parts = block.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={index} className="text-base leading-relaxed text-primary/80 dark:text-slate-300">
        {parts.map((part, partIndex) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={partIndex} className="font-semibold text-primary dark:text-white">
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="px-6 pt-32 text-center text-primary dark:text-white">
        <p>Article not found.</p>
        <Link to="/insights" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <FiArrowLeft /> Back to insights
        </Link>
      </div>
    );
  }

  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="space-y-20 bg-white pb-24 dark:bg-[#050816]">
      <section className="px-6 pt-24">
        <div className="mx-auto max-w-4xl space-y-6">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent">
            <FiArrowLeft /> Back to insights
          </Link>
          <SectionHeading eyebrow={post.tags.join(' • ')} title={post.title} description={post.excerpt} />
          <div className="text-sm uppercase tracking-widest text-primary/60 dark:text-slate-400">
            By {post.author} • {post.date}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <img src={post.image} alt={post.title} className="w-full rounded-3xl object-cover" />
          <div className="space-y-6">{renderContent(post.content)}</div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-primary/10 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-primary dark:text-white">Related Articles</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/insights/${item.slug}`}
                className="rounded-2xl border border-primary/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="text-xs uppercase tracking-widest text-primary/60 dark:text-slate-400">{item.date}</div>
                <h4 className="mt-2 text-lg font-semibold text-primary dark:text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-primary/70 dark:text-slate-300">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
