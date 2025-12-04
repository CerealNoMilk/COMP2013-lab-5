import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";

export default function LogInPage() {
    //states
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [postResponse, setPostResponse] = useState("");

    //nacigate
    const navigate = useNavigate();

    //handlers
    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value };
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/login", {...formData,});
            setPostResponse(response.data.message);
            if (response.status === 200) {
                Cookies.set("jwt-authorization", response.data.token);
                Cookies.set("username", formData.username);
                navigate("/private");
            }
        } catch (error) {
            setPostResponse(error.response.data.message);
        }
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        setFormData({ username: "", password: "" });
    };
      
    return (
        <div>
            <FormComponent
                formData={formData}
                handleOnSubmit={handleOnSubmit}
                postResponse={postResponse}
                handleOnChange={handleOnChange}
                currentPage="login"
                nextPage="register"
                />
        </div>
    );      
    }
        