import {Dispatch, ReactNode, SetStateAction} from "react";

const Sidebar = ({
                   titles,
                   selectedComponent,
                   setSelectedComponent
                 }: { titles: string[], selectedComponent: ReactNode, setSelectedComponent: Dispatch<SetStateAction<string>> }) => {
  const handleSelect = (e: any) => {
    const title = e.target.innerText;
    setSelectedComponent(title);
  }
  return (
    <aside className="bg-cyan-800 pt-6 w-1/6 flex-row justify-center text-center border-r border-r-cyan-900 shadow-xl">
      <h1 className="text-xl font-bold px-4 py-2">Browse Components</h1>
      <ul className="mt-16 pb-8 h-full overflow-y-scroll">
        {titles.map((title, index) => (
          <li onClick={handleSelect}
              className="transition-all overflow-ellipsis overflow-hidden whitespace-nowrap text-md font-bold py-4 px-2 last:border-b border-t border-slate-700 hover: hover:cursor-pointer hover:shadow-md"
              key={index}>{title}</li>
        ))}
      </ul>
    </aside>
  )
};

export default Sidebar;