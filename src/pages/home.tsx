import {Col, Row, Container} from "react-bootstrap"

export function Home() {
    return (
        <>
            <div id="banner">
                <img src="images/banner1.png" id="banner-image"></img>
                <div id="banner-buttons"></div>
                <hr></hr>
            </div>
           
            <div id="services">
                <div className="service-item">
                    <img src="images/services-computers.jpg" className="service-item-image"></img>
                    <div className="services-content">
                        <p className="services-title">Computers</p>
                        <p className="services-text">
                        We offer a variety of computers from top brands, including desktops, laptops, and tablets. At 
                        Digital Depot, our knowledgeable staff always provides
                         expert advice and guidance to help customers make informed decisions. 
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <img src="images/services-electronics.jpg" className="service-item-image"></img>
                    <div className="services-content">
                        <p className="services-title">Electronics</p>
                        <p className="services-text">
                        Our vast assortment of electronics at Digital Depot encompasses a broad 
                        range of devices, including headphones, smartphones, tablets, laptops,
                         desktops, gaming consoles, smart home devices, and much more. 
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <img src="images/services-accessories.jpg" className="service-item-image"></img>
                    <div className="services-content">
                        <p className="services-title">Accessories</p>
                        <p className="services-text">
                        At Digital Depot, we provide an extensive range of electronic 
                        accessories to enhance your user experience, such as ergonomic keyboards, 
                        gaming mice, mousepads, cables, chargers, phone cases, screen protectors, and 
                        other essential items.
                        </p>
                    </div>
                </div>
            </div>
            <div id="testimonials">
                <img src="images/coming-soon.png" className="coming-soon"></img>
            </div>
        </>
    )
}