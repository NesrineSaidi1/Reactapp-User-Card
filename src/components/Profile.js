import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="row py-5 px-4">
      {" "}
      <div className="col-md-5 mx-auto">
        {" "}
        {/* Profile widget */}{" "}
        <div className="bg-white shadow rounded overflow-hidden">
          {" "}
          <div className="px-4 pt-0 pb-4 cover">
            {" "}
            <div className="media align-items-end profile-head">
              {" "}
              <div className="profile mr-3">
                <img
                  src="https://lh3.googleusercontent.com/R7JhSgbjYEVmgC1Q45XLbry7ZmZsa-4Vvy4DLhPL-_P_yuh2rqBORbFjJbVMcm2Yz6xk1JbNBa6v_SvduUtc0t2n6CibdE5Nx3AYAGqIJsDfzlAYse3CHr7QOAF6PrIooG_hekS5xIDb2I2RfCjc8Kf8FVb7WkaLNyMzu_y6BH0TJQuc4j0J_EoSZrCQXh3jv-KYdzknWgPdZWJhif6WaGCd5DGuGvNLNMJswsEFATAt0AAlLrPFaPjZ8RvuDqPjh0PWfKQHnOyFon825NaIdJmrnqdMFTBgvLqd89pcrCrMNtOON6E2QvxRp8oNwRqpXghaqyqHHYbG5ZYPRpfiydi-1sGdrYsP8jfPz5wCZV-E3bgKujOFuPID-VjZDQgDH6GbuONLxNKAGwEt9X_zf60rIDaqqmGLtzEd9MGtyIdST1CVOyVDSiPGTCkqhaEj9uRSKatTlysx3ocl5_qZ8FLZC4jXOg5vEps7ZLQFxUQWSg3UoxiT_SOH1wMMeg_M2pBHDD2U_Q2WkI3ToiHT54FBS-WqqON1ZB1jUNTfN90llI1EZ3KK4iKJJ_UVaCL63rM9ehVWTd-3eVdO4jW-R46MDbOJqL3ZH8YUq1MbDO-MBvmNxOy72XgClUXk0_ohPLXm-tsi4jAwXwGpUJv3OUvyIZq6FKzQsSb1Frib6Kvas3_DgYAqq8i8QUB5PgXenZ7MiKvuJjH15bJSKdZ_TbpEsYii2k5_G5GMtymynlORrRe3eaagp7gAXDTODaOBUr8QfVPa1Libkt8WrCTF1i7EaIz14pKfT7erzyhhoah1V0NYSzs0wVC_OfGDc451v2vu_QQbtYmgT8SqA3VEShdnkZsSdEgEmuPnBi7nnXGnGR0YIieWew5Scc5-x2loc0ltROGxKhbE8HVDUioEyBsCRfbHutHnqOd53JCPuBKkZWDB=w324-h643-no?authuser=0"
                  alt="..."
                  className="rounded mb-2 img-thumbnail"
                  width={130}
                />
                <a href="#" className="btn btn-outline-dark btn-sm btn-block">
                  Edit profile
                </a>
              </div>{" "}
              <div className="media-body mb-5 text-white">
                {" "}
                <h4 className="mt-0 mb-0">Nesrine Saidi</h4>{" "}
                <p className="small mb-4">
                  {" "}
                  <i className="fas fa-map-marker-alt mr-2" />
                  Tunisia
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-light p-4 d-flex justify-content-end text-center">
            {" "}
            <ul className="list-inline mb-0">
              {" "}
              <li className="list-inline-item">
                {" "}
                <h5 className="font-weight-bold mb-0 d-block">215</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fas fa-image mr-1" />
                  Photos
                </small>{" "}
              </li>{" "}
              <li className="list-inline-item">
                {" "}
                <h5 className="font-weight-bold mb-0 d-block">745</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fas fa-user mr-1" />
                  Followers
                </small>{" "}
              </li>{" "}
              <li className="list-inline-item">
                {" "}
                <h5 className="font-weight-bold mb-0 d-block">340</h5>
                <small className="text-muted">
                  {" "}
                  <i className="fas fa-user mr-1" />
                  Following
                </small>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="px-4 py-3">
            {" "}
            <h5 className="mb-0">About</h5>{" "}
            <div className="p-4 rounded shadow-sm bg-light">
              {" "}
              <p className="font-italic mb-0">Web Developer</p>{" "}
              <p className="font-italic mb-0">Lives in Tunisia</p>{" "}
              <p className="font-italic mb-0">Process Technician</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="py-4 px-4">
            {" "}
            <div className="d-flex align-items-center justify-content-between mb-3">
              {" "}
              <h5 className="mb-0">Recent photos</h5>
              <a href="#" className="btn btn-link text-muted">
                Show all
              </a>{" "}
            </div>{" "}
            <div className="row">
              {" "}
              <div className="col-lg-6 mb-2 pr-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>{" "}
              <div className="col-lg-6 mb-2 pl-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>{" "}
              <div className="col-lg-6 pr-lg-1 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>{" "}
              <div className="col-lg-6 pl-lg-1">
                <img
                  src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                  className="img-fluid rounded shadow-sm"
                />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Profile;
