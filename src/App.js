import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [customer, setCustomer] = useState({
    name: "",
    dormName: "",
    room: "",
    details: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newReport = {
        report: {
          name: customer.name,
          dormName: customer.dormName,
          room: customer.room,
          details: customer.details,
        },
        image: image,
      };

      const formData = new FormData();
      formData.append('report', JSON.stringify(newReport.report));
      formData.append('image', newReport.image);

      const response = await axios.post(
        `http://localhost:8080/report`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  };

  // const handleValidation = () => {
  //   if (customer.name === "") {
  //     alert("กรุณากรอกชื่อของคุณ.");
  //     return false;
  //   } else if (customer.dormName === "") {
  //     alert("กรุณากรอกชื่อหอพัก.");
  //     return false;
  //   } else if (customer.room === "") {
  //     alert("กรุณากรอกห้องพัก.");
  //     return false;
  //   } else if (customer.details === "") {
  //     alert("กรุณาแจ้งรายละเอียดปัญหา.");
  //     return false;
  //   }

  //   return true;
  // };

  return (
    <div>
      <nav className="navbar navbar-expand-md mb-5">
        <div className="container-fluid">
          <img
            src="https://upload.wikimedia.org/wikipedia/th/thumb/0/00/University_of_Phayao_Logo.svg/1200px-University_of_Phayao_Logo.svg.png"
            alt="Logo"
            width={50}
            className="d-inline-block align-text-top"
          />
          <p className="text-center text-light fw-bold me-auto mb-2 mb-lg-1">
            มหาวิทยาลัยพะเยา <br /> University of Phayao
          </p>
          <form className="d-flex " role="search">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light fw-bold rounded-pill" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="c1 container">
        <div className="row">
          <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
            <svg
              className="bd-placeholder-img rounded-circle d-block "
              style={{ width: "140px", height: "140px" }}
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <button type="button" className="btn btn-light d-block my-3">
              ชื่อ-นามสกุล
            </button>
            <button type="button" className="btn btn-light d-block my-3">
              รหัสนิสิต
            </button>
            <button type="button" className="btn btn-light d-block my-3">
              ชั้นปี
            </button>
          </div>

          <div className="c2 col">
            <form onSubmit={handleSubmit}>
              <p className="bordertext fs-4 fw-bold text-center ">แจ้งปัญหา</p>

              <span>ชื่อ-นามสกุล</span>
              <br />
              <input
                type="text"
                className="d-block my-2 rounded-pill"
                maxLength="25"
                value={customer.name}
                onChange={(event) => {
                  let regex = /^[a-zA-Zก-๏\s]+$/;
                  if (
                    event.target.value === "" ||
                    regex.test(event.target.value)
                  ) {
                    setCustomer({ ...customer, name: event.target.value });
                  }
                }
              }
              required
              />

              <span>หอพัก</span>
              <br />
              <input
                type="text"
                className="d-block my-2 rounded-pill"
                maxLength="15"
                value={customer.dormName}
                onChange={(event) => {
                  let regex = /^[a-zA-Zก-๏0-9\s]+$/;
                  if (
                    event.target.value === "" ||
                    regex.test(event.target.value)
                  ) {
                    setCustomer({ ...customer, dormName: event.target.value });
                  }
                }}
                required
              />

              <span>ห้องพัก</span>
              <br />
              <input
                type="text"
                className="d-block my-2 rounded-pill "
                maxLength="3"
                value={customer.room}
                onChange={(event) => {
                  let regex = /^[0-9\b]+$/;
                  if (
                    event.target.value === "" ||
                    regex.test(event.target.value)
                  ) {
                    setCustomer({ ...customer, room: event.target.value });
                  }
                }}
                required
              />

              <span>รูปภาพสิ่งของชำรุด</span>
              <br />
              <input type="file" className="b1 d-block my-2 rounded "
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }} 
                required/>

              <span>แจ้งรายละเอียดปัญหา</span>
              <br />
              <textarea
                className="rounded"
                name=""
                id=""
                cols="75"
                rows="5"
                value={customer.details}
                onChange={(event) => {
                  setCustomer({ ...customer, details: event.target.value });
                }}
                required
              ></textarea>
              <br />
              <button
                type="submit"
                className="btn btn-light"
              >
                ยืนยัน
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;