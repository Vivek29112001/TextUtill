// import logo from './logo.svg';
import './App.css';
import Navebar from './component/Navebar';
import TextForm from './component/TextForm';

function App() {
  return (
  <>
  
<Navebar title="TextUtill" />
<div className="container my-3">
  {/* <h1></h1> */}
<TextForm heading="Enter the text to analyze below "/>
</div>


</>
  );
}

export default App; 
