import React, { useEffect, useState } from "react";
import "../componentsCss/ProductView.css";

function ProductView(props) {
  //  const obj={title:"Loading...",id:"Loading...",description:"Loading...",url:"Loading"}
  const goWell=props.goWell;
  const [obj,setObj]=useState({title:"Loading...",id:"Loading...",description:"Loading...",url:"Loading"});
  // console.log(obj);
  // const [pin,setpin]=useState(11);

  
 

  useEffect(()=>{
    let turtle=JSON.parse(localStorage.getItem("proBlock"));
    turtle!==null?setObj(turtle):setObj({title:"Loading...",id:"Loading...",description:"Loading...",url:"Loading"});
    // console.log(turtle);
    // console.log(`In product view ${goWell}`);
  },[goWell]);
  

  const totalBox=document.querySelector(".contDim");
  const fullBox=document.querySelector(".visible");

    const makeMeInvisible=()=>{
      totalBox.classList.toggle("invisible");
      fullBox.classList.toggle("invisible");  
    }
  
  return (
    <>
      <div className="container-fluid contDim invisible">
        <div className="row rowDim">
          <div className="col-2"><button className="btn-back" onClick={makeMeInvisible}>BACK</button></div>
          <div className="col-8 posiDude">{obj.title}</div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-1">Data</div>
          <div className="col-12 col-lg-5 col-md-12 col-sm-12 imgDim">
            <img src={obj.url} className="img-fluid" alt="..." />
          </div>
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 dataBoxDim">
            <div className="row dataDim">
              <div className="col-12">
                <div className="container text-left">
                  <div className="row soloDim">
                    <div className="col">PRODUCT-NAME</div>
                    <div className="col">:{obj.title}</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="container text-left">
                  <div className="row soloDim">
                    <div className="col">PRODUCT-ID</div>
                    <div className="col">:{obj.id}</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="container text-left">
                  <div className="row soloDim">
                    <div className="col">PRODUCT-DESCRIPTION</div>
                    <div className="col">:{obj.description}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6"><button className="btn-cartp">CART</button></div>
                <div className="col-6"><button className="btn-buyp">BUY</button></div>
              </div>
            </div>
          </div>
          <div className="col-2">Data</div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
