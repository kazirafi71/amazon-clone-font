import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import Card from '../components/Card'
import Card2 from '../components/Card2'



const Home = () => {
  // const user = useSelector((state) => console.log(state));
  // console.log(user)
  
      
   
  return (
    <div className="pb-5" style={{backgroundColor:"#EAEDED"}}>
      <div className="">
        <img className='img-fluid' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="" srcset=""/>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 ">
            <Card
            id="344545"
             title="I Phone"
             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
             price="100"
             image="https://lh3.googleusercontent.com/9B7KUGiRq9sSyZmTxp8uFjUft990l26_6SofR-zcmCfEuECklAALO9gqv5-5r1vVYP46"/>
            
          </div>
          <div className="col-md-6">
            
            <Card
            id="35435435435"
            title="Watch"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwTAfLshqvSeLlhSs1IO1Y7iRP2uQcyHcAg&usqp=CAU"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-3">
          <div className="col-md-4">
          <Card2
          id="089787656"
            title="HP Laptop"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="100000"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGySOjf-c8gBZyLE1G6kE5xtQydlxA-So2g&usqp=CAU"
            />
          </div>
          <div className="col-md-4">
          <Card2
          id="1038456756933243874832"
            title="HP Laptop"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="100000"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGySOjf-c8gBZyLE1G6kE5xtQydlxA-So2g&usqp=CAU"
            />
          </div>
          <div className="col-md-4">
          <Card2
          id="1234567890098765"
            title="Bag"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="100000"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqajZxnbSxcUkklVoQObbBmr5B4toJ0qmEw&usqp=CAU"
            />
          </div>
          <div className="col-md-4">
          <Card2
          id="08367489576384"
            title="HP Laptop"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="100000"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGySOjf-c8gBZyLE1G6kE5xtQydlxA-So2g&usqp=CAU"
            />
          </div>
          <div className="col-md-4">
          <Card2
          id="09237849250"
            title="Men Shoes"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="1000"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgGsrREITIt0wANCWrcc7kDUrvSX4x41rqQ&usqp=CAU"
            />
          </div>
          <div className="col-md-4">
          <Card2
          id="63453643654365343434343"
            title="Headphone"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus, magni nulla incidunt, soluta "
            price="1000"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTCDwwMysv02Al3k9_pLuQ70qnvU-CaIpvA&usqp=CAU"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
