import PDFDocument from "pdfkit"
import blobStream from "blob-stream";

class PDFGenerator {
  PDFDocument;

  constructor() {}

  generateInvoiceHeaders(doc, user) {
    doc
      .image("./assets/logo.png", 50, 60, { width: 150 })
      .fillColor("#000")
      .fontSize(20)
      .text("RECEIPT", 275, 50, { align: "right" })
      .fontSize(8)
      .text(`Invoice Num:BKR-${Date.parse(new Date())}`, {
        align: "right",
      })
      .text(`Customer:${user.firstName + " " + user.lastName}`, {
        align: "right",
      })
      .text(`Date:${new Date().toDateString()}`, {
        align: "right",
      })

      .moveDown()
      .font("Helvetica-Bold")
      .text(`Amount Paid: $11.29`, { align: "right" })
      .font("Helvetica")
      .moveDown()
      .text(`Billing Address:\n${user.address}\n${user.province}`, {
        align: "right",
      });

    const beginningOfPage = 50;
    const endOfPage = 550;

    doc.moveTo(beginningOfPage, 200).lineTo(endOfPage, 200).stroke();

    doc.y = 210;
    doc.text(
      `The value covered in this invoice refers to a membership plan to book keepers platform, for more information please refer to our contact page.`,
      50,
      doc.y
    );
    doc.text(`Thank you for choosing to be a gold member. Happy reading`, 50);

    doc.moveTo(beginningOfPage, 250).lineTo(endOfPage, 250).stroke();
  }

  generateInvoiceTable(doc, user) {
    const tableTop = 270;
    const covTypeX = 50;
    const covDescriptionX = 180;
    const covWorthX = 360;
    const covPriceX = 480;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
    });
    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text("Subscription Type", covTypeX, tableTop, { bold: true })
      .text("Subscription Description", covDescriptionX, tableTop, {
        bold: true,
      })
      // .text('Coverage Worth', covWorthX, tableTop, { bold: true })
      .text("Price", covPriceX, tableTop, { bold: true });
    // .text('Amount', amountX, tableTop)
    const y = tableTop + 35;
    doc
      .fontSize(10)
      .font("Helvetica")
      .text("Gold", covTypeX, y)
      .text("Subscribe to gold status on Book Keepers", covDescriptionX, y)
      // .text(`$ ${item.coverage_worth}`, covWorthX, y)
      .text(`${formatter.format(parseFloat(9.99))}`, covPriceX, y);

    doc.moveDown().moveDown();
    doc.moveDown().moveDown();

    let tp_line = doc.y;
    doc
      .font("Helvetica-Bold")
      .text("Total Price", covWorthX)
      .font("Helvetica")
      .text(`${formatter.format(9.99)}`, covPriceX, tp_line);

    doc.moveDown();
    tp_line = doc.y;
    doc
      .font("Helvetica-Bold")
      .text("Discounts", covWorthX)
      .font("Helvetica")
      .text(`${formatter.format(0.0)}`, covPriceX, tp_line);

    doc.moveDown();
    tp_line = doc.y;
    doc
      .font("Helvetica-Bold")
      .text("Taxes", covWorthX)
      .font("Helvetica")
      .text(`${formatter.format(1.3)}`, covPriceX, tp_line);

    doc.moveDown();
    tp_line = doc.y;
    doc

      .font("Helvetica-Bold")
      .text("Final Price", covWorthX)
      .text(
        `${formatter.format(parseFloat(9.99) + parseFloat(1.3))}`,
        covPriceX,
        tp_line
      );
  }

  generateInvoiceFooter(doc) {
    doc.fontSize(10).text(`Payment Confirmation. `, 50, 700, {
      align: "center",
    });
  }

  generateInvoice(user, pdfname) {
    let doc = new PDFDocument();

    //let buffers = [];
    //doc.pipe(res);
    const stream = doc.pipe(blobStream());

    // doc.on("data", buffers.push.bind(buffers));
    // doc.on("end", () => {
    //   let pdfData = Buffer.concat(buffers);

    //   res
    //     .writeHead(200, {
    //       "Content-Length": Buffer.byteLength(pdfData),
    //       "Content-Type": "application/pdf",
    //       "Content-disposition": `attachment;filename=${pdfname}.pdf`,
    //     })
    //     .end(pdfData);
    // });

    this.generateInvoiceHeaders(doc, user);

    doc.moveDown();

    this.generateInvoiceTable(doc, user);

    this.generateInvoiceFooter(doc);

    doc.end();
    stream.on("finish", function () {
      // get a blob you can do whatever you like with
      const blob = stream.toBlob("application/pdf");

      // or get a blob URL for display in the browser
      const url = stream.toBlobURL("application/pdf");
      return url
    });
  }
}

export default PDFGenerator;
