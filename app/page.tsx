import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-semibold tracking-tighter">Kevin Roy</h1>
        <h3 className="mb-8">Full Stack Engineer</h3>
      </div>

      <p className="mb-4">
        {/* {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`} */}
        {`I love beautiful software.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
