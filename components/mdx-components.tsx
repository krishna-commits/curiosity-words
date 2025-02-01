'use client'
import { useEffect } from "react";
import { useMDXComponent } from "next-contentlayer/hooks"
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import { useState } from "react";

interface CopyButtonProps {
  text: string;
}
interface PreProps {
  children: any;
  raw: any;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
 
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
 
    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };
 
  return (
    <button className="border bg-transparent h-6  text-xs hover:bg-slate-700 text-slate-300 font-mono hover:text-white px-2  border-slate-500 hover:border-transparent rounded" disabled={isCopied} onClick={copy}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};

const Pre = ({ children, raw, ...props }: PreProps) => {

  const textContent = Array.isArray(children) ? children.map(child => child?.props.children).join('') : children?.props.children;

  return (
    <pre {...props} className={"p-4 relative dark:bg-slate-800"} >
      <div className={"code-header flex justify-end mr-2 mt-0 absolute right-0"}>
        <CopyButton  text={textContent} /> {/* Pass raw text to CopyButton */}
      </div>
      {children}
    </pre>
  );
};


const components = {
  pre: Pre,
}

interface MdxProps {
  code: string
}


export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}

