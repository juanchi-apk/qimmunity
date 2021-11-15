import nodemailer from 'nodemailer'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function(req, res) {
  const {name, phone, email, message} = req.body;

  

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth:{
      user:env.MAILUSER,
      pass:env.PASS
    }
  })

    await new Promise((resolve, reject)=>{
      transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("The server is ready");
            resolve(success);
        }
    });
    })

    const maildata= {
      from: `${email}`, 
      to:'juanmanuelotero83@gmail.com',
      subject:`Un nuevo mensaje de ${name}`,
      html: `<h3>Tenes un nuevo mail de consulta de ${name}</h3>
            <h4>El telefono de contacto es ${phone}</h4>
            <h5>Y te dejo el siguiente mensaje</h5>
            <p>${message}</p>
 
      `

    }

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(maildata, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });
  
  res.status(200).json({ status: "OK" });
}
