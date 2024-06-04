const updateInfoApiCall = async (updateFormData, setUpdateFormData) => {
  try {
    if (localStorage.getItem("token")) {
      // console.log(process.env.REACT_APP_BASE_URL);
      await fetch(` http://localhost:8000/api/v1/user/updateInfo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updateFormData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUpdateFormData(data?.updatedUser);
        })
        .catch((error) => console.log(error));
    }
  } catch (error) {
    console.error("Error in user signed in.", error);
  }
};

const addPassengers = async (passengerDetails, setPassengerDetails) => {
  // console.log("User signed in", formData);
  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    let obj = {
      passengers: passengerDetails,
    };
    if (localStorage.getItem("token")) {
      await fetch(` http://localhost:8000/api/v1/addPassengerDetails`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => {
          // setPassengerDetails(data);
          console.log({ data });
        })
        .catch((error) => console.log(error));
    }
  } catch (error) {
    console.error("Error in user signed in.", error);
  }
};

module.exports = { updateInfoApiCall, addPassengers };
