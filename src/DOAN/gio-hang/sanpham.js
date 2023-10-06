
function Sanpham({ products, onQuantityChange }) {
    return (


        <>
            <h1>Giỏ hàng</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sản Phẩm 1</td>
                        <td>$20.00</td>
                        <td><input type="number" value="1" /></td>
                        <td>$20.00</td>
                        <td>
                            <button class="delete-button">Xóa</button>
                            <button class="update-button">Cập nhật</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sản Phẩm 2</td>
                        <td>$30.00</td>
                        <td><input type="number" value="1" /></td>
                        <td>$30.00</td>
                        <td>
                            <button class="delete-button">Xóa</button>
                            <button class="update-button">Cập nhật</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <label htmlFor="thanhtoan">HÌNH THỨC THANH TOÁN</label>
            <select>
                <option value="cod">COD</option>
                <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                <option value="momo">Momo</option>
            </select>
            <div className="recipient-info">
                        <h2>Thông tin người nhận hàng</h2>
                        <form>
                            <label htmlFor="full-name">Họ tên:</label>
                            <input type="text" id="full-name" name="full-name" required /><br />

                            <label htmlFor="phone">Điện thoại:</label>
                            <input type="tel" id="phone" name="phone" required /><br />

                            <label htmlFor="address">Địa chỉ:</label>
                            <textarea id="address" name="address" required></textarea>
                        </form>
                    </div>

            <div class="cart-actions">
                <button id="continue-shopping">Tiếp tục mua hàng</button>
                <button id="checkout">Thanh toán</button>
            </div>


            <script src="script.js"></script>
        </>);
}
export default Sanpham;