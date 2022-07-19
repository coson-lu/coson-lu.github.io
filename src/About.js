import React  from 'react';
import "./general.css"
import "./about.css"
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";

function About() {
    
    // gsap.registerPlugin(ScrollTrigger);
    


    // useEffect(() => {
    //     const intItems = gsap.utils.toArray('.ab-sect-cont')
    //     const int = gsap.utils.toArray('.interest')
    //     intItems.forEach(box => {
    //         gsap.from(box, {
    //             scrollTrigger: {
    //                 trigger: box,
    //                 start: "top 95%",
    //                 toggleActions: "restart none restart pause" 
    //             },
    //             x: 60,
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.4,
    //             ease: "power4.out"
    //         })
    //     });
        
    //     int.forEach(boxi => {
    //         gsap.from(boxi, {
    //             scrollTrigger: {
    //                 trigger: boxi,
    //                 start: "top 95%",
    //                 toggleActions: "restart none restart pause" 
    //             },
    //             x: -60,
    //             y: 20,
    //             opacity: 0,
    //             duration: 0.4,
    //             ease: "power4.out"
    //         })
    //     });
    // });

    return (
        <>
            <div class="content">
                <h1 class="ab-header">Interests And Hobbies</h1>
                <div class="abt-card-cont">
                    <Card
                    interest="Coding"
                    interestContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor. Erat imperdiet sed euismod nisi porta lorem. Bibendum arcu vitae elementum curabitur. Id cursus metus aliquam eleifend mi. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet facilisis magna etiam tempor orci"
                    gray="True"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="2"
                    interestContent="Coding"
                    gray="False"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="Coding"
                    interestContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor. Erat imperdiet sed euismod nisi porta lorem. Bibendum arcu vitae elementum curabitur. Id cursus metus aliquam eleifend mi. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet facilisis magna etiam tempor orci. Luctus accumsan tortor posuere ac ut consequat semper. Auctor urna nunc id cursus metus aliquam eleifend. Et netus et malesuada fames. Ornare lectus sit amet est placerat. Tortor aliquam nulla facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec. Elementum sagittis vitae et leo duis ut."
                    gray="True"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="2"
                    interestContent="Coding"
                    gray="False"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="Coding"
                    interestContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor. Erat imperdiet sed euismod nisi porta lorem. Bibendum arcu vitae elementum curabitur. Id cursus metus aliquam eleifend mi. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet facilisis magna etiam tempor orci. Luctus accumsan tortor posuere ac ut consequat semper. Auctor urna nunc id cursus metus aliquam eleifend. Et netus et malesuada fames. Ornare lectus sit amet est placerat. Tortor aliquam nulla facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec. Elementum sagittis vitae et leo duis ut."
                    gray="True"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="2"
                    interestContent="Coding"
                    gray="False"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="Coding"
                    interestContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor. Erat imperdiet sed euismod nisi porta lorem. Bibendum arcu vitae elementum curabitur. Id cursus metus aliquam eleifend mi. Proin sagittis nisl rhoncus mattis rhoncus urna. Amet facilisis magna etiam tempor orci. Luctus accumsan tortor posuere ac ut consequat semper. Auctor urna nunc id cursus metus aliquam eleifend. Et netus et malesuada fames. Ornare lectus sit amet est placerat. Tortor aliquam nulla facilisi cras fermentum odio eu. Aenean sed adipiscing diam donec. Elementum sagittis vitae et leo duis ut."
                    gray="True"
                    imgs="forest.jpg"
                    />
                    <Card
                    interest="2"
                    interestContent="Coding"
                    gray="False"
                    imgs="forest.jpg"
                    />
                    
                </div>
                
            </div>
        </>
    )
};

function Card(props) {
    if (props.gray === "True") {
        return (
            <>
                <div class="gray ab-sect-card">
                    <p class="interest grid-item">{props.interest}</p>
                        <div class="pic-item grid-item">
                            <img class="pic" src={props.imgs} alt=""></img>
                        </div>
                    <p class="ab-sect-cont grid-item">{props.interestContent}</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div class="ab-sect-card">
                    <p class="interest grid-item">{props.interest}</p>
                        <div class="pic-item grid-item">
                            <img class="pic" src={props.imgs} alt=""></img>
                        </div>
                    <p class="ab-sect-cont grid-item">{props.interestContent}</p>
                </div>
            </>
        )
    }
}

export default About