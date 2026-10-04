import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = await getCollection('blog');
  return rss({
    title: 'Astro学習者 | ブログ',
    description: 'Astroを学ぶ旅',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}