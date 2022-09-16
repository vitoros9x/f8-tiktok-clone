import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar className="" />
        <div className="content"></div>
      </div>
    </div>
  );
}

export default DefaultLayout;