import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Headline from '../components/headline'
import Contents from '../components/contents';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div>
    <Navbar/>
    <Headline/>
    <Contents/>
    <Footer/>
    </div>
  )
}

export default Home
