import {
  faCheck,
  faInfo,
  faPen,
  faPlus,
  faSearch,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";

const reducer = (state, action) => {
  //Action: sửa loading thành true và chờ axios fetch data từ API
  if (action.type === "loading") return { ...state, loading: true };

  //Action : hiển thi toàn bộ sản phẩm sau khi load xong và trả loading về false
  if (action.type === "display")
    return { ...state, loading: false, proList: action.payload };
};

const Product = () => {
  const initState = {
    proList: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const fetchData = async () => {
    dispatch({ type: "loading" });
    await axios
      .get("https://dummyjson.com/products")
      .then((r) => dispatch({ type: "display", payload: r.data.products }));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Log khong ra duoc san pham
  console.log(state.proList);
  const { proList, loading } = state;
  return (
    <div>
      {loading ? (
        <h1 style={{ color: "black", marginTop: 200 }}>Loading...</h1>
      ) : (
        <div className="container" style={{ marginTop: 100, marginLeft: 100 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Mã số</th>
                <th>Tên SP</th>
                <th>Giá tiền</th>
                <th>Tồn kho</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {proList.map((item) => (
                <tr>
                  <td>
                    <img src={item.thumbnail} style={{ width: "100px" }} />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    <Button variant="info">
                      <FontAwesomeIcon icon={faInfo} />
                    </Button>
                    <Button variant="warning">
                      <FontAwesomeIcon icon={faPen} />
                    </Button>
                    <Button variant="danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Product;
