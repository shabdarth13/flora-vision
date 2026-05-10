import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionTitle from './components/SectionTitle'
import TrendCard from './components/TrendCard'
import ProductCard from './components/ProductCard'
import ReviewCard from './components/ReviewCard'
import BestO2 from './components/BestO2'
import Footer from './components/Footer'

import { topPlants, reviews } from './data/data'

import trendy1 from './assets/trendy-plant-1.png'
import trendy2 from './assets/trendy-plant-2.png'

export default function App() {
  return (
    <div className="page-bg">
      <div className="hero-area">
        <Navbar />
        <Hero />

        <main className="container-main pb-24">
          <section id="plants-type" className="pt-6">
            <SectionTitle>Our Trendy plants</SectionTitle>

            <TrendCard
              image={trendy1}
              title="For Your Desks Decorations"
              desc="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
              price="Rs. 599/-"
            />

            <TrendCard
              image={trendy2}
              title="For Your Desks Decorations"
              desc="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming."
              price="Rs. 399/-"
              reverse
            />
          </section>
        </main>
      </div>

      <main className="container-main py-28">
        <section>
          <SectionTitle>Our Top Selling Plants</SectionTitle>

          <div className="grid gap-x-12 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {topPlants.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-36">
          <SectionTitle>Customer Review</SectionTitle>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((item) => (
              <ReviewCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <BestO2 />
      </main>

      <Footer />
    </div>
  )
}