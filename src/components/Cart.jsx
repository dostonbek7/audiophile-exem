import { useSelector } from "react-redux";

function Cart() {
  const { allProduct } = useSelector((store) => store.product);

  if (allProduct) {
    return <h1>You don't have ant product</h1>;
  }
  return (
    <div className="absolute top-[200px] right-[100px] bg-white">
      <ul>
        {allProduct &&
          allProduct.map((prod) => {
            return <li>
              <img src={prod.name} alt="" />
            </li>;
          })}
      </ul>
    </div>
  );
}

export default Cart;
