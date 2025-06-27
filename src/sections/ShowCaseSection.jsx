import {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader';

function ShowCaseSection(){

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

    useGSAP(()=>{

        const projects = [project1Ref.current,project2Ref.current,project3Ref.current];

    projects.forEach((card,index) => {
        gsap.fromTo(
            card,
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:2,
                delay: 0.9 * (index+1),
                scrollTrigger:
                {
                    trigger:card,
                    start:'top bottom-=100',
                }
            }
        )
    })

        gsap.fromTo(sectionRef.current,
            {opacity:0},
            {opacity:1,duration:1.5}
        )
    },[]);

    return(
        <div id="work" className="scroll-mt-24">
            <div className="mt-14">
                <TitleHeader
                title="Featured Projects"
                sub="🚀 Real-World Applications I’ve Built"
                />
            </div>
            <section className="app-showcase mt-3" ref={sectionRef}>
            <div className="w-full">
                <div className="showcaselayout">
                    {/*First  CRUD */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/CRUD.png" alt="Console Application"/>
                        </div>
                        <div className="text-content">
                                <h2>CRUD Applications with Spring Boot</h2>
                                <p className="text-white-50 md:text-xl">A collection of backend systems that perform Create, Read, Update, and Delete operations for various entities. These applications use Spring Boot, Spring Data JPA, and MySQL/H2 databases, exposing RESTful APIs tested via Postman. Code structure follows the standard layered architecture. It includes Employee Management System ,Task Management System and Library Management System.</p>
                        </div>
                        <br></br>
                        <div className="image-wrapper">
                                <img src="/images/chat2.png" alt="Console Application"/>
                        </div>
                        <div className="text-content">
                                    <h2>ChatGPT Clone</h2>
                                    <p className="text-white-50 md:text-xl">A conversational AI clone built using Spring Boot and Spring AI, integrated with Ollama to enable interaction with locally running LLMs like LLaMA 3 or Mistral. The backend is designed to receive prompts and return intelligent responses via a REST API. A React frontend is planned for a clean chat UI.</p>
                        </div>
                    </div>
                    

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/ConsoleApp.png" alt="Console Application"/>
                            </div>
                            <div className="text-content">
                                    <h2>Fuel Station Console Application</h2>
                                    <p className="text-white-50 md:text-xl">A Java-based console application that simulates the core operations of a fuel station. Users can select from multiple fuel types—LPG, Unleaded, Diesel, and Premium Unleaded—and enter the number of liters to purchase. The system calculates the total cost, accepts currency denominations (₹5, ₹10, ₹20), handles underpayment and change return, and simulates fuel dispensing through printed messages.

The application showcases practical use of object-oriented programming (OOP), class-based design, and conditional logic. Each fuel type is encapsulated in a dedicated class with price and payment logic. It also includes a custom console-clearing utility for a cleaner user experience.</p>
                            </div>
                        </div>


                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#cceaeb]">
                                <img src="/images/8-queens.png" alt="Console Application"/>
                            </div>
                            <div className="text-content">
                                    <h2>N-Queens Visualizer</h2>
                                    <p className="text-white-50 md:text-xl">An interactive visualization tool for solving the classic N-Queens problem, where the goal is to place N queens on an N×N chessboard such that no two queens threaten each other. Built entirely with HTML, CSS, and JavaScript, the app demonstrates how the backtracking algorithm works by placing queens step by step, dynamically updating the board in the browser.

It uses DOM manipulation to render and update the board, allowing users to visually understand constraint satisfaction and recursion in real time. The visualizer includes features such as dynamic board sizing, instant or animated solution rendering, and clean UI elements to enhance user understanding.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        </div>
    )
}

export default ShowCaseSection;