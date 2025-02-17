import GHFooter from "./components/GHFooter";

export default function Page() {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-semibold tracking-tighter">Kevin Roy</h1>
        <h3 className="mb-8">Full Stack Engineer</h3>
      </div>

      <p className="mb-4">{`I love beautiful software.`}</p>
      <GHFooter />
    </section>
  );
}
