import { TextField } from "@mui/material";
import "./Register.css";
import google from "../../assets/images/google.png";
import { FaFacebookF } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useSetRegisterMutation } from "../../redux/feature/auth/authApi";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate()
	const [setRegister, {isSuccess}] = useSetRegisterMutation()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data:FieldValues) => {
	const {name, email, password } = data
	const userInfo = {
		name,
		email,
		password
	}
    setRegister(userInfo)
    reset()
  


  };
  if (isSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Register successfully !",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/login')
  }

  return (
    <div className="">
      <div className="signupWrap">
        <h3 className="text-3xl font-bold text-center mb-5  capitalize">
          Create a AidUrgency Account{" "}
        </h3>

        <form className="SignupFormWrap" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex items-center mt-5">
              <TextField
                {...register("name")}
                className="signupInput"
                label="User Name "
                id="name"
                size="small"
              />
            </div>
            <div className="flex items-center mt-5">
              <TextField
                {...register("email")}
                className="signupInput"
                label="Email Address "
                id="email"
                size="small"
              />
            </div>
            <div className="flex items-center my-5">
              <TextField
                {...register("password")}
                className="signupInput"
                label="Password "
                id="password"
                size="small"
              />
            </div>
            <small className="block w-[300px] mb-5">
              By Creating an account, you agree to our User Agreement and
              acknowledge reading our User Privacy Notice .
            </small>
            <button type="submit" className="signupBtn bg-[#00715D] text-white ">
              Create Account{" "}
            </button>
          </div>
          <div className="devider">
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div>
          <div className="lg:mt-0 mt-5    ">
            <button className="signupBtn mb-5 text-black  ">
              <img className="w-10 h-10" src={google} alt="" />{" "}
              <span>Continoue With Google </span>{" "}
            </button>
            <button className="signupBtn bg-[#3F63AB] text-white ">
              <FaFacebookF className="mr-5" size={25} />{" "}
              <span>Continoue With Facebook </span>{" "}
            </button>
            <span className="mt-3 block ">
              Already a member? <Link to="/login">Sing In </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
