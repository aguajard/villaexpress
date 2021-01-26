import React from 'react';
import styled from "styled-components";
import logob from "../../assets/img/Express.png";

const Ul = styled.ul`
  
  @media (max-width: 767px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    padding-top: 7rem;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: #fff;
    }
  }
`;

const Rightnav = ({ open }) => {
    return (
    <Ul open={open} className="visible md:invisible md:-mb-40 font-titulo md:pt-0 text-center font-titulo text-2xl">
     <li className="pt-12 md:pt-0">SERVICIOS</li>
     <li className="py-5 md:py-0">CONTACTO</li>
     <li className="">COTIZACION</li>
     <li className="pt-32"><img src={logob}></img></li>
     <li className="flex justify-center pt-5 md:pt-0"></li>
    </Ul>
    )
}

export default Rightnav
