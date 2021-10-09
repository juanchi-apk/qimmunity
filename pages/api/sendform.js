//import nodemailer from 'nodemailer'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const {name, phone, email, message} = req.body;

  

  /* const transporter =  nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth:{
      user:process.env.MAILUSER,
      pass:process.env.PASS
    }
  })

  transporter.verify().then(()=>console.log("anda todo")) */

 /*  try {
    const email = await transporter.sendMail({
      from: email, 
      to:'juanmanuelotero83@gmail.com',
      subject:`Un nuevo mensaje de ${name}`,
      html: `<h3>Tenes un nuevo mail de consulta de ${name}</h3>
            <h4>El telefono de contacto es ${phone}</h4>
            <h5>Y te dejo el siguiente mensaje</h5>
            <p>${message}</p>

      `
    })
  } catch (error) {
    
  } */





  res.status(200).json(req.body);
}
