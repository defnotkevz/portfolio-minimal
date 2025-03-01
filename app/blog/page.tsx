import Footer from "app/components/Footer";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Digital Bleeding
      </h1>
      <BlogPosts />
      <Footer items={[{ name: "rss", link: "/rss" }]} />
    </section>
  );
}
