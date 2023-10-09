import React from 'react'
import ReactLogo from "../assets/react.svg"


export default function Card() {
  return (
    <>
    <div class="product">
                <div class="card">
                    <img src={ReactLogo} alt=""/>
                    <p class="productTitle">Lorem ipsum dolor sit amet.</p>
                    <div class="type">
                        <button>Buying</button>
                    </div>
                    <div class="location">
                        <p><span></span>Satara Maharashtra</p>
                    </div>
                    <hr/>
                    <div class="requirement">
                        <p class="quantity"><span></span>1000 kg</p>
                        <button class="requirementBtn">monthly</button>
                        <p class="time">7 Hours Ago</p>
                    </div>
                </div>
                </div>
    </>
  )
}
