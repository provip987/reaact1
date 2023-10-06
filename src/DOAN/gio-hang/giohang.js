
import Thongtin from './thongtin';
import SanPham from './sanpham';
import ShoppingCart from './ShoppingCart';
import ReceiverInfo from './ReceiverInfo';
import PaymentMethod from './PaymentMethod';

function giohang() {

  return(
    <>
<SanPham/>

    </>

  );
  // const products = [
  //   {
  //     'ten':'loại Sản Phẩm 1',
  //     'ds_san_pham':[
  //       {
  //         'id': 1,
  //         'hinh_anh':'./1.jpg',
  //         'ten':'Sản Phẩm 1',
  //         'gia':'10000',
  //         'mota':'vip1',
  //       },
  //       {
  //         'hinh_anh':'./1.jpg',
  //         'ten':'Sản Phẩm 2',
  //         'gia':'1000',
  //         'mota':'vip2',
  //       },
  //       {
  //         'hinh_anh':'./1.jpg',
  //         'ten':'Sản Phẩm 3',
  //         'gia':'1000',
  //         'mota':'vip2',
  //       },
  //     ]
  //   },
  //   {
  //     'ten':'Loại Sản Phẩm 2',
  //     'ds_san_pham':[
  //       {
  //         'hinh_anh':'1.jpg',
  //         'ten':'Sản Phẩm 3',
  //         'gia':'1000',
  //         'mota':'vip3',
  //       },
  //       {
  //         'hinh_anh':'1.jpg',
  //         'ten':'Sản Phẩm 4',
  //         'gia':'10000',
  //         'mota':'vip4',
  //       },
  //     ]
      
      
  //   },
  //   {
  //     'ten':'Loại Sản Phẩm 3',
  //     'ds_san_pham':[
  //       {
  //         'hinh_anh':'1.jpg',
  //         'ten':'Sản Phẩm 5',
  //         'gia':'1000',
  //         'mota':'vip5',
  //       },
  //       {
  //         'hinh_anh':'1.jpg',
  //         'ten':'Sản Phẩm 6',
  //         'gia':'1000',
  //         'mota':'vip6',
  //       },
  //     ]
      
      
  //   }
  // ];


  // const handleQuantityChange = (product, quantity) => {
  //   return (
  //     <>

        
  //         <ShoppingCart products={products} onQuantityChange={handleQuantityChange} />
  //         <ReceiverInfo />
  //         <PaymentMethod />
  //         <button>Thanh toán</button>
       
      
  
  }

export default giohang;