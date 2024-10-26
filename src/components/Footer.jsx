import React from 'react';

const Footer = () => {
    return (
        <footer className="text-1/2xl font-extrabold text-blue-800 p-4 mt-8">
            <div className="container mx-auto text-center">
                <nav className="space-x-4 mt-2">
                    <div>
                        <ul className='flex-row justify-evenly text-center'>
                            <li><a href="/privacy" >Privacy Policy</a> </li> 
                            <li><a href="/terms" >Terms of Service</a> </li> 
                            <li><a href="/support" >Ticket</a></li> 
                        </ul>
                    </div>
                    <h3>ALL RIGHTS RESERVED</h3>
                    {/* <div>
                        <a href="/privacy" >Privacy Policy</a>
                        <a href="/terms" >Terms of Service</a>
                        <a href="/support" >Ticket</a>
                    </div> */}

                </nav>
            </div>
        </footer>
    );
};

export default Footer;
