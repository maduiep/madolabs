'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'ai-design-future',
    title: 'The Future of AI in Strategic Product Design',
    category: 'Innovation',
    date: 'April 12, 2024',
    readTime: '6 min read',
    image: '/assets/blog-1.png',
    featured: true
  },
  {
    id: 'strategy-for-founders',
    title: 'Why Founders Need a Design-First Growth Strategy',
    category: 'Business',
    date: 'April 08, 2024',
    readTime: '4 min read',
    image: '/assets/blog-2.png',
    featured: false
  },
  {
    id: 'web-arch-patterns',
    title: 'Modern Web Architecture: Building for Scalability',
    category: 'Engineering',
    date: 'April 05, 2024',
    readTime: '8 min read',
    image: '/assets/blog-3.png',
    featured: false
  }
];

export default function InsightsGrid() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 group cursor-pointer"
          >
            <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden mb-8 glass group-hover:border-[#E2FF3B]/30 transition-all">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-8 left-8 glass px-6 py-2 rounded-full text-[#E2FF3B] text-xs font-bold tracking-widest uppercase">
                Featured Article
              </div>
            </div>
            
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6 text-xs text-[#555555] font-bold uppercase tracking-widest">
                <span>{featuredArticle.category}</span>
                <span>•</span>
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold group-hover:text-[#E2FF3B] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>
            </div>
          </motion.div>
        )}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {regularArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 glass group-hover:border-[#E2FF3B]/30 transition-all">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="flex items-center space-x-4 mb-4 text-[10px] text-[#555555] font-bold uppercase tracking-widest">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-[#E2FF3B] transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
