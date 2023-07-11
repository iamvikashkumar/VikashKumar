import './Experience.css';

function Experience() {
    return (
        <div className="Experience">
            <div className='myExperience'>
                Experience            
            </div>
            <section class="container">
                <div class="half">
                    <div className='position'>Senior Software Engineer - <a className='link' target="_blank" href="https://www.vistex.com/">Vistex Inc</a></div>
                    <div className='yoe'>Sep 2021 - Present</div>
                    <ul className='unorderList'>
                        <li>Worked on Five Agri project which is implemented on Agriculture using JavaScript.</li>
                        <li>Identifying Bug and fixing it and also optimizing code in the older application.</li>
                        <li>Increased the throughput of the application by 75% by optimizing unwanted network calls .</li>
                        <li>Transformation of an older Agriculture application to an updated guideline given by Fiori.</li>
                        <li>Ownership of the development of the Agri-GIS product to add new features and also make the existing one stable.</li>
                        <li>Guiding junior and cooperating with the product manager for future development, upcoming projects, and new add-ons.</li>
                    </ul>
                </div>
                <div class="half">
                    <div className='position'>Software Engineer - <a className='link' target="_blank" href="https://www.cariboutech.com/">Caribou Technologies</a></div>
                    <div className='yoe'>Jan 2019 - Sep 2021</div>
                    <ul className='unorderList'>
                        <li>I worked on an IoT device project that combined AngularJS for the front end and Java for the back end.</li>
                        <li>Small console web-tool designed for remote IoT device debugging.</li>
                        <li>AngularJS, Javascript, HTML, and CSS were used to design a fully functional educational application for the US-based company.</li>
                        <li>Developed a reliable application that is adaptable on mobile and online browsers.</li>
                        <li>Ownership of the Carson Project as a frontend engineer to add new features and also make the existing one stable.</li>
                        <li>Co-operating with the Senior Engineer & manager for future development, upcoming projects, and new add-ons.</li>
                    </ul>
                </div>
            </section>
            <div className='resume'><a className='link' target="_blank" href='https://drive.google.com/file/d/1FtKr2LWJwIaClqTzcfFsuZAbqhIhxrf8/view'>View Full Resume</a></div>
        </div>
    )
}

export default Experience;