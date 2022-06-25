import './App.css';
import Headlinks from './HeadLinks';
import TitleHeading from './TitleHeading';
import AboutMe from './AbouteMe';

function App() {
  return (
    <>
      <header>
        <div>
          <h1>My Blog</h1>
          <h2>An awesome baseline</h2>
        </div>
        <div>
          <div>
            <Headlinks title={"Link"}/>
            <Headlinks title={"Link"}/>
            <Headlinks title={"Link"}/>
          </div>
          <Headlinks title={"Link"}/>
        </div>
      </header>
      <main>
        <div>
          <AboutMe title={"About me"} color={"grey"} content={"Cras interdum pharetra felis eu faucibus."}/>
        </div>
        <div>
          <TitleHeading title={"Title Heading"} description={"Title description"} color={"grey"} content={"Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."}/>
          <TitleHeading title={"Title Heading"} description={"Title description"} color={"grey"} content={"Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula."}/>
        </div>
      </main>
      <footer>
        <div>
          <span>Made with </span>
          <span className='Bold'>React</span>
          <span> at </span>
          <span className='Bold'>Le Reacteur</span>
          <span> By </span>
          <span className='Bold'>Nono</span>
        </div>
      </footer>
    </>
  );
}

export default App;
