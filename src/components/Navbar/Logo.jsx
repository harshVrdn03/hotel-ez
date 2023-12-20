import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Logo() {
  return (
    <div className="flex items-center ">
      <Link to="/">
        <img
          src={logo}
          alt="log"
          style={{
            width: "85px",
          }}
        />
      </Link>
    </div>
  );
}
