import Body from "./components/main-page/body";
import Footer from "./components/main-page/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 animated-bg">
        <Body />
      </main>
      <Footer />
    </div>
  );
}
