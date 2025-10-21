// we are placing it outside of home cuz this component is useful in multiple are than just home(footer present in every page)
import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
        <div className="container border-top mt-5">
      <div className="row mt-5 ">
        <div className="col">
          <img src="media/images/logo.svg " style={{ width: "50%" }} />
            <p style={{fontSize:"14px"}}>&copy; 2010-2025, Not Zerodha Broking Ltd. All right reserved</p>

            <div className="text-muted"  style={{ width: "100%", height: "40px", display: "flex", alignItems: "center", gap: "15px" }}>
                <i className="mr-2" class="fa fa-facebook-official " aria-hidden="true"></i>
                <i className="mr-3" class="fa fa-twitter" aria-hidden="true"></i>
                <i className="mr-3" class="fa fa-instagram" aria-hidden="true"></i>
                <i className="mr-3" class="fa fa-telegram" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>

        </div>
        <div className="col">
          <p>Company</p>

          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            About
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Products
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Pricing
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Referral programme
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Careers
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Press & media
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Zerodha cares (CSR)
          </a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>

          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Contact
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Support portal
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Z-Connect blog
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            List of charges
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Downloads & resources
          </a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>

          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Open an account
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            Fund transfer
          </a>
          <br />
          <a className="text-muted" href="" style={{ textDecoration: "none" }}>
            60 day challenge
          </a>
          <br />
        </div>
      </div>

      <div className="mt-5 text-muted" style={{fontSize:"14px"}}>
        <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
      </div>
      <div  style={{width:"100%" , display:"flex", justifyContent:"space-evenly" ,}}> 
        <a className="text-muted" href="#" style={{textDecoration:"none"}}>NSE​</a>
        <a className="text-muted" href="#"  style={{textDecoration:"none"}}>BSE</a>
        <a className="text-muted" href="#"  style={{textDecoration:"none"}}>MCX</a>
        <a className="text-muted" href="#"  style={{textDecoration:"none"}}>Terms & conditions</a>
        <a className="text-muted" href="#"  style={{textDecoration:"none"}}>Policies & procedures</a>
        <a className="text-muted" href="#"  style={{textDecoration:"none"}}>Privacy policy</a>
        <a className="text-muted" href="#"  style={{textDecoration:"none"}}>Disclosure</a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
