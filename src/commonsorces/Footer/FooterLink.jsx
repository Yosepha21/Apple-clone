import React, { Component } from 'react';

// import React, { useEffect } from "react";
// // import flag from "../commonResource/images/icons/16.png";
// // import "./Toggle";
// import $ from "jquery";

// function Footer() {
//   useEffect(() => {
//     if ($(window).width() <= 768) {
//       $(".footer-links-wrapper").addClass("someClass");
//     } else {
//       $(".footer-links-wrapper").removeClass("someClass");
//     }
//     $(window).on("resize", function (event) {
//       if ($(window).width() <= 768) {
//         $(".footer-links-wrapper").addClass("someClass");
//       } else {
//         $(".footer-links-wrapper").removeClass("someClass");
//         $(".footer-links-wrapper ul").show();
//       }
//     });

//     // Footer collapse functionality
//     $(document).on("click", ".someClass h3", function () {
//       $(this).next("ul").slideToggle();
//       $(this).toggleClass("expanded");
//     });
//   }, []);

class FooterLink extends Component {
    render() {
        const elements=this.props.links;
        return (
            <> 
           
                {elements.map((value,index) =>{
                    return (
                        <li key={index}>
                            <a href="#">{`${value}`}</a></li>
                    )
                })}
           
            </>
        );
    }
}

export default FooterLink;
