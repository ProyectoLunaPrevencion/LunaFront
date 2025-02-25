import { useEffect, useState, useContext } from "react";
import logo from "../../assets/images/logo-virgen-del-carmen.webp";
import { getUserById } from "../../services/authService";
import { AccessContext } from "../../main";

export default function Header() {
  const { user } = useContext(AccessContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (user && user.id) {
          const userData = await getUserById(user.id);
          console.log("Datos usuario: ", userData);
          setUserName(userData.nombre);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserName();
  }, [user]);

  return (
    <div className="divHeader">
      <div className="divLogo">
        <img className="imgLogo" src={logo} alt="Logo Develmatch" />
      </div>
      <div className="userNameDiv">
        {userName && <p className="userName">{userName}</p>}
      </div>
    </div>
  );
}
