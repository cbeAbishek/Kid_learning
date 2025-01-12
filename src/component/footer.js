import React from "react";
import { MDBContainer,MDBFooter } from "mdbreact";
import './footer.css';

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small footer">      
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Created with ❤️ by <a href="#" rel="noreferrer" target="_blank"> Thanishka</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;