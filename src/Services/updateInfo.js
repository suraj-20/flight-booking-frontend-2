const updateInfoApiCall = async (updateFormData,setUpdateFormData) => {
    try {
        if (localStorage.getItem("token")) {
          console.log(process.env.REACT_APP_BASE_URL);
          await fetch(` http://localhost:8000/api/v1/user/updateInfo`, {
            method: "PUT",
            headers: {
        
              "Content-Type": "application/json",
              "Authorization":`${localStorage.getItem("token")}`
            },
            body: JSON.stringify(updateFormData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              setUpdateFormData(data?.updatedUser)
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
}


module.exports = {updateInfoApiCall}