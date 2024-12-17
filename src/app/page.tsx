
import Collection from "./components/collection";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Range from "./components/range";
import Inspiration from "./components/inspiration";
import Setup from "./components/setup";
import Footer from "./components/footer";






export default function Home() {
  return (
   <div>
        <Navbar />
        <Collection />
        <Range />
        <Products />
        <Inspiration />
        <Setup />
        <Footer />
        
   </div>
  );
}
