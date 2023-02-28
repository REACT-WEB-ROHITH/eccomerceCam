import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../componentsCss/SoloProductsBlock2.css";

function SoloProductsBlock2(props) {

    const dataa = props.data;
  const dName = props.dName;

  const onClickMe=props.onClickMe;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1700 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    xmobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
      },
  };

  const totalBox=document.querySelector(".contDim");
  const fullBox=document.querySelector(".visible");
  

  const addToCart=(e)=>
  {

    let proBlock=
    {
      title:e.title,
      url:e.url,
      id:e.id,
      description:e.description
    }
    // console.log(e);
   
    
    
    localStorage.setItem("proBlock",JSON.stringify(proBlock));
    proBlock={};
    totalBox.classList.toggle("invisible");
    fullBox.classList.toggle("invisible");

    onClickMe(e);

   
  }

  return (
    <>
    <div className="slider">
        <h2>{dName}</h2>
    </div>
      <Carousel responsive={responsive} >
        {dataa.map((cams) => (
              <div className="card card-dude" key={cams.id}>
                <img src={cams.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{cams.title}</h5>
                  <p className="card-text">{cams.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">SELLER:{cams.id}</li>
                </ul>
                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6"><button className="btn-cart" onClick={()=>{addToCart(cams)}}>VIEW</button></div>
                      <div className="col-6"><button className="btn-buy">BUY</button></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </Carousel>
      ;
    </>
  );
}

export default SoloProductsBlock2;
