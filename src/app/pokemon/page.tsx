'use client'

import { List } from "@/components/List";
import { MouseEventHandler, useState } from "react";

const Button = ({ text, region, onClick }: { text: string, region: string, onClick: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button
      className={`ml-4 px-4 py-0.5 text-lg font-medium capitalize rounded-lg border-2 border-themeDark ${region === text ? "text-themeLight bg-themeDark" : "text-themeDark bg-themeLight"}`}
      onClick={onClick}>
      {text}
    </button>
  )
}

const Page = () => {
  const [region, setRegion] = useState('');

  const handleClick = (text = '') => {
    if (region === text) {
      setRegion('');
      return;
    }
    setRegion(text);
  }

  return (
    <div>
      <h1>Gotta Catch&apos;em All</h1>
      <div>
        <Button text="Kanto" onClick={() => handleClick("Kanto")} region={region} />
        <Button text="Johto" onClick={() => handleClick("Johto")} region={region} />
        <Button text="Hoenn" onClick={() => handleClick("Hoenn")} region={region} />
        <Button text="Sinnoh" onClick={() => handleClick("Sinnoh")} region={region} />
        <Button text="Unova" onClick={() => handleClick("Unova")} region={region} />
        <Button text="Kalos" onClick={() => handleClick("Kalos")} region={region} />
        <Button text="Alola" onClick={() => handleClick("Alola")} region={region} />
        <Button text="Galar" onClick={() => handleClick("Galar")} region={region} />
        <Button text="Hisui" onClick={() => handleClick("Hisui")} region={region} />
        <Button text="Paldea" onClick={() => handleClick("Paldea")} region={region} />
      </div>
      <List />
    </div >
  )
}
export default Page