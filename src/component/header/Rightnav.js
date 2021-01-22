import React from 'react';
import styled from "styled-components";

const Ul = styled.ul`
  
  @media (max-width: 767px) {
    flex-flow: column nowrap;
    background-color: #031E47;
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
    <Ul open={open} className="visible md:invisible md:-mb-40 font-titulo md:pt-0 text-center font-titulo text-lg">
     <li className="pt-12 md:pt-0">INICIO SESION</li>
     <li className="py-5 md:py-0">INICIO</li>
     <li className="">CATALOGO</li>
     <li className="py-5 md:py-0">NOSOTROS</li>
     <li className="">CONTACTO</li>
     <li className="flex justify-center pt-5 md:pt-0"></li>
    </Ul>
    )
}

export default Rightnav
