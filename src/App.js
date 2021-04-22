import './App.css';
import { Button, Container, ControlContainer, ScreenSelectContainer, Video } from './App.elements';

function App() {

  return (
    <div className="App">
      <h1 className='App-header'>Screen Recorder ⚡</h1>
      <Container>
        <Video />
      </Container>
      <Container column>
        <ControlContainer>
          <Button primary>Start</Button>
          <Button>Stop</Button>
        </ControlContainer>
        <ScreenSelectContainer>
          <Button info>Choose video Source</Button>
        </ScreenSelectContainer>
      </Container>
    </div>
  );
}

export default App;
