import React, { useState,useEffect } from 'react'
import './CertificateGen.css'

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

function CertificateGen() {
  const [certificateSrc, setCertificateSrc] = useState()
  const data = {
    name: 'John Doe',
    age: 25,
    disease: 'Covid-19',
    todayDate: '12/12/2020',
    sinceDate: '11/12/2020',
    qr: '/templates/qr.png'
  }
  useEffect(() => {
    generateCertificate(data)
  },[])
  //Generating The PDF
  const generateCertificate = async ({ name, age, disease, qr, todayDate, sinceDate }) => { 
    const existingPdfBytes = await fetch("/templates/med-certificate.pdf").then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    // console.log(existingPdfBytes)
    //Enmbed the QR Code
    const qrBytes = await fetch(qr).then(res => res.arrayBuffer())
    const qrImage = await pdfDoc.embedPng(qrBytes)

    //Modifying the PDF
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    firstPage.drawText(name, {
      x: 200,
      y: height - 352,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    })
    firstPage.drawText(name, {
      x: 200,
      y: height - 395,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    })

    firstPage.drawText(`(${age} y.o)`, {
      x: 280,
      y: height - 352,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0), 
    })

    firstPage.drawText(sinceDate, {
      x: 150,
      y: height - 368,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0), 
    })

    firstPage.drawText(disease, {
      x: 110,
      y: height - 422,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0), 
    })
    firstPage.drawText(todayDate, {
      x: 80,
      y: height - 214,
      size: 11,
      font: helveticaFont,
      color: rgb(0, 0, 0), 
    })
    firstPage.drawImage(qrImage, {
      x: 190,
      y: height - 700,
      width: 150,
      height: 150,
    })
    //Saving the PDF
    const pdfBytes = await pdfDoc.save();
    const bytes  = new Uint8Array( pdfBytes ); 
    const blob   = new Blob( [ bytes ], { type: "application/pdf" } );
    const docUrl = URL.createObjectURL( blob );
    
    // console.log(docUrl)
    setCertificateSrc( docUrl )
    // console.log(certificateSrc)
  }
  return (
    <div className='pdf'>
        <iframe className="pdfFile" src={certificateSrc} type="application/pdf"></iframe>
    </div>
  )
}

export default CertificateGen