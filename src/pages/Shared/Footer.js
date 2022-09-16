import React from 'react';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <p>EDGE BLOG.<br />most popular blog site among people</p>
                </div>
                <div>
                    <span className="footer-title">Useful Links</span>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Account</a>
                    <a className="link link-hover">Add Blogs</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;