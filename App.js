import LinkContainer   from './LinkContainer'
import AppHeader from './AppHeader'
import GlassBar from './GlassBar';
import NavbarLastSection from './NavbarLastSection';
import MainSection from './MainSection';
import LastSection from './LastSection';
import ProductCard from './ProductCard';

function App(){
  return (
<div className="h-screen w-screen ">
  <LinkContainer></LinkContainer>
  <AppHeader></AppHeader>
  <GlassBar></GlassBar>
  <NavbarLastSection></NavbarLastSection>
<div className="mt-2">
    <img src="https://static1.lenskart.com/media/desktop/img/h24/oct/flash%2026/EYE%20&%20SUN/DAY-2/ONLINE/PLP-web.gif"></img>
  </div>
  <MainSection></MainSection>
 <LastSection></LastSection>




<div className='grid grid-cols-4'>
<ProductCard ProductName="ABC" imageUrl="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e17197-c1-eyeglasses_l_dsc2281.jpg"/>
<ProductCard ProductName="Custom" imageUrl="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-silver-full-rim-rectangle-lenskart-air-signia-la-e14016-c1-eyeglasses_csvfile-1673003051725-g_2034_09-july.jpg"/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>
 <div className='grid grid-cols-4 gap-4'></div>

</div>







);
}
export default App;   
