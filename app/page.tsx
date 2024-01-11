import Navbar from "./component/navbar";
import ProductHero from "./component/producthero/productHero";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto" }}>
        <ProductHero />
      </div>
    </main>
  );
}
