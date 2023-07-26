import React from "react";
import logo from "../assets/coursedaddy.png";
const Footer = () => {
  return (
    <>
      <div className="h-[300px] mt-14 flex flex-col justify-between border border-black  md:flex md:flex-row  py-10  text-white bg-black">
        <div className="flex flex-1 justify-around ">
          <div className="leftFooter1">
            <span className="opacity-50 font-medium">COMPANY INFO</span>
            <ul className="mt-4 flex flex-col gap-2">
              <a href="">
                <li className="text-b">About us</li>
              </a>
              <a href="">
                <li className="text-b">Team</li>
              </a>
              <a href="">
                <li className="text-b">Careers</li>
              </a>
              <a href="">
                <li className="text-b"> Blog</li>
              </a>
              <a href="">
                <li className="text-b">Investors</li>
              </a>
              <a href="">
                <li className="text-b">Affiliate</li>
              </a>
            </ul>
          </div>
          <div className="leftFooter2">
            <span className="opacity-50 font-medium">CONTACT US</span>
            <ul className="mt-4 flex flex-col gap-2">
              <a href="">
                <li className="text-b">Help & Support</li>
              </a>
              <a href="">
                <li className="text-b">Udemy Business</li>
              </a>
              <a href="">
                <li className="text-b">Teach on Udemy</li>
              </a>
            </ul>
          </div>
        </div>
        <div className=" flex flex-1 justify-around md:mt-0 mt-10 ">
          <div className="hidden md:block rightFooter1">
            <span className="opacity-50 font-medium">LEGAL</span>
            <ul className="mt-4 flex flex-col gap-2">
              <a href="">
                <li className="text-b">Terms & Conditions</li>
              </a>
              <a href="">
                <li className="text-b">Cupon </li>
              </a>
              <a href="">
                <li className="text-b">Privacy Policy</li>
              </a>

              <a href="">
                <li className="text-b">Offer Terms</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <img
              className="h-12 cursor-pointer"
              alt="Google Play"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAYCAMAAAD3RZI3AAAA2FBMVEX///9ChfT7vAQ0qFPqQzX6/P9KT1XX19laX2RucnaUlplhZWpNUlhYXGKho6ZGS1G+v8H29ve2uLrk5OU0qU7v8PDLzM7c3d6oqqz7uAB+gYWMjpH8wABSV101iPtmam/4pxI9Q0rZ7d7S6tYWoUGk1LBGrGxArFzC4sk6hes0pl1btnJ+w47z+vU1pWNDpTv2xT//8tQ2pG5Tqkv8z2b/+er925H8yU1epHBje9pwd8/vPyL+57d5dMfpOCr60pfpKxTwi4TtamH74+HrUEP4ysb1sa3vgHlKyJUPAAACzElEQVRIid2U23LbIBCGsR0jECCEZJACwapT95Ce2/ScVk3TtHn/NyogybZkx0lvkpnueKyVYPdj+RcACHb8EtyDPZwtZ4/ugft4Npksnzy9a+z05JkDT5bPj++YO2/Ak+WLO5V5Ohq14Nlyp8xRmWTFDUlk3nsVuXTmvVzu4Y5OXgXwZDnZkjki0Ju+Nj6YWYheEKcQ8koBQMk+7go8ef3mbW80hTbLZREv0r3cGPa51GRZyagCCO/ljkbvAvh0fHj4/sN6MIekKTS/JvoaLszcv7T4Zm4An469HX5cDRoa7Qfu4wJsW67YEdJxHbjBOvCndkyganOqNMxq32IiRlZHwWEsSXTgSm1Z3OMyErgJsyQFGfaRGVZD7vzz0bgDt1stofGP0njLJaMmRlwBQahJEE+BqNwXxpDnSmvjxOqGS5OiiDTNPNdwXWKYSe5zITSsd/7l4MHRkEtDHgMpZTSKXZ8A6SIT6rpMEAYSmHoZieO6n9sAw0P/Rda6M8ATEOqNgASYOM0kULAccOdfzw468FrginVeBgsSNr2EOSbNl9aJfb2A4DzmrJRNvbFSyruOKwzk1iUqHFNT2ecGbAM+3DhKJe3Wt+oRt4Cq6lYSviQscBFfadfq23CxzSKFXQGYSBr3+2r+PWAdeDz+ttlKhDYZ4tViMQXG+mOlqTDUO1Wo11hPLba4IujqRAGp1XR98U03sXX9A/RMEojLtCS+wQqKUqXdAvLGSVqHeX1FTiul9EJt1UtY6splAa7BJrfD1uc/t06aSJhrERTyKMR52PiIcO6wjYM1Cvek91tZokXHtRUoCF8YY4Nqap14usKeX/waUoPlRb52xdDJgSbD0WGCNh5vXtbTFltf/t4ZtM8i5E8WNbecvdr9wA3Yuv7zz1SHZDSOEb3h8u5M9y/Ti/qgPtsW9nbg7ua8zVxd9t7F1eXVbmH/O/sLVP87cU6c0m0AAAAASUVORK5CYII="
            />
            <img
              className="h-12 cursor-pointer"
              alt="Apple Play"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8D7Bz-BWIwTQs8FeHjzM8WbaE2dUslzJrg&usqp=CAU"
            />
            <img className="h-12 cursor-pointer" alt="" src={logo} />
          </div>
        </div>
        
      </div>
      <p className="text-xl font-semibold text-center bg-green-700 pb-2 text-white">This Page is Design & Developed by Susanta</p>
    </>
  );
};

export default Footer;
