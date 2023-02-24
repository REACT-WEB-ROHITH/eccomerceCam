import React from "react";
import "../componentsCss/SoloProductsBlock.css";

function SoloProductsBlock(props) {
  const dataa = props.data;
  const dName = props.dName;

  // Queryselecters
  // let slider=document.querySelector(".slider");
  let sliderInner=document.querySelector(".slider-inner");

  // Functions for the pressing
  const pressPre=()=>{
    console.log("pre pressed !!!");
    console.log(dName);
    let width=sliderInner.clientWidth;
    sliderInner.scrollLeft=sliderInner.scrollLeft-width;
    console.log(width);
  }
  const pressNex=()=>{
    console.log("nex pressed !!!");
    let width=sliderInner.clientWidth;
    sliderInner.scrollLeft=sliderInner.scrollLeft+width;
    console.log(width);
  }

  // console.log(dataa);
  return (
    <>
      <div className="slider">
        <h2>{dName}</h2>
        <div className="slider-inner">
          <div className="item">
            {dataa.map((cams) => (
              <div className="card" style={{ width: "18rem" }} key={cams.id}>
                <img src={cams.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{cams.title}</h5>
                  <p className="card-text">{cams.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <button onClick={pressPre}>P</button>
            </div>
            <div className="col-6">
              <button onClick={pressNex}>N</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoloProductsBlock;
