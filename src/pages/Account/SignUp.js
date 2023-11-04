// import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { logoLight } from "../../assets/images";

// const SignUp = () => {
//   // ============= Initial State Start here =============
//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [zip, setZip] = useState("");
//   const [checked, setChecked] = useState(false);
//   // ============= Initial State End here ===============
//   // ============= Error Msg Start here =================
//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPhone, setErrPhone] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [errAddress, setErrAddress] = useState("");
//   const [errCity, setErrCity] = useState("");
//   const [errCountry, setErrCountry] = useState("");
//   const [errZip, setErrZip] = useState("");
//   // ============= Error Msg End here ===================
//   const [successMsg, setSuccessMsg] = useState("");
//   // ============= Event Handler Start here =============
//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };
//   const handlePhone = (e) => {
//     setPhone(e.target.value);
//     setErrPhone("");
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };
//   const handleAddress = (e) => {
//     setAddress(e.target.value);
//     setErrAddress("");
//   };
//   const handleCity = (e) => {
//     setCity(e.target.value);
//     setErrCity("");
//   };
//   const handleCountry = (e) => {
//     setCountry(e.target.value);
//     setErrCountry("");
//   };
//   const handleZip = (e) => {
//     setZip(e.target.value);
//     setErrZip("");
//   };
//   // ============= Event Handler End here ===============
//   // ================= Email Validation start here =============
//   const EmailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
//   };
//   // ================= Email Validation End here ===============

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (checked) {
//       if (!clientName) {
//         setErrClientName("Enter your name");
//       }
//       if (!email) {
//         setErrEmail("Enter your email");
//       } else {
//         if (!EmailValidation(email)) {
//           setErrEmail("Enter a Valid email");
//         }
//       }
//       if (!phone) {
//         setErrPhone("Enter your phone number");
//       }
//       if (!password) {
//         setErrPassword("Create a password");
//       } else {
//         if (password.length < 6) {
//           setErrPassword("Passwords must be at least 6 characters");
//         }
//       }
//       if (!address) {
//         setErrAddress("Enter your address");
//       }
//       if (!city) {
//         setErrCity("Enter your city name");
//       }
//       if (!country) {
//         setErrCountry("Enter the country you are residing");
//       }
//       if (!zip) {
//         setErrZip("Enter the zip code of your area");
//       }
//       // ============== Getting the value ==============
//       if (
//         clientName &&
//         email &&
//         EmailValidation(email) &&
//         password &&
//         password.length >= 6 &&
//         address &&
//         city &&
//         country &&
//         zip
//       ) {
//         setSuccessMsg(
//           `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
//         );
//         setClientName("");
//         setEmail("");
//         setPhone("");
//         setPassword("");
//         setAddress("");
//         setCity("");
//         setCountry("");
//         setZip("");
//       }
//     }
//   };
//   return (
//     <div className="w-full h-screen flex items-center justify-start">
//       <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
//         <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
//           <Link to="/">
//             <img src={logoLight} alt="logoImg" className="w-28" />
//           </Link>
//           <div className="flex flex-col gap-1 -mt-1">
//             <h1 className="font-titleFont text-xl font-medium">
//               Get started for free
//             </h1>
//             <p className="text-base">Create your account to access more</p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Get started fast with OREBI
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Access all OREBI services
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Trusted by online Shoppers
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="flex items-center justify-between mt-10">
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               © OREBI
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Terms
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Privacy
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Security
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
//         {successMsg ? (
//           <div className="w-[500px]">
//             <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
//               {successMsg}
//             </p>
//             <Link to="/signin">
//               <button
//                 className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
//             tracking-wide hover:bg-black hover:text-white duration-300"
//               >
//                 Sign in
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
//             <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
//               <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
//                 Create your account
//               </h1>
//               <div className="flex flex-col gap-3">
//                 {/* client name */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Full Name
//                   </p>
//                   <input
//                     onChange={handleName}
//                     value={clientName}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="eg. John Doe"
//                   />
//                   {errClientName && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errClientName}
//                     </p>
//                   )}
//                 </div>
//                 {/* Email */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Work Email
//                   </p>
//                   <input
//                     onChange={handleEmail}
//                     value={email}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="email"
//                     placeholder="john@workemail.com"
//                   />
//                   {errEmail && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errEmail}
//                     </p>
//                   )}
//                 </div>
//                 {/* Phone Number */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Phone Number
//                   </p>
//                   <input
//                     onChange={handlePhone}
//                     value={phone}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="008801234567891"
//                   />
//                   {errPhone && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPhone}
//                     </p>
//                   )}
//                 </div>
//                 {/* Password */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Password
//                   </p>
//                   <input
//                     onChange={handlePassword}
//                     value={password}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="password"
//                     placeholder="Create password"
//                   />
//                   {errPassword && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPassword}
//                     </p>
//                   )}
//                 </div>
//                 {/* Address */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Address
//                   </p>
//                   <input
//                     onChange={handleAddress}
//                     value={address}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="road-001, house-115, example area"
//                   />
//                   {errAddress && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errAddress}
//                     </p>
//                   )}
//                 </div>
//                 {/* City */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     City
//                   </p>
//                   <input
//                     onChange={handleCity}
//                     value={city}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="Your city"
//                   />
//                   {errCity && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errCity}
//                     </p>
//                   )}
//                 </div>
//                 {/* Country */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Country
//                   </p>
//                   <input
//                     onChange={handleCountry}
//                     value={country}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="Your country"
//                   />
//                   {errCountry && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errCountry}
//                     </p>
//                   )}
//                 </div>
//                 {/* Zip code */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Zip/Postal code
//                   </p>
//                   <input
//                     onChange={handleZip}
//                     value={zip}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="Your country"
//                   />
//                   {errZip && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errZip}
//                     </p>
//                   )}
//                 </div>
//                 {/* Checkbox */}
//                 <div className="flex items-start mdl:items-center gap-2">
//                   <input
//                     onChange={() => setChecked(!checked)}
//                     className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
//                     type="checkbox"
//                   />
//                   <p className="text-sm text-primeColor">
//                     I agree to the OREBI{" "}
//                     <span className="text-blue-500">Terms of Service </span>and{" "}
//                     <span className="text-blue-500">Privacy Policy</span>.
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleSignUp}
//                   className={`${
//                     checked
//                       ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
//                       : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
//                   } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
//                 >
//                   Create Account
//                 </button>
//                 <p className="text-sm text-center font-titleFont font-medium">
//                   Don't have an Account?{" "}
//                   <Link to="/signin">
//                     <span className="hover:text-blue-600 duration-300">
//                       Sign in
//                     </span>
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUp;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import 'font-awesome/css/font-awesome.min.css'; 
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert('Please fill in all fields'); 
//       return;
//     }

//     try {
//       const response = await fetch('/coachlog', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('token', data.token);
   
//         alert('Login Successfully');
//         navigate('/cart');
//       } else {
//         alert('Invalid username or password'); 
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred during login.'); 
//     }
//   };

//   const containerStyle = {
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundImage: `url('https://https://png.pngtree.com/back_origin_pic/05/11/41/8d2e0a20c7a97d3ef88e0c068010a1c2.jpg')`,
//     backgroundSize: 'cover',
//   };

//   const cardStyle = {
//     borderRadius: '1rem',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
//     width: '400px',
//     minHeight: '300px',
//     padding: '2rem',
//     color: 'black',
//   };

//   const inputContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: '1rem',
//   };

//   const inputStyle = {
//     padding: '1rem',
//     fontSize: '1rem',
//     border: '1px solid black',
//     borderRadius: '0.25rem',
//     width: '100%',
//   };

//   const iconStyle = {
//     marginRight: '10px',
//     fontSize: '1rem',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '1rem',
//     fontSize: '1rem',
//     backgroundColor: 'black',
//     color: 'white',
//     borderRadius: '0.25rem',
//     border: 'none',
//     cursor: 'pointer',
//   };
// return (
//     <div style={containerStyle}>
//       <div style={cardStyle}>
//         <div className="col-md-12">
//           <h3 className="card-title text-center">
//             <img
//               src="https://i.pinimg.com/originals/e2/70/98/e27098f3ae364ea87075f808623fb5b1.png"
//               alt="Logo"
//               width="100"
//             />
//           </h3>
//           <form onSubmit={handleLogin} className="login">
//             <div style={inputContainerStyle}>
//               <i className="fa fa-envelope" style={iconStyle}></i>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 style={inputStyle}
//                 required
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div style={inputContainerStyle}>
//               <i className="fa fa-lock" style={iconStyle}></i>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 style={inputStyle}
//                 required
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                 />{' '}
//                 Remember Me
//               </label>
//             </div>
           
//             <div className="mb-3 text-center">
//               <button style={buttonStyle} type="submit">
//                 Login
//               </button>
//             </div>
//             <p className="text-center">
//               Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
const Signup = () => {
  const containerStyle = {
  
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundImage: `url('https://img.freepik.com/free-photo/solid-gray-concrete-textured-wall_53876-110803.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais')`, // Set the background image here
  backgroundSize: 'cover', 
  
  };

  const cardStyle = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '530px',
    width: '500px',
    borderRadius: '1rem 0 0 1rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ' 2rem',
    color: 'black',
  };

  const boxStyle = {
    border: '1px solid #ccc',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '900px',
    height: '750px',
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  };

  const buttonStyle = {
    width: '80%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            firstName,
            lastName,
          }),
        });

        if (response.ok) {
          
          alert('Registration Successfully');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div className="card" style={cardStyle}>
          <div className="col-md-6 col-lg-7 d-none d-md-block">
            <img
              src="https://i.pinimg.com/originals/e2/70/98/e27098f3ae364ea87075f808623fb5b1.png"

              alt="signup form"
              className="img-fluid"
              style={imageStyle}
            />
          </div>
          <div className="col-md-7 col-lg-5 d-flex align-items-center">
            <div style={formStyle}>
              <form onSubmit={handleSignup} className="signup">
                <div className="mb-4">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    style={inputStyle}
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    style={inputStyle}
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    style={inputStyle}
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={inputStyle}
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    style={inputStyle}
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="pt-1 mb-4">
                  <button style={buttonStyle} type="submit">
                    Sign Up
                  </button><br/><br/>
                  <p>Already have an account? <Link to="/signin">Login</Link></p>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;






