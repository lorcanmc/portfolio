import './App.css';
import Heading from "../Heading/"
import TextInput from "../TextInput/"
import ProjectCard from "../ProjectCard/"

function App() {
  console.log(TextInput)
  return (
    <div className="App">
      <div className="App-header">
        <Heading text="Portfolio Homepage"></Heading>
      </div>
      <div className="main">
        <TextInput></TextInput>
        <TextInput></TextInput>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      
    </div>
    
  );
}

export default App;
