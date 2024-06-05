const updateInfoApiCall = async (
  updateFormData,
  setUpdateFormData,
  setAlert
) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/user/updateInfo`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(updateFormData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setUpdateFormData(responseData?.updatedUser);
        setAlert({
          message: "Data submitted successfully " + responseData.message,
          type: "success",
          visible: true,
        });
      } else {
        setAlert({
          message: responseData.message,
          type: "error",
          visible: true,
        });
      }
    }
  } catch (error) {
    console.error("Error in updating user info.", error);
    setAlert({
      message: "An error occurred while updating the information.",
      type: "error",
      visible: true,
    });
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
      await fetch(` ${process.env.REACT_APP_BASE_URL}/api/v1/addPassengerDetails`, {
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
