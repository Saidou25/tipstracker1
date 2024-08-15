import { IoPower } from "react-icons/io5";
import TitleBox from "../components/TitleBox";

const Dashboard = () => {

  return (
    <div className="grad1">
     <IoPower className="on-off"  />
     <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
      </div>
    </div>
  );
};

export default Dashboard;


