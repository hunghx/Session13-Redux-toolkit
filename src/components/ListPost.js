import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSlice } from "../redux/reducers/postSlice";

export const ListPost = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const listPost = useSelector((state) => state.list);
  const totalPage = [];
  for (let i = 1; i <= Math.ceil(listPost.length / 10); i++) {
    totalPage.push(i);
  }
  console.log(totalPage);
  const handlePageChange = (id) => {
    setPage(id);
  };
  const listPage = listPost.filter(
    (p, index) => index >= 10 * (page - 1) && index <= 10 * page - 1
  );

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(postSlice.actions.getList(res.data)));
  }, []);
  return (
    <div>
      <h1>Danh sach cac bai viet</h1>
      {listPage.map((page) => (
        <div key={page.id}>
          <p>{page.userId}</p>
          <span>{page.id}</span>
          <p>{page.title}</p>
          <p>{page.body}</p>
          <br />
        </div>
      ))}

      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          {totalPage.map(i=> (
            <li class={page===i?"active page-item":"page-item"} onClick={()=>handlePageChange(i)}>
              <a class="page-link" href="#">
                {i}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
