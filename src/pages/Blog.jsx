

"use client";


import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Tips for Shopping Online",
    excerpt: "Learn how to get the best deals and avoid common mistakes when shopping online.",
    date: "Jan 15, 2026",
    image: "https://images.pexels.com/photos/394568/pexels-photo-394568.jpeg",
    slug: "shopping-tips"
  },
  {
    id: 2,
    title: "How to Choose the Right Laptop",
    excerpt: "A complete guide to selecting a laptop that suits your needs perfectly.",
    date: "Jan 10, 2026",
    image: "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg",
    slug: "choose-laptop"
  },
  {
    id: 3,
    title: "Smart Home Devices You Need",
    excerpt: "Upgrade your home with the latest smart devices that make life easier.",
    date: "Jan 5, 2026",
    image: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg",
    slug: "smart-home-devices"
  },
  {
    id: 4,
    title: "Best Bluetooth Speakers in 2026",
    excerpt: "Discover the top-rated Bluetooth speakers for crystal clear sound.",
    date: "Jan 2, 2026",
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    slug: "bluetooth-speakers-2026"
  }
];

  const Blog = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
          <p className="text-gray-500 mt-2">Tips, guides, and updates from ShopNest</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="text-blue-600 font-medium hover:underline">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog