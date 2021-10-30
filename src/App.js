import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import Axios from "axios";
import Header from '../src/components/Header';

 const App = () => {

     const handleClickRegister = (values) => {
         Axios.post("https://localhost:3001/register", {
             email: values.email,
             password: values.password,
         }).then((response) => {
             console.log(response);
         });
         console.log("erro")
     };


    const handleClickLogin = (values) => {
       console.log("a") 
    };
    const validadtionLogin = yup.object().shape({
        email: yup
        .string()
        .email("Não é um email valido!")
        .required("Este campo é obrigatório!"),
        password: yup
        .string()
        .min(8, "A senha deve conter no mínino 8 caracteres")
        .required("Este campo é obrigatório!"),
    });

 
    const validadtionRegister = yup.object().shape({
        email: yup
            .string()
            .email("Não é um email valido!")
            .required("Este campo é obrigatório!"),
        password: yup
            .string()
            .min(8, "A senha deve conter no mínino 8 caracteres")
            .required("Este campo é obrigatório!"),

        confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas não são iguais!"),
    });

    return (
        
        <>
            <Header />
        <div className="container">
            
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validadtionLogin} >
               
               
                <section className="login-cont">
                  
                    <Form className="login-form">
                        
                        <div className="login-form-group">
                            <span>Login</span>
                        
                            <Field name="email" className="form-field-email" placeholder="Email" />
                            <ErrorMessage component="span" name="email" className="form-error" />
                        </div>
                        
                        <div className="login-form-group" >
                            <Field name="password" className="form-field" placeHolder="Senha" />
                            <ErrorMessage component="span" name="password" className="form-error" />
                        </div>
                        <button className="button"  type="submit">Login</button>
                    </Form>
                </section>

            </Formik>


            
            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validadtionRegister} >


                <section className="login-cont" >
                    
                    <Form className="login-form">
                       
                        <div className="login-form-group">
                            <span>Cadastrar</span>
                            <Field name="email" className="form-field-email" placeholder="Email" />
                            <ErrorMessage component="span" name="email" className="form-error" />
                        </div>
                        <div className="login-form-group">
                            <Field name="password" className="form-field" placeHolder="Senha" />
                            <ErrorMessage component="span" name="password" className="form-error" />
                        </div>
                        <div className="login-form-group">
                            <Field name="confirmPassword" className="form-field" placeHolder="Confirmar Senha" />
                            <ErrorMessage component="span" name="confirmPassword" className="form-error" />
                        </div>
                        <button className="button-2" type="submit">Cadastrar</button>
             

                </Form>

                </section>

            </Formik>
            


        </div>
        </>
    )
};

export default App;