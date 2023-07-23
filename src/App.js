import Header from './Compnents/Header/header';
import Started from './Compnents/Started/started';
import TrendingCollection from './Compnents/TrendingCollection'
import "./App.css"
import Top from "./components/topCreator/Top";
import Discover from "./components/discoverNfts/Discover";
import Browse from "./components/browse/Browse";
import Work from "./components/work/Work";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Header/>
      <Started/>
   <TrendingCollection/>
   <Top />
      <Discover />
      <Browse />
      <Work />
      <Join />
    <Footer />
      </div>
  );
}

export default App;
