import { useEffect, useState } from 'react';
import './App.css';
import AboutCamera from './components/AboutCamera';
import AllProductsBlock from './components/AllProductsBlock';
import CorousalPart from './components/CorousalPart';
import FooterCam from './components/FooterCam';
import NavyBar from './components/NavyBar';
import ProductView from './components/ProductView';
// import SoloProductsBlock from './components/SoloProductsBlock';

function App() {
  const[firstData,setFirstData]=useState([]);
  const[secondData,setSecondData]=useState([]);
  const[thirdData,setThirdData]=useState([]);
  const[fourthData,setFourthData]=useState([]);

  // The names
  const[firstName,setFirstName]=useState("");
  const[secondName,setSecondName]=useState("");
  const[thirdName,setThirdName]=useState("");
  const[fourthName,setFourthName]=useState("");

  useEffect(()=>{

    const getme=async()=>
    {
      let url="https://tirupathisairohith1999.github.io/cameraProductsApiByme/product2.json";
      const getData=await fetch(url);
      let dataGathered=await getData.json();
      
      setFirstData(dataGathered.productPart[0].products);
      setSecondData(dataGathered.productPart[1].products);
      setThirdData(dataGathered.productPart[2].products);
      setFourthData(dataGathered.productPart[3].products);

      // console.log(dataGathered.productPart[0].chamberTitle);

      setFirstName(dataGathered.productPart[0].chamberTitle);
      setSecondName(dataGathered.productPart[1].chamberTitle);
      setThirdName(dataGathered.productPart[2].chamberTitle);
      setFourthName(dataGathered.productPart[3].chamberTitle);

      // console.log(firstName);

    }
    getme();
  },[firstData]);

  const[goWell,setGoWell]=useState(true);
  

  const onClickMe=(e)=>
  {
    // console.log(e);
    if(goWell===true){setGoWell(false)}
    else(setGoWell(true));
    // return e
  }

  return (
    <>
    <div className='visible'>
    <NavyBar/>
    <CorousalPart/>
    <AboutCamera/>
    <AllProductsBlock first={firstData} second={secondData} third={thirdData} fourth={fourthData} one={firstName} two={secondName} three={thirdName} four={fourthName} onClickMe={onClickMe}  />
    <FooterCam/>
    
    </div>
    <ProductView goWell={goWell}/>;
    
    
    </>
  );
}

export default App;
