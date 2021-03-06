
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';





export default function UserForm() {

    const { register, handleSubmit, watch, formState: { errors , isSubmitted, isSubmitting ,  isSubmitSuccessful}, reset } = useForm();
    const onSubmit = async (data) => {
        let configPost = {
            method:"post",
            url:`api/sendform`,
            headers:{
                "Content-Type": "application/json"
            },
            data
            
        };
        try {
            const response = await axios (configPost);
            console.log(response)
          
            
        } catch (error) {
            console.log(error, "hubo un error")
        }
  
    };

    return (
    <div className="signupSection">
            
                <form className="signupForm" name="signupform" onSubmit={handleSubmit(onSubmit)}>
                { (!isSubmitting&&!isSubmitted) && (
                <Fade duration={2000} left><h2>CONTACTO</h2>
                    <ul className="noBullet">
                         <li>
                            <label htmlFor="name"></label>
                            <input
                                {...register('name',
                                    {
                                        required: {
                                            value: true,
                                            message: 'Queremos saber tu nombre!'
                                        },
                                        pattern:{
                                            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                                            message:"Tu nombre no puede contener numeros ni símbolos"
                                        }
                                        
                                    })}
                                type="text"
                                className="inputFields"
                                id="from_name"
                                placeholder="Nombre">
                            </input>
                            <div className="form_errors">{errors?.name?.message}</div>
                        </li>
                        <li>
                            <label htmlFor="phone"></label
                            >
                            <input  
                            {...register('phone',
                            {
                                required: {
                                    value: true,
                                    message: "Necesitamos tu telefono para contactarnos!"
                                }
                            })} 
                                type="name" 
                                className="inputFields" 
                                id="from_phone" 
                                placeholder="Telefono">
                                </input>
                                <div className="form_errors">{errors?.phone?.message}</div>
                                </li>
                                <li>
                            <label htmlFor="email"></label>
                            <input
                            {...register('email',
                            {
                                required: {
                                    value: true,
                                    message: "Ingresá tu mail para contactarte!"
                                },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i ,
                                    message: 'Ingresá un mail válido, por ejemplo "tunombre@tuempresa.com"'
                            }
                                
                            })}
                            type="email"    
                            className="inputFields" 
                            id="from_email" 
                            placeholder="Mail"> 
                            </input>
                            <div className="form_errors">{errors?.email?.message}</div>
                        </li>
                        <li>
                            <label htmlFor="message"></label>
                            <textarea
                             {...register('message')} 
                            className="inputFields" 
                            placeholder="Ponete en contacto con nosotros y hablemos de tu proyecto!" />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="ENVIAR" />
                        </li>
                    </ul>
                    </Fade>
                    )}
                    {isSubmitting && (
                        <Zoom>
                        <CircularProgress size ="10rem" color= "success" />
                        <h2>ENVIANDO...</h2>
                        </Zoom>
                    ) }
                     {isSubmitSuccessful && (
                     <Fade duration={2000} left>
                         <h2>YA RECIBIMOS TU MENSAJE!</h2>
                    </Fade>
                    )}
                    
                </form>
           
            <style jsx>{`



              .signupSection {
                  width: 100%;
                  text-align: center;
                  display: flex;
                  color: #2c2c2c;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                
                .signupForm {
                  display:flex;
                  width: 90%;
                  padding: 30px 0;
                  transition: 1s;
                  color: #2C2C2C;
                  flex-direction: column;
                  align-items:center;
                
                
                  
                }
                
                .signupForm h2{
                    text-align: center;
                    font-size: 3em;
                    font-family: 'Exo 2', sans-serif;
                    
                }   
                
                .inputFields {
                 
                  margin: 15px 0px;
                  font-size: 16px;
                  min-width: 100%;
                  padding:1.2rem;
                  border: 0.1rem solid #2C2C2C;
                  border-top: none;
                  border-left: none;
                  border-right: none;
                  color: rgb(0, 0, 0);
                  outline: none;
                  
                  
                }
                
                .inputFields:hover {
                  border-bottom: 0.2rem solid #42f934;
                
                }
                .inputFields:focus{
                  border-bottom: 2px solid #42f934;
                
                }
                .noBullet {
                  list-style-type: none;
                  padding: 0;
                  display:flex;
                  flex-direction:column;
                  width:70%;
              
                }
                .nobullet li{
                    display:flex;
                    flex-direction:column;
                   
                }
                #join-btn {
                  border: 2px solid #2c2c2c ;
                    font-size: 18px;
                    background: transparent;
                    font-weight:"700";
                
                  color: #2c2c2c;
                  margin-top: 20px;
                  padding: 10px 50px;
                  cursor: pointer;
                  transition: .4s;
                }
                #join-btn:hover {
                  padding: 10px 80px;
                  border: 2px solid #42f934;
                  color: #42f934;
                
                }

                .form_errors{
                    width:70%;
                    display:flex;
                    color:red;
                    font-size:0.7rem;
                }
`}</style>
        </div>
    )
}
