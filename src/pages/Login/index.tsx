import { TextField } from "@mui/material";
import { FaFacebookF } from "react-icons/fa6";
import google from "../../assets/images/google.png";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess }] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    const userInfo = {
      email,
      password,
    };

   const res = await login(userInfo).unwrap();
   console.log(res.token)
   const user = verifyToken(res.token)
   
        console.log(user)
       dispatch(setUser({email:res.email, token: res.token}))

  };
  if (isSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login successfully !",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  }

  return (
    <div>
      <div className="signupWrap">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-center mb-5  capitalize">
            Hello
          </h3>
          <span>
            Sign In AidUrgency or{" "}
          <Link to='/register'>  <small className="border-b-2 border-[#00715D]">create an account </small></Link>
          </span>
        </div>
        <form className="businessFormWrap" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <TextField
              {...register("email")}
              id="email"
              className="businessInput"
              label="Email "
              size="small"
            />
          </div>
          <div className="mb-5">
            <TextField
              {...register("password")}
              id="password"
              className="businessInput"
              label="Password "
              size="small"
            />
          </div>
          <button
            type="submit"
            className="signupBtn loginBtn bg-[#00715D] text-white businessBtn"
          >
            Login{" "}
          </button>
          <div className="flex flex-col my-3 w-[320px] border-opacity-50">
            <div className="divider">OR</div>
          </div>
          <div>
            <button className="signupBtn loginBtn mb-5 text-black  ">
              <img className="w-10 h-10" src={google} alt="" />{" "}
              <span>Continoue With Google </span>{" "}
            </button>
            <button className="signupBtn loginBtn bg-[#3F63AB] text-white ">
              <FaFacebookF className="mr-5" size={25} />{" "}
              <span>Continoue With Facebook </span>{" "}
            </button>
          </div>
          <div className="text-center w-[300px] mx-auto  mt-3">
            <div className="flex justify-center items-center">
              <input className="mr-2" type="checkbox" />
              <span>Stay signed in</span>
            </div>
            <span className="block mx-auto w-[250px]">
              {" "}
              Using a public or shared device? Uncheck to protect your account.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
