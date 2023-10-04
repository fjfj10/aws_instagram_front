import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        // 정의되어질때 값을 가지고와 중간에 값이 바뀌더라도 변하지 않음
        Authorization: !!localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : ""
    }
});

export default instance;