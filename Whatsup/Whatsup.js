import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';

import 'react-whatsapp-widget/dist/index.css'

const Whatsup = () => {
    return (
        <div>
            <h1>Welcome To The Whats Up chat number 1</h1>
            <WhatsAppWidget 
            phoneNumber='8801991166550'
            companyName='Ehsan Markeeting'
            textReplyTime='Ehsan Marketing Support Team'
            message="What can we do for you?"
            />

        
            
        </div>
    );
};

export default Whatsup;
