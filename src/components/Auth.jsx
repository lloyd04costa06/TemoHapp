import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignUpSchema from "../schema/SignUpSchema";
import SignInSchema from "../schema/SignInSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ImageAuth from "../assets/auth-line.svg"

function Auth(props) {
    const { title } = props;
    const navigate = useNavigate()
    const [isSignup, setIsSignup] = useState(false);

    useEffect(() => {
        document.title = title || "Auth"
    }, [])

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
      };

    const handleSubmit = (values) => {        
        console.log(values)        
    }    

    return (
        <div className="bg-login-bg text-white min-h-screen">
            <div className="text-white pb-20">
                <div className="w-11/12 md:w-[60vw] mx-auto pt-8">                    
                    <div className='mx-auto mt-8'>                        
                        <Formik initialValues={{ name: "", email: "", phoneNumber: "",  password: "", confirmpassword: "" }} validationSchema={isSignup? SignUpSchema : SignInSchema} onSubmit={(values) => handleSubmit(values)}>
                        {({ touched, errors, isSubmitting, values }) => (
                                <Form className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl py-3 mx-auto w-5/6 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg">
                                    <h3 className='uppercase text-3xl md:text-5xl text-center text-orange-600' style={{ 'fontFamily': 'MangoGrotesque' }}>{isSignup ? "SIGN UP" : "SIGN IN"}</h3>
                                    <div className="text-center">
                                    {isSignup
                                        ? "Already Have an Account? "
                                        : "Don't Have an Account? "}
                                    <span
                                        onClick={switchMode}
                                        className="text-primary cursor-mode"
                                    >
                                        {isSignup ? "SIGN IN" : "SIGN UP"}
                                    </span>
                                    </div>
                                    {isSignup && (
                                    <div className='leading-8 flex flex-col w-11/12 md:w-3/5 mx-auto'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>First Name</label>
                                        <Field type="text" name="name" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="name"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>)}
                                    <div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Email</label>
                                        <Field type="email" name="email" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="email"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>
                                    {isSignup && (
                                    <div className='flex flex-col leading-8 mx-auto w-11/12 md:w-3/5 mt-2'>
                                        <label className='py-2 text-2xl tracking-wider' style={{ 'fontFamily': 'MangoGrotesque' }}>Phone Number</label>
                                        <Field type="tel" name="phoneNumber" className="border border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="phoneNumber"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>)}
                                    <div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Password</label>
                                        <Field type="password" name="password" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="password"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>
                                    {isSignup && (
                                    <div className='flex flex-col leading-8 w-11/12 md:w-3/5 mx-auto mt-2'>
                                        <label className="py-2 text-2xl tracking-wider" style={{ 'fontFamily': 'MangoGrotesque' }}>Confirm Password</label>
                                        <Field type="password" name="confirmpassword" className="border-white px-2 py-1 text-white h-9 leading-10 border-l-0 border-r-0 border-t-0 border-b bg-transparent text-sm" style={{ 'fontFamily': 'Merriweather' }} />
                                        <ErrorMessage 
                                            component="div"
                                            name="confirmpassword"
                                            className="text-red-500 text-sm mt-2"
                                        />
                                    </div>
                                    )}

                                    {!isSignup && <div className="text-center my-5">                                     
                                    <span
                                        // onClick={}
                                        className="text-primary cursor-mode"
                                    >
                                        Forgot password?
                                    </span>
                                    </div> 
                                    }

                                    <button type="submit" className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>{isSignup ? "SIGN UP" : "SIGN IN"}</span></button>

                                    <div className="flex justify-center relative h-8 my-8 px-5">
                                    <img
                                        src={ImageAuth}
                                        fill
                                        alt="Event Image"
                                        className="object-contain"
                                    />
                                    </div>      

                                    <button type="submit" className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-6 md:mb-0 mx-auto my-4'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>Google</span></button>                              
                                </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth