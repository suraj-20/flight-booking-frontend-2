import React, { useState, useEffect } from "react";
import { MdContacts } from "react-icons/md";

const ContactForm = () => {
  const [updateFormData, setUpdateFormData] = useState({
    country: "India",
    state: "",
    city: "",
    pincode: "",
  });

  const [userDetails, setUserDetails] = useState("");

  const handleChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const updateUser = async () => {
    // console.log("User signed in", formData);
    try {
      if (localStorage.getItem("token")) {
        let responseData;
        console.log(process.env.REACT_APP_BASE_URL);
        await fetch(` http://localhost:8000/api/v1/user/updateInfo`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateFormData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error));

        // if (responseData.message) {
        //   localStorage.setItem("token", responseData.token);
        //   alert(responseData.message);
        //   window.location.replace("/login");
        // } else {
        //   alert(responseData.message);
        // }
      }
    } catch (error) {
      console.error("Error in user signed in.", error);
    }
  };

  // const updateUserDetails = (async) => {
  //   if (localStorage.getItem("token")) {
  //     updateFormData();
  //   }
  // };

  const fetchUserDetail = async () => {
    if (localStorage.getItem("token")) {
      fetchUserDetailApi();
    }
  };

  function fetchUserDetailApi() {
    try {
      fetch(`http://localhost:8000/api/v1/user`, {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserDetails(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Error in user Fetching.", error);
    }
  }

  useEffect(() => {
    fetchUserDetail();
  }, []);
  return (
    <div
      className="contact-information d-flex gap-2"
      style={{ padding: "1rem" }}
    >
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <MdContacts />
          Contact Information
        </h4>
      </div>
      <div className="passenger-details">
        <form
          onClick={() => {
            updateUser();
          }}
          className="passenger-form contact-form d-grid"
        >
          <div className="input-fields">
            <label htmlFor="">First Name *</label>
            <input type="text" name="" id="" value={userDetails.first_name} />
          </div>
          <div className="input-fields">
            <label htmlFor="">Last Name *</label>
            <input type="text" name="" id="" value={userDetails.last_name} />
          </div>
          <div className="input-fields">
            <label htmlFor="">Email Id *</label>
            <input type="email" name="" id="" value={userDetails.email} />
          </div>
          <div className="input-fields">
            <label htmlFor="country">Country</label>
            <select
              value={updateFormData.country}
              onChange={handleChange}
              name="country"
              id=""
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="input-fields">
            <label htmlFor="">State</label>
            <select
              value={updateFormData.state}
              onChange={handleChange}
              name="state"
              id=""
            >
              <option value="0"></option>
              <option value=" Andhra Pradesh"> Andhra Pradesh</option>
              <option value=" Arunachal Pradesh"> Arunachal Pradesh</option>
              <option value=" Assam"> Assam</option>
              <option value=" Bihar"> Bihar</option>
              <option value=" Chandigarh"> Chandigarh</option>
              <option value=" Chattisgarh"> Chattisgarh</option>
              <option value=" Daman and Diu"> Daman and Diu</option>
              <option value=" Delhi"> Delhi</option>
              <option value=" Goa"> Goa</option>
              <option value=" Gujarat"> Gujarat</option>
              <option value=" Haryana"> Haryana</option>
              <option value=" Himachal Pradesh"> Himachal Pradesh</option>
              <option value=" Jammu and Kashmir"> Jammu and Kashmir</option>
              <option value=" Jharkhand"> Jharkhand</option>
              <option value=" Karnataka"> Karnataka</option>
              <option value=" Kerala"> Kerala</option>
              <option value=" Ladakh"> Ladakh</option>
              <option value=" Lakshadweep"> Lakshadweep</option>
              <option value=" Madhya Pradesh"> Madhya Pradesh</option>
              <option value=" Maharashtra"> Maharashtra</option>
              <option value=" Manipur"> Manipur</option>
              <option value=" Meghalaya"> Meghalaya</option>
              <option value=" Mizoram"> Mizoram</option>
              <option value=" Nagaland"> Nagaland</option>
              <option value=" Rajasthan"> Rajasthan</option>
              <option value=" Sikkim"> Sikkim</option>
              <option value=" Tamil Nadu"> Tamil Nadu</option>
              <option value=" Telangana"> Telangana</option>
              <option value=" Tripura"> Tripura</option>
              <option value=" Uttar Pradesh"> Uttar Pradesh</option>
              <option value=" Uttarakhand"> Uttarakhand</option>
              <option value=" West Bengal"> West Bengal</option>{" "}
            </select>
          </div>
          <div className="input-fields">
            <label htmlFor="">City *</label>
            <input
              type="text"
              value={updateFormData.city}
              onChange={handleChange}
              name="city"
              id=""
            />
          </div>
          <div className="input-fields">
            <label htmlFor="">Pincode *</label>
            <input
              type="tel"
              value={updateFormData.pincode}
              onChange={handleChange}
              name="pincode"
              id=""
            />{" "}
          </div>
          <div className="input-fields">
            <label htmlFor="">Phone no. *</label>
            <input type="tel" name="" id="" value={userDetails.phone_number} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
