import { useState } from "react";
import "./App.css";
import { FaRegCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

function App() {
  const [color, setColor] = useState("");
  const [copied,setCopied]=useState(false);

  // const colorGenerator = () => {
  //   let letters = "0123456789abcdef";
  //   let clr = "#";
  //   for (var i = 0; i < 6; i++) {
  //     clr += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return clr;
  // };

  const handleClick = () => {
    setColor(() => {
        let letters = "0123456789abcdef";
        let clr = "#";
        for (var i = 0; i < 6; i++) {
          clr += letters[Math.floor(Math.random() * 16)];
        }
        return clr;
    });
    console.log(color);
    setCopied(false);
  };

  const ctc=()=>{
    setCopied(true);
  }

  return (
    <main className="w-full h-full relative ">
      <header className="w-full h-[20vh] md:h-[25vmin]  flex justify-center items-center text-4xl md:text-6xl">
        <h1 className="text-white font-bold w-fit h-fit">Get Random Color</h1>
      </header>
      <section className="w-full flex  items-center flex-col justify-start pt-8 gap-4 h-[calc(100%-20vh)] md:h-[calc(100%-25vmin)]">
        <div style={{backgroundColor:`${color}`}}
          className={`w-[75vw] h-[90vw] md:w-[300px] md:h-[300px] rounded-md border border-solid-2`}
        ></div>
        <div className="flex justify-center items-center gap-4 px-2">
          
          <button
            className="rounded text-white w-28 h-10 bg-black"
            onClick={handleClick}
          >
            Generate
          </button>
          <CopyToClipboard text={color}>
          <FaRegCopy className="text-white text-lg font-extrabold hover:cursor-pointer" onClick={ctc}/>
          </CopyToClipboard>
        
        </div>
        {copied ? <p style={{color:color}} className=" text-md font-bold">Copied!</p>:''}
      </section>
    </main>
  );
}

export default App;
