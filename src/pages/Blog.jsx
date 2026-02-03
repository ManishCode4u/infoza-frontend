import { Link } from "react-router-dom";
import blogImg from "../assets/images/ai-blog-cover.png";

const FULL_CONTENT = `
Artificial Intelligence, commonly called AI, is a technology that allows machines and computer systems to think, learn, and take decisions in a human-like manner. Unlike traditional programs that work only on fixed instructions, AI systems analyze large amounts of data, recognize patterns, and improve their performance over time. Artificial Intelligence is no longer a concept of the future; it is already deeply integrated into our everyday lives, often without us realizing it.
`;

const Blog = () => {
  return (
    <section className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* BLOG CARD */}
        <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">

          {/* Image */}
          <img
            src={blogImg}
            alt="Artificial Intelligence"
            className="w-full aspect-video object-cover"
          />

          {/* Content */}
          <div className="p-6">
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">
              Artificial Intelligence
            </span>

            <h3 className="text-xl font-bold text-gray-900">
              Understanding Artificial Intelligence (2026)
            </h3>

            {/* ✅ AUTO SHORT CONTENT */}
            <p className="text-gray-600 text-sm mt-3">
              {FULL_CONTENT.slice(0, 220)}...
            </p>

            {/* READ MORE */}
            <Link
              to="/blog/ai-beginners-guide"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
