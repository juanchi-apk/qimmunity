import '../styles/globals.css';
import Navbar from '../components/Navbar/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { fetchStrapi } from './api/hidratation'
import App from "next/app";
import {createContext} from "react";


export const GlobalContext = createContext({})






function MyApp({ Component, pageProps }) {
  const {navbar} = pageProps;

  return ( 
  <>


  <Navbar navbar ={navbar} />
  <Component {...pageProps} />


  </>
  )
}

MyApp.getInitialProps = async(ctx)=>{
  const appProps = await App.getInitialProps(ctx);
  const navbar = await fetchStrapi("/prodpages");

  return{...appProps, pageProps:{navbar}}

  }




export default MyApp
