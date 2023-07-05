import Cover from "./components/Cover";
import ConceptDefinition from "./components/ConceptDefinition";
import Use from "./components/Use";
import Profits from "./components/Profits";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import E from "./components/E";
import Consideration from "./components/Considerations";
import Do from "./components/Do";
import Dont from "./components/Dont";
import SupportApp from "./components/SupportApp";
import SupportLinks from "./components/SupportLinks";
import Info from "./components/Info";

function App() {
 return (
  <>
   <div className="fragment">
    <div className="cover">
     <Cover />
    </div>
    <div className="concept">
     <ConceptDefinition />
    </div>
    <div className="use">
     <Use />
    </div>
    <div className="profits">
     <Profits />
    </div>
    <div className="a">
     <A />
    </div>
    <div className="b">
     <B />
    </div>
    <div className="c">
     <C />
    </div>
    <div className="d">
     <D />
    </div>
    <div className="e">
     <E />
    </div>
    <div>
     <Consideration />
    </div>
    <div>
     <Do />
     <Dont />
    </div>
    <div>
     <SupportApp />
     <SupportLinks />
     <Info />
    </div>
   </div>
  </>
 );
}

export default App;
