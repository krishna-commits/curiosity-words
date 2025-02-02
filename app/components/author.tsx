"use client";
import { siteConfig } from "@/config/site";
import moment from "moment";
import {
  FacebookShare,
  LinkedinShare,
  TelegramShare,
  WhatsappShare,
  TwitterShare,
} from "react-share-kit";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
}
export default function Author({ date,title }: { date: string ; title:string }) {
  const shareUrl = window.location.href;
  const CopyButton = ({ text }: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 10000);
    };

    return (
      <>
        <button
          data-tooltip-target="tooltip-default"
          type="button"
          className="bg-slate-200 rounded-full px-2 h-8 hover:bg-slate-300"
          disabled={isCopied}
          onClick={copy}
        >
            {!isCopied ?
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-copy"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
        }
          
        </button>
      
      </>
    );
  };
  return (
    <div className="flex items-center space-x-3">
      {/* <img
        className="inline-block h-12 w-12 rounded-full ring-1 ring-slate-200"
        src={siteConfig.author_image}
        alt=""
      /> */}
      <div className="flex justify-between w-full">
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">{siteConfig.author}</span>
           </div>
          <div className="text-sm text-gray-500">
            <time dateTime="2024-03-06">{moment(date).format("ll")}</time>
          </div>
        </div>
        <div className="flex gap-2 align-middle justify-center items-center">
          <CopyButton  text={typeof window !== 'undefined' && window.location.href ? window.location.href : 'xxx'} />
        </div>
      </div>
    </div>
  );
}
