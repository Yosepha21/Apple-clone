import React, { Component } from 'react';

class Nave extends Component {
    render() {
        return (
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={this.props.Links}>
                {this.props.name}
                    </a>

{/* // form footer */}
{/* <FooterLink links={['Mac',"iPad", "iPhone", 'Watch', 'TV', 'Music', 'AirPods', 'HomePod', 'iPod', 'touch', 'Accessories', 'Gift', 'Cards']} /> */}




                </li>
            
        );
    }
}

export default Nave;
