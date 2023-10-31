import axios from "axios";

var serverURL = "http://10.0.2.2:5000";
//var serverURL = "http://192.168.29.4:8081";

const getData = async (url) => {
  try {
    let headers = {};
    if (localStorage.getItem("TOKEN")) {
      headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
    }
    var response = await axios.get(`${serverURL}/${url}`, headers);
    var result = await response.data;

    return result;
  } catch (e) {
    if (e.response.status == 401) {
      localStorage.clear();
      window.location.replace("/loginpage");
    }
  }
};

const postData = async (url, body) => {
  try {
    alert(localStorage.getItem("TOKEN"));
    let headers = {};
    if (localStorage.getItem("TOKEN")) {
      headers = { headers: { Authorization: localStorage.getItem("TOKEN") } };
    }
    var response = await axios.post(`${serverURL}/${url}`, body, headers);
    var result = await response.data;

    return result;
  } catch (e) {
    if (e.response.status == 401) {
      localStorage.clear();
      window.location.replace("/loginpage");
    }
  }
};

export { serverURL, getData, postData };
