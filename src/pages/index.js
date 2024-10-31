import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
  Button,
  ButtonGroup,
  StyledInput,
  HelperText,
  FormControl,
  Label,
}from "@mui/material";
import Link from "next/link";
import Sobre from "./Sobre";
import Contato from "./Contato";
import RedeemIcon from '@mui/icons-material/Redeem';
import SignInSide from "./pastateste/SignInSide";


export default function Home() {

  const styles = {
    intro: {
      backgroundImage: 'url(img/BackgroundVermelho.png)',
      height: '100vh', 
      paddingTop: '2%',
    },

    navigator: {
      background: "rgba(255,255,255,0.2)", 
      display:"flex",
      alignItems: "center",
      borderRadius: "30px",
      padding: "10px 0px",
      justifyContent: "center",
      fontSize: "15px",
      border: "2px solid white",
      maxWidth:"85%",
      margin: "0% 15%",
      gap: "16vh"
    },

    Logo:{
      display:"flex", 
      gap:"2vh",
    },

    buttonNav: {
      color:'white', 
      background:"none",
      border:"none",
      fontFamily:'Poppins', 
      fontSize:'16px',
      textTransform: "none",
    },

    conecte: {
      backgroundColor: 'green', 
      color:'white', 
      fontFamily:'Poppins',
      fontSize:'16px',
      textTransform: "none",
      width: "15Vh",
    },

    noel: {
      fontFamily:'Pacifico', 
      fontSize:'20px',
      alignItens: "center",
      alignContent: "center",
    },

    buttonsTitle: {
      backgroundColor: '#CFBD2E', 
      color:'white', 
      fontFamily:'Poppins', 
      fontSize:'17px',
      marginLeft: "10vh", 
      height:"8vh",
      width: "35vh",
      textTransform: "none",
    },

    gruopBottonsTitle: {
      display:'flex',
      gap:'2vh',
      height:"15vh",  
    },

    title: {
      fontSize:'13vh', 
      fontFamily:'Pacifico',
      marginLeft: "8%", 
      lineHeight: "17vh",
    },

    groupTitle: {
      maxWidth:'85%',
      display: "flex",
      flexDirection: "column",
      gap: "7vh",
    },

    noelGroup: {
      display: 'Flex', 
      justifyContent:'center', 
      gap:'12%',
      maxWidth:"85%",
      margin: "0% 15%",
      alignItems: "center",
      marginTop: "8vh",
    },
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* O HTML vai dentro desta <div></div> */}
      <div style={styles.intro}> 

        <nav style={styles.navigator}>
          <div style={styles.Logo}>
            <RedeemIcon/> 
            <h3 style={styles.noel}>Papai Noel</h3>
          </div> 
          <ButtonGroup  style={styles.Logo} variant="text" aria-label="Basic button group">
          <Link href="/Sobre" passHref><Button style={styles.buttonNav} variant="contained">Sobre</Button></Link>
            <Link href="/Pedido" passHref><Button style={styles.buttonNav} variant="contained">Faça um pedido</Button></Link>
            <Link href="/Apadrinhamento" passHref><Button style={styles.buttonNav} variant="contained">Apadrinhar</Button></Link>
          </ButtonGroup>
          <ButtonGroup style={styles.Logo} variant="text" aria-label="Basic button group">
            <Link href="/Cadastro" passHref><Button style={styles.buttonNav} variant="contained">Cadastra-se</Button></Link>
            <Link href="./pastateste/SignInSide" passHref><Button style={styles.conecte} variant="contained">Login</Button></Link>
          </ButtonGroup>
        </nav>

        <span style={styles.noelGroup}>
          <div style={styles.groupTitle}>
            <p style={styles.title}>Neste natal, faça a alegria de uma criança!</p>
            <div style={styles.gruopBottonsTitle}>
              <Link href="/Apadrinhamento" passHref><Button style={styles.buttonsTitle}  variant="contained" sx={{transition: 'transform 0.3s','&:hover': {transform: 'scale(1.1)',},}}>Apadrinhar</Button></Link>
              <Link href="/Pedido" passHref><Button style={styles.buttonsTitle}  variant="contained" sx={{transition: 'transform 0.3s','&:hover': {transform: 'scale(1.1)',},}}>Faça um pedido</Button></Link>
            </div>
          </div>
          <img src="./img/papai.png" alt="Descrição da imagem" className="minha-imagem"/>
        </span>

      </div>

      <Sobre/>
      <Contato/>
    </>
  );
}