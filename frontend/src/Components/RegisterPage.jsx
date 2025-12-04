import FormComponent from "./FormComponent";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [postResponse, setPostResponse] = useState("");
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setFormData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value };
        });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post("http://localhost:3000/register", {...formData,}
            );
            setPostResponse(response.data.message);
            navigate("/");
        } catch (error) {
            setPostResponse(error.response.data.message || "Cannot register user");
        }
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleRegister();
        setFormData({ username: "", password: "" });
    };

    return (
        <div>
            <FormComponent
                formData={formData}
                handleOnSubmit={handleOnSubmit}
                postResponse={postResponse}
                handleOnChange={handleOnChange}
                currentPage="register"
                nextPage="login"
            />
        </div>
    );
}
