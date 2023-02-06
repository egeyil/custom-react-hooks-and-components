import {useState} from 'react'
import Sidebar from "./components/layout/Sidebar";
import ComponentDisplay from "./components/layout/ComponentDisplay";
import {FirstComponent, SecondComponent} from "./components/browse";

interface IComponents {
  [key: string]: JSX.Element
}

function App() {
  const components: IComponents = {
    "FirstComponent": <FirstComponent />,
    "SecondComponent": <SecondComponent />
  }
  const [selectedComponent, setSelectedComponent] = useState<string>(Object.keys(components)[0]);

  return (
    <div
      className="bg-gradient-to-br from-cyan-700 to-slate-900 flex flex-row text-slate-50 h-screen overflow-y-hidden transition-all duration-500">
      <Sidebar titles={Object.keys(components)} selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent}/>
      <ComponentDisplay title={selectedComponent}>
        {components[selectedComponent]}
      </ComponentDisplay>
    </div>
  )
}

export default App
