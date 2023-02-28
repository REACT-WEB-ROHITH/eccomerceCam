import React from 'react'
// import SoloProductsBlock from './SoloProductsBlock';
import SoloProductsBlock2 from './SoloProductsBlock2';


function AllProductsBlock(props) {
    const set1=props.first;
    const set2=props.second;
    const set3=props.third;
    const set4=props.fourth;
   

    // The names from api
// 
    const one=props.one;
    const two=props.two;
    const three=props.three;
    const four=props.four;

    // console.log("All products "+getVal());

    // console.log(one+two+three+four);
    // console.log(props.first);
   
    const onClickMe=props.onClickMe;
 



  return (
   <>
   {/* <SoloProductsBlock data={set1} dName={one}/>
   <SoloProductsBlock data={set2} dName={two}/>
   <SoloProductsBlock data={set3} dName={three}/>
   <SoloProductsBlock data={set4} dName={four}/> */}

   <SoloProductsBlock2 data={set1} dName={one}  onClickMe={onClickMe} />
   <SoloProductsBlock2 data={set2} dName={two}  onClickMe={onClickMe} />
   <SoloProductsBlock2 data={set3} dName={three} onClickMe={onClickMe} />
   <SoloProductsBlock2 data={set4} dName={four}  onClickMe={onClickMe}/>

  
   </>
  )
}

export default AllProductsBlock
