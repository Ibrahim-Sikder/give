import { TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddDonarMutation } from "../../redux/feature/donar/donarApi";

const DonateForm = () => {
  const [addDonar] = useAddDonarMutation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const handlSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const donarInfo = {
      firstName,
      lastName,
      phone,
      email,
      country,
      city,
      website,
      company,
      postalCode,
    };
    console.log(donarInfo);
    addDonar(donarInfo);

    navigate("/dashboard/dashboard");
  };

  return (
    <div className=" flex items-center py-8 px-10">
      <div className="w-full">
        <h2 className="text-center text-[#42A1DA] font-bold text-2xl uppercase mb-5">
          "Gift of Giving"
        </h2>
        <div>
          <form onSubmit={handlSubmit}>
            <div className="mt-3">
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <TextField
                    onBlur={(e) => setFirstName(e.target.value)}
                    name="firstName"
                    className="donationField"
                    label="First Name"
                  />
                  <TextField
                    onBlur={(e) => setLastName(e.target.value)}
                    name="lastName"
                    className="donationField"
                    label="Last Name "
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <TextField
                    onBlur={(e) => setEmail(e.target.value)}
                    name="email"
                    className="donationField"
                    label="Email"
                  />
                  <TextField
                    onBlur={(e) => setPhone(e.target.value)}
                    name="phone"
                    className="donationField"
                    label="Phone Number"
                    type="number"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <TextField
                    onBlur={(e) => setCompany(e.target.value)}
                    name="company"
                    className="donationField"
                    label="Company/Organization"
                  />
                  <TextField
                    onBlur={(e) => setWebsite(e.target.value)}
                    name="website"
                    className="donationField"
                    label="Website Address "
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <TextField
                    onBlur={(e) => setCountry(e.target.value)}
                    name="country"
                    className="donationField"
                    label="Country"
                  />
                  <TextField
                    onBlur={(e) => setCity(e.target.value)}
                    name="city"
                    className="donationField"
                    label="City"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <TextField
                    onBlur={(e) => setPostalCode(e.target.value)}
                    name="postalCode"
                    className="donationField"
                    label="Postal Code "
                  />
                </div>
              </div>
            </div>

            <button
              className="btn mt-5 px-8 py-3 text-white w-full flex justify-center"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
