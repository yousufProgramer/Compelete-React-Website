import React from 'react';
import { MdOutgoingMail} from "react-icons/md";
import { AiOutlineContacts} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillTwitterCircle} from "react-icons/ai";
import "./TopMenu.css"
function AddressBar() {
  return (
      <div className='topMenu'>
        <div className='container'>
            <div className='row menu-footer' >
                   <div className='col-lg-6 col-sm-12'>
                   <div className='footerLeft d-flex'>
                   <p className='p-2 topMenuIcon'> <MdOutgoingMail />yousufAhmed@gmail.com</p>
                    <p className='p-2 topMenuIcon'> <AiOutlineContacts />+013541651</p>
                   </div>
                   </div>

                   <div className='col-lg-6 col-sm-12 iconHide'>
                      <div className='icon p-2'>
                        <span><BsFacebook /></span>
                        <span><AiFillInstagram/></span>
                        <span><IoLogoWhatsapp/></span>
                        <span><AiFillTwitterCircle/></span>
                      </div>
                   </div>
            </div>
        </div>
    </div> 

  )
}

export default AddressBar