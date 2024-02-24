import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "react-bootstrap";
function Home() {
  let storeData=useSelector((store)=>{
   return store;
  })
  let loc = useLocation();
  useEffect(() => {
    console.log("Location data", loc);
    console.log("Store data", storeData)
  });
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage   src={`http://localhost:4444/${loc.state.profile}`}
                    alt="Avatar" className="my-5" style={{ width: 'auto' }} fluid />
                  <MDBTypography tag="h5" style={{color:'black'}}>{loc.state.firstName}</MDBTypography>
                  <MDBCardText style={{color:'black'}}>Software Developer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">{loc.state.city}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Postal Code</MDBTypography>
                        <MDBCardText className="text-muted">{loc.state.postalCode}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Contact</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{loc.state.userName}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
              <MDBRow>
           <Link to="/products" style={{textDecoration:"none"}}> <Button type="button">All Products</Button></Link>

        </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
    </section>
    </div>
  );
}

export default Home;
