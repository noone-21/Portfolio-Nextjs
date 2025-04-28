"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Intro() {
  const [typedText, setTypedText] = useState("");
  const textToType = "Full Stack Developer 🖥️";
  const typingSpeed = 100;

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/DanishAhmed.pdf'; // Update this path
    link.download = 'DanishAhmed.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Check if we've shown the typing effect before
    const hasShownTyping = localStorage.getItem("hasShownTyping");

    if (hasShownTyping) {
      // If we've shown it before, just set the full text immediately
      setTypedText(textToType);
      return;
    }

    let currentIndex = 0;
    setTypedText("");
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Mark that we've shown the typing effect
        localStorage.setItem("hasShownTyping", "true");
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-8 shadow dark:bg-black dark:shadow-dark">
      <div className="relative mb-8 h-56 w-56 overflow-hidden rounded-xl mx-auto">
        <Image
          src="/assets/img/profileimg.png"
          alt="Danish Ahmed"
          width={224}
          height={224}
          className="h-full w-full object-cover object-top "
        />
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-semibold dark:text-light text-center">
          {"Danish Ahmed 👋"}
        </h3>
        <p className="mt-3 text-xl text-primary text-center">{typedText}</p>

        {/* CTA buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={downloadResume}
            className="inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-4 py-2 font-medium text-dark transition hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 3v12" />
              <path d="M8 11l4 4 4-4" />
              <path d="M4 19h16" />
            </svg>

            <span>Resume</span>
          </button>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText("ahmed.danish800@gmail.com");
              // You might want to add a toast notification here
            }}
            className="inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-4 py-2 font-medium text-dark transition hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
              <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
            </svg>
            <span>Copy Email</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center gap-4">
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/no__one_21?t=ir3SJmqdWngEN1q8ia9kyw&s=08"
              className="text-slate-600 transition hover:text-[#1DA1F2] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500 dark:hover:text-[#1DA1F2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            {/* Linked In */}
            <a
              href="https://www.linkedin.com/in/noone21/"
              className="text-slate-600 transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="h-6 w-6 transition hover:fill-[#0A66C2]"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340c-31.69 0-57.34-25.65-57.34-57.34S22.15-7.29 53.84-7.29c31.69 0 57.34 25.65 57.34 57.34s-25.65 57.34-57.34 57.34zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.5-48.3 87.5-48.3 93.6 0 110.8 61.6 110.8 141.6V448z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/noone-21"
              className="text-slate-600 transition hover:text-[#3b3b3b] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500 dark:hover:text-[#3b3b3b]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 transition"
              >
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
              </svg>
            </a>
            {/* Discord */}
            <a
              href="https://discordapp.com/users/1244979225924993094"
              className="text-slate-600 transition hover:text-[#FF0000] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:text-slate-500 dark:hover:text-[#FF0000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 71 55"
                fill="currentColor"
                className="h-6 w-6 transition hover:fill-[#5865F2]"
              >
                <path d="M60.104 4.552A58.6 58.6 0 0046.852.4a.23.23 0 00-.244.115 40.876 40.876 0 00-1.875 3.843 56.08 56.08 0 00-16.498 0 40.875 40.875 0 00-1.882-3.843.228.228 0 00-.243-.115A58.58 58.58 0 0010.89 4.552a.211.211 0 00-.096.08C.79 19.191-1.425 33.54.419 47.778a.253.253 0 00.096.177 59.613 59.613 0 0017.853 6.284.23.23 0 00.25-.088 42.191 42.191 0 003.65-5.912.223.223 0 00-.123-.316 37.948 37.948 0 01-5.484-2.611.228.228 0 01-.023-.373c.369-.278.738-.568 1.095-.861a.23.23 0 01.24-.03c11.51 5.263 24.008 5.263 35.472 0a.229.229 0 01.243.027c.358.293.727.584 1.097.862a.228.228 0 01-.021.373 35.816 35.816 0 01-5.487 2.61.223.223 0 00-.122.317 48.372 48.372 0 003.648 5.911.23.23 0 00.25.089 59.503 59.503 0 0017.854-6.284.228.228 0 00.096-.176c1.934-14.224-.989-28.548-9.385-43.147a.203.203 0 00-.095-.08zM23.725 37.206c-3.552 0-6.462-3.256-6.462-7.253 0-3.997 2.88-7.253 6.462-7.253 3.596 0 6.49 3.278 6.462 7.253 0 3.997-2.88 7.253-6.462 7.253zm23.55 0c-3.552 0-6.462-3.256-6.462-7.253 0-3.997 2.88-7.253 6.462-7.253 3.596 0 6.49 3.278 6.462 7.253 0 3.997-2.866 7.253-6.462 7.253z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
