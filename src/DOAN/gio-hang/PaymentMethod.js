// components/PaymentMethod.js

function PaymentMethod() {
    return (
      <select>
        <option value="cod">COD</option>
        <option value="bank_transfer">Chuyển khoản ngân hàng</option>
        <option value="momo">Momo</option>
      </select>
    );
  }
  
  export default PaymentMethod;
  