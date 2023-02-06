import {ReactNode, Dispatch, SetStateAction} from "react";

const Sidebar = ({titles, selectedComponent, setSelectedComponent}: { titles: string[], selectedComponent: ReactNode, setSelectedComponent: Dispatch<SetStateAction<string>> }) => {
  const handleSelect = (e: any) => {
    const title = e.target.innerText;
    setSelectedComponent(title);
  }
  return (
    <aside className="bg-cyan-800 pt-6 w-1/6 flex-row justify-center text-center">
      <h1 className="text-xl font-bold px-4">Browse Components</h1>
      <ul className="mt-10 pb-8 px-4 h-full overflow-y-scroll">
        {titles.map((title, index) => (
          <li onClick={handleSelect} className="text-lg font-bold mt-4 py-2 rounded border border-transparent hover:border-slate-900 hover: hover:cursor-pointer hover:shadow-md" key={index}>{title}</li>
        ))}
      </ul>
    </aside>
  )
};

export default Sidebar;