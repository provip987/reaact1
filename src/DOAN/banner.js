import {NavLink} from 'react-router-dom';

function Banner() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="XUKA.png" class="d-block w-10" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-10" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-100" alt="..." />
          </div>
         
        </div>
        <button><NavLink to="/giohang">Giỏ Hàng</NavLink></button>
      </div>
    </>
  )
}
export default Banner;