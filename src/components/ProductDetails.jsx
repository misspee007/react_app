import { useParams, useNavigate } from "react-router-dom"

const ProductDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  return (
    <div>
      <h1>productDetails - {id}</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default ProductDetails