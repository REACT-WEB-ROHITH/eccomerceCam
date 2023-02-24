import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../componentsCss/SoloProductsBlock2.css";

function SoloProductsBlock2(props) {

    const dataa = props.data;
  const dName = props.dName;

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
  return (
    <>
    <div className="slider">
        <h2>{dName}</h2>
    </div>
      <Carousel responsive={responsive} >
        {dataa.map((cams) => (
              <div className="card card-dude" key={cams.id}>
                <img src={cams.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{cams.title}</h5>
                  <p className="card-text">{cams.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item">An item</li> */}
                </ul>
                {/* <div className="card-body">
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div> */}
              </div>
            ))}
      </Carousel>
      ;
    </>
  );
}

export default SoloProductsBlock2;
