import React from "react";
import ReactLogo from "../assets/react.svg"
export default function Navbar() {
  return (
    <>
    
    <nav>
        <div class="container">
            <div class="logo">
                <img src={ReactLogo} alt="" srcset=""/>
            </div>
            <div class="navItems">
                <ul>
                    <li>Products</li>
                    <li class="policies">Policies
                        <ul class="navOptions">
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>Refund / Cancellation</li>
                        </ul>
                    </li>
                    <li>Contact</li>
                </ul>
                <div class="navBtn">
                    <button>New Listing</button>
                </div>
            </div>

        </div>
    </nav>
    
    </>
  );
}
