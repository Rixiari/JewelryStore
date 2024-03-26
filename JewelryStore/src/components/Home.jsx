import homeimg1 from '../assets/homeimg/1.jpg'
import homeimg2 from '../assets/homeimg/2.jpg'
import homeimg3 from '../assets/homeimg/3.jpg'
import homeimg4 from '../assets/homeimg/4.jpg'
import homeimg5 from '../assets/homeimg/5.jpg'
import homeimg6 from '../assets/homeimg/6.png'

function Home() {

  return (
<div>
<div className="image-container">
<h1 className="brandName">HOUSE OF HEERA</h1>
<p className='slogan'>Embrace the Wild: Your Adventure Awaits</p>
<img src={homeimg1} alt="Image 1" style={{ width: '700px', height: '700px' }} /> {/* Example: set width and height */}
        <img src={homeimg2} alt="Image 2" style={{ width: '500px', height: '700px' }} /> {/* Example: set width and height */}
        <img src={homeimg4} alt="Image 4" style={{ width: '700px', height: '700px' }} /> {/* Example: set width and height */}
        <img src={homeimg3} alt="Image 3" style={{ width: '500px', height: '700px' }} /> {/* Example: set width and height */}
        <img src={homeimg6} alt="Image 6" style={{ width: '700px', height: '700px' }} /> {/* Example: set width and height */}
        <img src={homeimg5} alt="Image 5" style={{ width: '500px', height: '700px' }} /> {/* Example: set width and height */}
        
      </div>
</div>

  )
}

export default Home;