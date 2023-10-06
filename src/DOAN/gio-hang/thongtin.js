

function Thongtin() {
    return (
        <>
            <div className="receiver-info">
                <input type="text" placeholder="Họ tên" />
                <input type="tel" placeholder="Số điện thoại" />
                <input type="text" placeholder="Địa chỉ" />

                <div>
                    <label>Hình thức thanh toán:</label>
                    <select>
                        <option value="cod">COD</option>
                        <option value="bank_transfer">Chuyển khoản ngân hàng</option>
                        <option value="momo">Momo</option>
                    </select>
                </div>
                <button>Thanh toán</button>
            </div>
        </>
    );
}
export default Thongtin;