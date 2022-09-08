import React  from 'react';
import "./general.css"
import "./about.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

function About() {
    
    gsap.registerPlugin(ScrollTrigger);
    


    useEffect(() => {
        const intItems = gsap.utils.toArray('.ab-sect-card');
        intItems.forEach(box => {
            let an = gsap.timeline({
                scrollTrigger: {
                    trigger: box,
                    start: "top 90%",
                    toggleActions: "play none none restart" 
                }
            })
            an.from(box, {
                stagger: true,
                opacity: 0,
                y:30,
                duration:0.6,
            })
        });
    });

    return (
        <>
            <div class="content">
                <h1 class="ab-header">Interests And Hobbies</h1>
                <div class="abt-card-cont">
                    <Card
                    interest="Coding"
                    interestContent="I started coding when I was 10, and quickly became obsessed with it. My first programs started out as simple graphics and animations. I then started learning about websites. It took about half a year to learn the basics of html and css. By that time, I was coding everyday. A half year or so later and I found out about Python. Because of it's simplicity, I started liking it more and more as I kept on learning. As time went on, I started finding more resources and learning more languages. To this day, coding is still my favorite hobby."
                    gray="True"
                    imgs="coding.jpg"
                    />
                    <Card
                    interest="Soccer"
                    interestContent="I have been playing competitive soccer for around 5 years in counting, and love the sport. It's a sport where you'll have to make split second decisions and one where you'll have to work together as a team. I currently play right center back, though I've played many positions, namely, both wing backs, center mid, both wing fowards, and goalie. I currently play for Rocklin FC, though I played for CVSC for a majority of the five years."
                    gray="False"
                    imgs="soccer1.jpg"
                    />
                    <Card
                    interest="Chess"
                    interestContent="I learned how to play chess in first grade, and at that time, I just played it at school. After my first grade year, I didn't play too much chess; I played it here and there, but not on the regular. However, in my fith grade year, the teacher set up a chess board in the class, where we can play with friends, if we finished our work early. That's when I started to try to get good at chess. At the end of the year, we had a tournament, and I came out victorious. I currently also play online. I specialize in bullet, and have a rating of 1280."
                    gray="True"
                    imgs="chess.jpg"
                    />
                    <Card
                    interest="Piano"
                    interestContent="I started playing piano when I was five. Piano has always been my favorite instrument, and I love being able to play it. So far, I've played many famous songs, including Moonlight Sonata, River Flows in You, and Chopin's Waltz (op. 64 no. 2). At first, playing and practicing piano was a pain, but now it's fun. I am currently learning Chopin's Minute Waltz, which, because of the similarities with his other Waltz', is not to difficult."
                    gray="False"
                    imgs="piano.jpg"
                    />
                    <Card
                    interest="Hiking"
                    interestContent="Hiking could be a way of relaxation: just a stroll in the park; Or it can be exciting: Climbing mountains, weaving through the jungle vines. Whichever one it is, It's always been a fun, memorable experience. I currently live in Rocklin, where there are many amazing hiking places nearby. Every hike is different, even if the trail is the same, which brings a different experience each time. That's what I love about hiking: it's unexpected and brings adventure."
                    gray="True"
                    imgs="hiking.jpg"
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
                    <p class="ab-sect-cont grid-item">{props.interestContent}</p>
                    <div class="pic-item grid-item">
                        <img class="pic" src={props.imgs} alt=""></img>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div class="ab-sect-card">
                    <p class="interest grid-item">{props.interest}</p>
                    <p class="ab-sect-cont grid-item">{props.interestContent}</p>
                    <div class="pic-item grid-item">
                        <img class="pic" src={props.imgs} alt=""></img>
                    </div>
                </div>
            </>
        )
    }
}

export default About