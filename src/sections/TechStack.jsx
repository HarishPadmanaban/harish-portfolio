import TitleHeader from '../components/TitleHeader.jsx';
import { techStackIcons } from '../constants/index.js';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function TechStack() {

    useGSAP(() => {
        gsap.fromTo('.tech-card',{ y:50 ,opacity:0 },
            {
                y:0,
                opacity : 1,
                duration : 1,
                ease :'power2.inOut',
                stagger : 0.3,
                scrollTrigger:{
                    trigger:'#skills',
                    start:'top center',
                }
            }
        )
    })

//className="scroll-mt-28"
  return (
    <div id="skills" className='flex-center section-padding scroll-mt-28'>
        <div  className='w-full h-full md:px-10 px-5'>
            <TitleHeader

            title="My Preferred Tech Stack"
            sub=" 🤝 The Skills I Bring to the Table"
            />

            <div className='tech-grid'>
                {techStackIcons.map((icon) => (
                    <div key={icon.id} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        <div className='tech-card-animated-bg' />
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                               {/* <TechIcon model={icon}/> */}
                               <img src={icon.modelPath} alt={icon.name}/>
                            </div>

                            <div className='padding-x w-full'>
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack