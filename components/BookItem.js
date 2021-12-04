
import { useContext } from "react"
import { Col, Card,Button } from "react-bootstrap"
import ProductsContext from "../utils/BooksContext"

function ProductItem(props) {
  const { product,inProfile} = props
  const{ editProduct,deleteProduct}=useContext(ProductsContext)

  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text> Price:{product.price} SAR</Card.Text>
            <Card.Text> Quantity:{product.quantity}</Card.Text>
            <Button variant="info" id={product._id} onClick={editProduct}>
              Edit

            </Button>
            <Button className="ms-2" variant="danger" id={product._id} onClick={deleteProduct}>
             Delete

            </Button>



            
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ProductItem
