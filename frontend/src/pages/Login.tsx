import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const handleRedirect = async () => {
    try{
      navigate("/add")
    }catch(err:any){
      console.log(err)
    }
  };

  return (
    <div>
      <div>Click button to login</div>
      <button onClick={() => handleRedirect()}>login</button>
    </div>
  );
};

export default Login;
