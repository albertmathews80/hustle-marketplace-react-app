import classes from './Invoice.module.css'
import Hustle from '../../images/Hustle-logo.png'
import payment1 from "../../images/paymentcard1.png"
import payment2 from "../../images/paymentcard2.png"
import payment3 from "../../images/paymentcard3.png"
import payment4 from "../../images/paymentcard4.png"
import payment5 from "../../images/paymentcard5.png"
import downloadPDF from "../../images/downloadPDF.png"
import printPDF from "../../images/printPDF.png"
import Pdf from "react-to-pdf";
import { createRef, useRef } from 'react'
import ReactToPrint from 'react-to-print';


const Invoice = () => {
    // const ref = createRef()
    const ref = useRef();
    return (
        <div className={classes.container}>
            <div ref={ref}  className={classes.pdfContainer}>

                <div className={classes.top}>
                    <div className={classes.logo}>
                        <img src={Hustle} width='100' alt="" />
                    </div>
                    <div className={classes.invoiceNumber}>
                        <h3>Invoice</h3>
                        <div>#Inv-bill-AZB001</div>
                    </div>
                </div>

                <div className={classes.mainText}>Lorem ipsum dolor sot amet, comnsec
                    addosping abiyt aukt
                </div>

                <div className={classes.address}>
                    <div className={classes.customer}>
                        <div className={classes.type}>Customer</div>
                        <div className={classes.name}>Jhon Doe</div>
                        <div className={classes.street}>
                            <div>2608 Ritter Avenue Denver, Ca 4612</div>
                            <div>Phone: 11-2233446678</div>
                            <div>Email: Customer@gmail.com</div>
                        </div>
                    </div>
                    <div className={classes.provider}>
                        <div className={classes.type}>Service provider</div>
                        <div className={classes.name}>Express Service Agency</div>
                        <div className={classes.street}>
                            <div>2608 Ritter Avenue Denver, Ca 4612</div>
                            <div>Phone: 11-2233446678</div>
                            <div>Email: Customer@gmail.com</div>
                        </div>
                    </div>

                </div>

                <div className={classes.summaryContainer}>
                    <div className={classes.summaryHeading}>
                        Booking Summery
                    </div>
                    {/* table */}
                    <div className={classes.tableHeadings}>
                        <div className={classes.Desc}>
                            Description
                        </div>
                        <div className={classes.Cost}>
                            Cost
                        </div>
                        <div className={classes.Quantity}>
                            QTY
                        </div>
                        <div className={classes.Amount}>
                            Amount
                        </div>
                    </div>
                    <div className={classes.italic}>
                        Package Services
                    </div>

                    <div className={classes.tableRows}>
                        <div className={classes.Desc}>
                            Bed Room
                        </div>
                        <div className={classes.Cost}>
                            $30
                        </div>
                        <div className={classes.Quantity}>
                            03
                        </div>
                        <div className={classes.Amount}>
                            $90
                        </div>
                    </div>

                    <div className={classes.tableRows}>
                        <div className={classes.Desc}>
                            Bed Room
                        </div>
                        <div className={classes.Cost}>
                            $30
                        </div>
                        <div className={classes.Quantity}>
                            03
                        </div>
                        <div className={classes.Amount}>
                            $90
                        </div>
                    </div>
                    <div className={classes.italic}>
                        Add On Services
                    </div>
                    <div className={classes.tableRows}>
                        <div className={classes.Desc}>
                            Kitchen
                        </div>
                        <div className={classes.Cost}>
                            $30
                        </div>
                        <div className={classes.Quantity}>
                            02
                        </div>
                        <div className={classes.Amount}>
                            $30
                        </div>
                    </div>
                    <div className={classes.tableRows} style={{ marginBottom: "5%" }}>
                        <div className={classes.Desc}>
                            Fridge
                        </div>
                        <div className={classes.Cost}>
                            $20
                        </div>
                        <div className={classes.Quantity}>
                            02
                        </div>
                        <div className={classes.Amount}>
                            $40
                        </div>
                    </div>

                    {/* Payments */}

                    <div className={classes.finalRows}>
                        <div className={classes.Desc}>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="payment" id="cards" />&nbsp;<span>Cash Payment</span>
                            </div>
                        </div>
                        <div className={classes.Cost}>
                        </div>
                        <div className={classes.Quantity}>

                        </div>
                        <div className={classes.Amount}>
                            <span className={classes.first}> Sub Total</span>
                            <span className={classes.prices}>$278</span>

                        </div>
                    </div>

                    <div className={classes.finalRows}>
                        <div className={classes.Desc}>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="payment" id="cards" />&nbsp;
                                <img src={payment1} alt="" />
                                <img src={payment2} alt="" />
                                <img src={payment3} alt="" />
                                <img src={payment4} alt="" />
                                <img src={payment5} alt="" />
                            </div>

                        </div>
                        <div className={classes.Cost}>
                        </div>
                        <div className={classes.Quantity}>

                        </div>
                        <div className={classes.Amount}>
                            <span className={classes.first}> Tax +15%</span>
                            <span className={classes.prices}>$32</span>

                        </div>
                    </div>

                    <div className={classes.finalRows}>
                        <div className={classes.Desc}>
                        </div>
                        <div className={classes.Cost}>
                        </div>
                        <div className={classes.Quantity}>
                        </div>
                        <div className={classes.Amount}>
                            <span>Total</span>
                            <span className={classes.lastPrice}>$322</span>
                        </div>
                    </div>



                </div>

            </div>
            <div className={classes.buttons}>
                <div className={classes.arrowBtn}>{'->'} </div>
                <div className={classes.print}>
                    <ReactToPrint
                        trigger={() => <button className={classes.printBtn}><img src={printPDF} alt="" /></button>}
                        content={() => ref.current }
                    />
                </div>
                <Pdf targetRef={ref} filename="invoice.pdf">
                    {({ toPdf }) => <button className={classes.downloadBtn} onClick={toPdf}> <img src={downloadPDF} alt="" /> Download PDF</button>}
                </Pdf>
            </div>
        </div>
    )
}

export default Invoice