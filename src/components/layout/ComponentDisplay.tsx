import { ReactNode } from "react";

const ComponentDisplay = ({ title, children }: { title: string, children: ReactNode }) => {
  return (
    <main className="w-full h-full flex justify-center pt-16 text-center">
      <div className="">
        <h1 className="text-3xl mb-16">{title}</h1>
        {children}
      </div>
    </main>
  )
}

export default ComponentDisplay