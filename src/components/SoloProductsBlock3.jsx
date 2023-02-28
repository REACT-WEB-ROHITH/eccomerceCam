import React, { useEffect } from "react";
import "../componentsCss/SoloProductsBlock3.css";

function SoloProductsBlock3(props) {
  const dataDude = props.data;
  const dataName = props.dName;

  useEffect(()=>{
    dataDude.forEach((promo)=>{
         let valHolder=`<div className="card" style={{ width: "18rem" }} key={${promo.id}}>
         <img src="${promo.url}" className="card-img-top dark" alt="..." />
         <div className="card-body">
           <h5 className="card-title">${promo.title}</h5>
           <p className="card-text">${promo.description}</p>
         </div>
         <ul className="list-group list-group-flush">
           <li className="list-group-item">An item</li>
           <li className="list-group-item">A second item</li>
           <li className="list-group-item">A third item</li>
         </ul>
         <div className="card-body">
         <div className="container-fluid">
         <div className="row">
           <div className="col-6"><button className="btn-cart">CART</button></div>
           <div className="col-6"><button className="btn-buy">BUY</button></div>
         </div>
       </div>
         </div>
       </div>`;
         document.querySelectorAll(".item").innerHTML+=valHolder;

        
      });
      const cartMe=document.querySelectorAll(".btn-cart");
      for(let i=0;i<cartMe.length;i++)
      {
        cartMe[i].addEventListener("click",()=>{
            console.log(i);
        });
      }
     

  },[dataDude])
  return (
    <>
      <div className="slider">
        <h2>{dataName}</h2>
        <div className="slider-inner">
          <div className="item"></div>
        </div>
      </div>
    </>
  );
}

export default SoloProductsBlock3;
