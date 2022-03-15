import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import Navbar from '../components/navbar'
import Headline from '../components/headline'
import Contents from '../components/contents';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div className="container">
    <Navbar/>
    <Headline/>
    <Contents/>
    <Footer/>
    </div>
  )
}

export default Home
