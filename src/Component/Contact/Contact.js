import React, { Component } from 'react';
import './contact.css'
import user from "../Images/Logos/user.png"
import home from "../Images/Logos/home.png"
import phone from "../Images/Logos/phone.png"
import email from "../Images/Logos/email.png"
import uni from "../Images/Logos/university.png"

export default class Contact extends Component {
    render(){
        return(
            <div className="body">
                
                <div id="contact-img"></div>
                <h1 id="contact">Contact</h1>
                <div id="contact-main">
                    <div id="contact-information">
                        <h3 id="h-informations">Informations</h3>
                        <div id="informations">

                        <div id="name">
                                <img src={user} id="user-icon" />
                                <div id="name-text">
                                    <h5>Adna Hrnjić</h5>
                                </div>
                            </div>
                            <div id="address">
                                <img src={uni} id="uni-icon" />
                                <div id="address-text">
                                    <h5>Sarajevo, BiH</h5>
                                    <p className="small-text"></p>
                                </div>
                             </div>

                            

                            <div id="phone">
                                <img src={phone} id="phone-icon"/>
                                <div id="phone-text">
                                    <h5>123123123</h5>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        )
    }
}