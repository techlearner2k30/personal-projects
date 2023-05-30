import Image from 'next/image'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer/footer'
import Copyright from './components/copyright'
import Heading2 , { SmallBlueHeading2 } from './components/general/heading2'
import ProductList from './components/productlist'
import ProductsArray from './components/productsarray'
import Product from './components/product'


const productsList = [
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
  { imgUrl : 'feature.png' , title :  "Brushed Raglan Sweatshirt", price : 195 },
]

export default function Home() {
  return (<>
    <main className="m-auto max-w-7xl">
      <Header />
      <Hero />

      <div className='py-12'>
      <SmallBlueHeading2 text="Check What We Have" style="text-center font-bold" />

        <Heading2 text="Check What We Have" style="text-center  font-bold" />

        <ProductList productsList={productsList.slice(0,3)}/>

        {/* <div className='products flex gap-2 flex-wrap justify-between'>
        {
            productsList.map( (product , index) => <Product title={product.title} imgUrl={product.imgUrl} price={product.price} textStyle='text-bold text-2xl text-black-900' wrapperstyle='flex flex-col py-8'/>) 
        }

    
    </div> */}

        {/* <ProductList products={productsList}/> */}

        {/* <div className=''>
          <img src="./assets/feature.png" />
          <h3>Brushed Raglan Sweatshirt</h3>
          <h3>$195</h3>
        </div> */}
        
      </div>
      <Footer />
    </main>
      <Copyright />
    </>
  )
}
