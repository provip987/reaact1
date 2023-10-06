import '../bootstrap-5.2.3/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
function SanPham(props) {
    return (



        <div class="col-md-4" >
            <img src={props.data.hinh_anh} />
            <p>{props.data.ten}</p>
            <p><strong class="gia">Giá: {props.data.gia}</strong></p>
            <button><NavLink to="/xemchitiet">Xem Chi Tiết</NavLink></button>
            <button><NavLink to="/giohang">Chọn Mua</NavLink></button>
            <button>Thêm Vào Giỏ Hàng </button>
        </div>



    )
}
export default SanPham;