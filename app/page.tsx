import Footer from "./components/Footer";

export default function Page() {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-semibold tracking-tighter">Kevin Roy</h1>
        <h3 className="mb-8">Product Engineer </h3>
      </div>

      <p className="mb-4">{`I love beautiful software.`}</p>
      <Footer
        items={[{ name: "github", link: "https://github.com/defnotkevz" }]}
      />
    </section>
  );
}
