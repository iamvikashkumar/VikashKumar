import logo from './profile.jpeg';
import Title from './components/Title';
import './App.css';
import BasicSpeedDial  from './components/SpeedDial/BasicSpeedDial';
import DarkMode from './components/DarkMode/DarkMode';
import LinkedIn from './linkedin-round-svgrepo-com.svg'
import Gmail from './gmail-svgrepo-com.svg'
import MySkills from './components/MySkills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='myName'>
          Vikash Kumar
        </div>
          <div className='jobTitle'>
            Senior Software Engineer - Frontend <br></br>
          </div>
          <div>
            <span><img className='social' src={LinkedIn} alt="LinkedIn" /></span>
            <span><img className='social' src={Gmail} alt="Gmail" /></span>
          </div>
          <div className='desc'>
            <br/><strong>Welcome👋!</strong><br/><br/>
            I am a frontend developer in crafting visually appealing and <br/>            
            user-friendly web interfaces. Through my work, <br/>
            I have honed my skills in creating responsive designs, <br/> 
            optimizing performance, and collaborating with cross-functional<br/>
            teams to deliver exceptional user experiences.<br/>            
          </div> 
          {/* <div className='knowMore'><Button variant="contained" size="small">Know More</Button></div>     */}
        {/* <BasicSpeedDial /> */}
        <DarkMode />
      </header>
      <MySkills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
