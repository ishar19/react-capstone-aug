import { useState } from "react"
import 'react-capstone-aug-1/src/App.css';
export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        userName: "",
        termsAndConditions: false,
    })
      
    const [error, setError] = useState({
        name: false,
        email: false,
        mobile: false,
        userName: false,
        termsAndConditions: false,
    })
    const [borderColor, setBorderColor] = useState({
        name: "3px solid red",
        email: "3px solid red",
        mobile: "3px solid red",
        userName: "3px solid red",
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, userName, termsAndConditions } = formData;
    
        setError({
            name: false,
            email: false,
            mobile: false,
            userName: false,
            termsAndConditions: false,
        }); // reset error state
    
        const newBorderColor = { ...borderColor }; // Clone the current border colors
    
        if (name.trim().length === 0) {
            setError((prevState) => ({ ...prevState, name: true }));
            newBorderColor.name = "3px solid red";
        } else {
            newBorderColor.name = "3px solid green";
        }
    
        if (email.trim().length === 0) {
            setError((prevState) => ({ ...prevState, email: true }));
            newBorderColor.email = "3px solid red";
        } else {
            newBorderColor.email = "3px solid green";
        }
    
        if (mobile.trim().length === 0) {
            setError((prevState) => ({ ...prevState, mobile: true }));
            newBorderColor.mobile = "3px solid red";
        } else {
            newBorderColor.mobile = "3px solid green";
        }
    
        if (userName.trim().length === 0) {
            setError((prevState) => ({ ...prevState, userName: true }));
            newBorderColor.userName = "3px solid red";
        } else {
            newBorderColor.userName = "3px solid green";
        }
    
        setBorderColor(newBorderColor);
    
        if (termsAndConditions === false) {
            setError((prevState) => { return { ...prevState, termsAndConditions: true } })
        }
    }
    return (
        <div style={{textAlign:"center",height:"80%",width:"80%",margin:"10% auto"}}>
            <h1 style={{
                color: "green",fontFamily:"Single Day, cursive",fontSize:"3rem"
            }}>Super app</h1>
            <h3 style={{color:"white", fontFamily:"DM Sans",margin:"3%"}}>Create your new account</h3>
            <form style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                margin: "0 auto",
                gap: "10px",
            }}
                onSubmit={handleSubmit}
            >
                <input   style={{ border: borderColor.name }} className="input-style" placeholder="Name" type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
                {error.name && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>Name is required</p>}
                <input  style={{ border: borderColor.email }} className="input-style" placeholder="Email" type="text" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                {error.email && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>Email is required</p>}
                <input  style={{ border: borderColor.mobile }} className="input-style" placeholder="Mobile" type="text" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} value={formData.mobile} />
                {error.mobile && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}
                >Mobile is required</p>}
                <input  style={{ border: borderColor.userName }} className="input-style" placeholder="Username" type="text" onChange={(e) => setFormData({ ...formData, userName: e.target.value })} value={formData.userName} />
                {error.userName && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>Username is required</p>}
                <div style={{
                    display: "flex",
                    gap: "10px",
                }}>
                    <input id="checkbox" type="checkbox" onChange={(e) => setFormData({ ...formData, termsAndConditions: e.target.checked })} checked={formData.termsAndConditions} />
                    <label id="chkLabel" style={{
                        color: "white",
                        fontFamily:"DM Sans",
                        fontWeight:"400",
                        fontSize:"20.03px",
                        lineHeight:"27.98px",
                        letterSpacing:"0.02rem"
            
                    }} htmlFor="checkbox">Share my registration data with Superapp</label>
                </div>
                {error.termsAndConditions && <p style={{
                    color: "red",
                    fontSize: "12px",
                    margin: "0",
                }}>You must agree to the terms and conditions</p>}
                <button id="submitButton" className="submit-button"  type="submit">Sign Up</button>
            </form>
            <span style={{color:"white",width:"518px",fontFamily:"Roboto",fontWeight:"500"}}>By clicking on Sign up. You agree to Superapp <a style={{color:"green",textDecoration:"none"}} href="#">Terms and Conditions of Use</a></span><br /><br />
            <span style={{color:"white",width:"518px",fontFamily:"Roboto",fontWeight:"500"}}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a style={{color:"green",textDecoration:"none"}} href="#">Privacy Policy</a></span>
        </div>
    )
}

//HOMEWORK

// (mandatory)
// put image on left side of signup form
// on right side, match colors and texts for form

//(optional)
// find out what is a github pull request
