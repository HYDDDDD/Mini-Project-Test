import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md mb-5">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src="https://www.up.ac.th/th/images/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%B0%E0%B9%80%E0%B8%A2%E0%B8%B2.png"
            alt="logo"
          />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container">
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

          <div className="col">
            <form action="">
              <p className="fs-4 fw-bold">แจ้งปัญหา</p>

              <span>ชื่อ-นามสกุล</span>
              <br />
              <input type="text" className="d-block my-2" />

              <span>หอพัก</span>
              <br />
              <input type="text" className="d-block my-2" />

              <span>ห้องพัก</span>
              <br />
              <input type="text" className="d-block my-2" />

              <span>รูปภาพสิ่งของชำรุด</span>
              <br />
              <input type="file" className="d-block my-2" />

              <span>แจ้งรายละเอียดปัญหา</span>
              <br />
              <textarea name="" id="" cols="75" rows="5"></textarea>

              <button type="button" className="btn btn-primary">
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
