import Articles from "../components/Articles"
import Hero from "../components/Hero"
import HomeCategory from "../components/HomeCategory"
import ProductMiniMenu from "../components/ProductMiniMenu"


function Home() {
  return (
    <div>
      <Hero/>
      <ProductMiniMenu/>
      <HomeCategory/>
      <Articles/>
    </div>
  )
}

export default Home