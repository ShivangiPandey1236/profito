import React, { useState } from 'react'
import { Code2, Server, Smartphone, Cloud, Database, ArrowRight } from 'lucide-react'

// Custom high-quality SVG icons for tech stack items
const TechIcons = {
  // --- FRONTEND ---
  React: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),
  Angular: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2.5L3 6l1.4 12.3L12 21.5l7.6-3.2L21 6 12 2.5z" fill="#DD0031" />
      <path d="M12 2.5v19l7.6-3.2L21 6 12 2.5z" fill="#C3002F" />
      <path d="M12 5.8L6.8 16.5h2.1l1.1-2.6h4.1l1.1 2.6h2.1L12 5.8zm1.4 6.5h-2.8L12 8.7l1.4 3.6z" fill="#FFFFFF" />
    </svg>
  ),
  Vuejs: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M2 3.5h4.5L12 13 17.5 3.5H22L12 20.5 2 3.5z" fill="#4FC08D" />
      <path d="M6.5 3.5L12 13l5.5-9.5h-3.5L12 7.5 9.5 3.5h-3z" fill="#35495E" />
    </svg>
  ),
  TailwindCSS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M6 12c.9-2.5 2.7-3.8 5.4-3.8 3.8 0 4.8 2.5 6.7 2.8 1.4.2 2.7-.4 3.9-1.8-1 2.5-2.8 3.8-5.5 3.8-3.7 0-4.8-2.5-6.6-2.8-1.4-.2-2.7.4-3.9 1.8zm-4 5c.9-2.5 2.7-3.8 5.4-3.8 3.8 0 4.8 2.5 6.7 2.8 1.4.2 2.7-.4 3.9-1.8-1 2.5-2.8 3.8-5.5 3.8-3.7 0-4.8-2.5-6.6-2.8-1.4-.2-2.7.4-3.9 1.8z" fill="#38BDF8" />
    </svg>
  ),
  Bootstrap: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#7952B3" />
      <path d="M8.5 7.5h4.2c1.7 0 2.8.8 2.8 2.1 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.1 1.9 2.3 0 1.5-1.2 2.4-3.1 2.4H8.5V7.5zm2.3 3.4h1.7c.6 0 1.1-.3 1.1-.8 0-.6-.5-.8-1.1-.8h-1.7v1.6zm0 3.7h2c.7 0 1.2-.3 1.2-.9 0-.6-.5-.9-1.2-.9h-2v1.8z" fill="#FFFFFF" />
    </svg>
  ),
  jQuery: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 12.2c-.8.8-1.9 1.3-3.2 1.3-1.6 0-2.8-.7-3.5-1.9l1.3-.8c.4.8 1.2 1.3 2.2 1.3.8 0 1.5-.3 2-.8.5-.5.7-1.2.7-2.1V7.5h1.7v3.8c0 1.2-.4 2.1-1.2 2.9z" fill="#0769AD" />
    </svg>
  ),
  HTML5: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.4 5h-9l.2 3h8.6l-.6 7.2-4.6 1.3-4.6-1.3-.3-3.7h2.6l.2 1.8 2.1.6 2.1-.6.2-2.3H6.8L6.1 7h11.3l-.3 3z" fill="#E34F26" />
    </svg>
  ),
  CSS3: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.4 5h-9l.2 3h8.6l-.6 7.2-4.6 1.3-4.6-1.3-.3-3.7h2.6l.2 1.8 2.1.6 2.1-.6.2-2.3H6.8L6.1 7h11.3l-.3 3z" fill="#1572B6" />
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
      <path d="M12.8 17.5c.5.8 1.1 1.3 2.2 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-2 1.5-3.4 3.9-3.4 1.7 0 2.9.6 3.7 2.1l-1.6 1c-.4-.7-1-1.1-2-1.1-.9 0-1.4.4-1.4 1 0 .7.5 1 1.6 1.5l.6.3c2 0.8 3.1 1.7 3.1 3.7 0 2.3-1.8 3.6-4.4 3.6-2.4 0-3.9-1.1-4.6-2.6l1.7-1zm-6.1.3c.4.7.8 1.1 1.6 1.1.8 0 1.2-.3 1.2-1.4V9h2.3v8.6c0 2.3-1.4 3.4-3.4 3.4-1.8 0-2.9-.9-3.4-2.1l1.7-1z" fill="#000000" />
    </svg>
  ),
  TypeScript: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
      <path d="M14.5 17.5c.5.8 1.1 1.3 2.2 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-2 1.5-3.4 3.9-3.4 1.7 0 2.9.6 3.7 2.1l-1.6 1c-.4-.7-1-1.1-2-1.1-.9 0-1.4.4-1.4 1 0 .7.5 1 1.6 1.5l.6.3c2 0.8 3.1 1.7 3.1 3.7 0 2.3-1.8 3.6-4.4 3.6-2.4 0-3.9-1.1-4.6-2.6l1.7-1zM5 11h3.3v8h2.3v-8h3.3V9H5v2z" fill="#FFFFFF" />
    </svg>
  ),
  Sass: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 4C7.5 4 4 7 4 10.5c0 2.2 1.4 4.1 3.5 5.2-.2.5-.6 1.3-1.5 2.1 1.8 0 3.1-.7 4-1.5.7.1 1.3.2 2 .2 4.5 0 8-3 8-6.5S16.5 4 12 4zm2.7 8.3c-.7.5-1.7.7-2.7.7-1.2 0-2.1-.3-2.1-1 0-.6.6-.9 1.6-1.1l.6-.1c1.2-.2 2.2-.6 2.2-1.7 0-1.3-1.2-2.1-2.9-2.1-1.5 0-2.6.5-3.2 1.4l1.1.7c.4-.6 1.1-.9 2-.9.9 0 1.4.3 1.4.9 0 .5-.4.7-1.4.9l-.7.1c-1.4.2-2.3.8-2.3 1.8 0 1.4 1.3 2.1 3.4 2.1 1.4 0 2.6-.4 3.3-1.1l-1.3-.8z" fill="#CC6699" />
    </svg>
  ),
  MaterialUI: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M0 2.475l12 6.928v12.144L0 14.619V2.475zm12 6.928l12-6.928v12.144l-12 6.928V9.403z" fill="#0081CB" />
      <path d="M12 9.403l6-3.464v6.928l-6 3.464V9.403z" fill="#00B0FF" />
    </svg>
  ),
  ChakraUI: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#319795" />
      <path d="M7 11.5L13.5 5v5.5H17L10.5 19v-5.5H7z" fill="#FFFFFF" />
    </svg>
  ),
  AntDesign: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11h-13L12 6.5z" fill="#FF4D4F" />
      <circle cx="12" cy="14" r="2.5" fill="#1890FF" />
    </svg>
  ),
  FluentUI: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#0078D4" />
      <path d="M8 8h8v2.5H11v3h4.5V16H8V8z" fill="#FFFFFF" />
    </svg>
  ),
  NextJS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#000000" />
      <path d="M14.8 16.5L9.2 8.5H7.5v7h1.6v-4.8l4.8 6.8h.9zM15 8.5h1.6v7H15v-7z" fill="#FFFFFF" />
    </svg>
  ),
  NuxtJS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M2.5 18.5l7.5-13 7.5 13H2.5z" fill="#00DC82" />
      <path d="M9.5 18.5l6-10.5 6 10.5H9.5z" fill="#00C58E" />
    </svg>
  ),
  Svelte: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M18.8 6.4c-1.3-2.1-4.2-2.7-6.4-1.4L6 8.5c-1.8 1.1-2.6 3.3-1.8 5.2.5 1.1 1.4 1.9 2.6 2.3l-1.2.7c-2.1 1.3-2.7 4.2-1.4 6.4 1.3 2.1 4.2 2.7 6.4 1.4l6.4-3.6c1.8-1.1 2.6-3.3 1.8-5.2-.5-1.1-1.4-1.9-2.6-2.3l1.2-.7c2.1-1.2 2.8-4.1 1.4-6.3z" fill="#FF3E00" />
    </svg>
  ),
  Gatsby: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#663399" />
      <path d="M12 5a7 7 0 106.3 10.1l-1.6-1.2A5 5 0 1112 7c1.3 0 2.5.5 3.4 1.3L13 10.7h6V4.8l-2.1 2.1A6.9 6.9 0 0012 5z" fill="#FFFFFF" />
    </svg>
  ),
  Webpack: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2zm0 2.2L5.2 7.8v7.4L12 19l6.8-3.8V7.8L12 4.2z" fill="#8DD6F9" />
      <path d="M12 7l4.3 2.5v5L12 17l-4.3-2.5v-5L12 7z" fill="#1C78C0" />
    </svg>
  ),
  Vite: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M21.5 4.5l-9.3 17.2a.5.5 0 01-.9 0L2 4.5a.5.5 0 01.6-.7l9.1 2.7 9.2-2.7a.5.5 0 01.6.7z" fill="#646CFF" />
      <path d="M17.5 3.5l-5.7 11.5-2.8-5.5 4.5-.9-3.5-3.6 7.5-1.5z" fill="#FFC920" />
    </svg>
  ),
  Parcel: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.5 3.7-7.5 3.8-7.5-3.8L12 4.3zM4 9l7 3.5v7.8l-7-3.5V9zm16 7.8l-7 3.5v-7.8l7-3.5v7.8z" fill="#214CE5" />
    </svg>
  ),
  Babel: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="3" fill="#F9DC3E" />
      <path d="M6 9h3v1.8H6V9zm0 3.2h3V14H6v-1.8zm5.5-3.2h6.5v1.8h-6.5V9zm0 3.2h6.5V14h-6.5v-1.8z" fill="#000000" />
    </svg>
  ),
  ESLint: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 3l-6.4 3.7v7.4L12 19.8l6.4-3.7V8.7L12 5z" fill="#4B32C6" />
      <path d="M12 8l4 2.3v4.6L12 17.2 8 14.9V10.3L12 8z" fill="#8080F2" />
    </svg>
  ),
  Prettier: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="3" rx="1.5" fill="#F7B93E" />
      <rect x="3" y="9" width="14" height="3" rx="1.5" fill="#EA5E5E" />
      <rect x="3" y="14" width="18" height="3" rx="1.5" fill="#1A2B49" />
      <rect x="3" y="19" width="10" height="3" rx="1.5" fill="#56B3B4" />
    </svg>
  ),
  StyledComponents: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <text x="50%" y="65%" textAnchor="middle" fontSize="18" fill="#DB7093">💅</text>
    </svg>
  ),
  Emotion: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#D36AC2" />
      <path d="M7 14s1.5 2 5 2 5-2 5-2M9 9h.01M15 9h.01" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Redux: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 4.5C8 4.5 5 7 5 10c0 4.5 7 9.5 7 9.5s7-5 7-9.5c0-3-3-5.5-7-5.5zm0 8a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="#764ABC" />
    </svg>
  ),
  MobX: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="4" fill="#FF9955" />
      <path d="M7 15V9h2.5l2.5 3.8L14.5 9H17v6h-2v-3.5L12.8 15h-1.6L9 11.5V15H7z" fill="#FFFFFF" />
    </svg>
  ),
  Recoil: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#3578E5" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="3" fill="#3578E5" />
    </svg>
  ),
  Storybook: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M4 3h16v18H4V3zm4 4v10h2V9h4v8h2V7H8z" fill="#FF4785" />
    </svg>
  ),
  Vitest: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M18.5 3L12 16 5.5 3H2l10 18L22 3h-3.5z" fill="#729B1B" />
      <path d="M16 3l-4 8-4-8H4l8 15L20 3h-4z" fill="#FCC72C" />
    </svg>
  ),

  // --- BACKEND ---
  NodeJS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6.5 3.6v7.3L12 19l-6.5-3.6V8.1L12 4.5z" fill="#339933" />
      <path d="M12 8a3 3 0 100 6 3 3 0 000-6z" fill="#339933" />
    </svg>
  ),
  Express: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#000000" />
      <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ex</text>
    </svg>
  ),
  Python: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5v.7H5.1S2 7.1 2 12.3c0 5.2 2.7 5 2.7 5h1.6v-2.3c0-2.6 2.3-2.6 2.3-2.6h5s2.4.1 2.4-2.3V5.1c0-2.4-2.3-3.1-4.1-3.1zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
      <path d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3v-2.4h-5v-.7h6.9s3.1.3 3.1-4.9c0-5.2-2.7-5-2.7-5h-1.6v2.3c0 2.6-2.3 2.6-2.3 2.6h-5s-2.4-.1-2.4 2.3v5.1c0 2.4 2.3 3.1 4.1 3.1zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
    </svg>
  ),
  Django: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#092E20" />
      <text x="12" y="16" textAnchor="middle" fill="#44B78B" fontSize="11" fontWeight="bold">dj</text>
    </svg>
  ),
  FastAPI: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#009688" />
      <path d="M11 5l-5 8h4.5L9.5 19l6.5-9h-4.5L13 5z" fill="#FFFFFF" />
    </svg>
  ),
  Java: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M8.8 16.5s-1.2.3.8.4c2.4.2 6.1.2 8.3-.5 0 0-1 .4-2.8.6-3.2.4-7.4.2-6.3-.5zm-.8 2.3s-1.5.5.7.5c2.7.1 7.2.1 10.1-.6 0 0-1.2.4-3.5.6-4.1.3-8.8.1-7.3-.5zm8.5-6.2c1.2 1.4-1.2 2.7-1.2 2.7s3.1-.7 1.7-2.1c-1.3-1.3-2.6-1.9-4.8-3-1.7-.8-3.7-1.4-3.7-1.4s1.2.4 2.3 1c2.7 1.3 4.5 1.5 5.7 2.8z" fill="#E76F00" />
      <path d="M12.4 3.5s2.2 2.2-2 5.5c-3.4 2.7.2 4.4.2 4.4s-1.8-1.5-.7-2.6c1.6-1.5 3.8-2.2 2.5-7.3z" fill="#5382A1" />
    </svg>
  ),
  SpringBoot: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#6DB33F" />
      <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
      <path d="M12 9v6M9 12h6" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Go: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="6" width="20" height="12" rx="3" fill="#00ADD8" />
      <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">GO</text>
    </svg>
  ),
  PHP: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
      <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">php</text>
    </svg>
  ),
  Laravel: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M4 6l8-4 8 4v12l-8 4-8-4V6zm8 2L7 10.5v5l5 2.5 5-2.5v-5L12 8z" fill="#FF2D20" />
    </svg>
  ),
  NestJS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L3 9v11l9 2 9-2V9l-9-7zm5 14l-5 3-5-3V9l5-3 5 3v7z" fill="#E0234E" />
    </svg>
  ),
  GraphQL: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2l8.7 5v10L12 22 3.3 17V7L12 2zm0 3L5.3 8.8v6.4L12 19l6.7-3.8V8.8L12 5z" fill="#E10098" />
      <circle cx="12" cy="12" r="3" fill="#E10098" />
    </svg>
  ),
  Rust: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#000000" strokeWidth="2" fill="none" />
      <path d="M12 6v12M6 12h12M8 8l8 8M16 8l-8 8" stroke="#000000" strokeWidth="1.5" />
    </svg>
  ),
  Ruby: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L4 8l3 12 10-3 3-11L12 2zm0 3l5 4-2 8-6 2-2-7 5-7z" fill="#CC342D" />
    </svg>
  ),
  Rails: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#D30001" />
      <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">RoR</text>
    </svg>
  ),
  CSharp: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#68217A" />
      <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">C#</text>
    </svg>
  ),
  DotNet: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#512BD4" />
      <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">.NET</text>
    </svg>
  ),
  Microservices: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" fill="#0284C7" />
      <circle cx="18" cy="6" r="3" fill="#0284C7" />
      <circle cx="12" cy="18" r="3" fill="#0284C7" />
      <path d="M6 6l6 12 6-12" stroke="#0284C7" strokeWidth="1.5" />
    </svg>
  ),
  SocketIO: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#010101" />
      <path d="M11 6l-4 7h5.5L11 18l5-7h-5.5L11 6z" fill="#FFFFFF" />
    </svg>
  ),
  Kafka: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#231F20" strokeWidth="2" fill="none" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#231F20" strokeWidth="2" />
    </svg>
  ),
  RabbitMQ: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#FF6600" />
      <circle cx="10" cy="10" r="2" fill="#FFFFFF" />
      <circle cx="15" cy="10" r="2" fill="#FFFFFF" />
    </svg>
  ),
  Elixir: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2.5C12 2.5 6 10 6 15a6 6 0 0012 0c0-5-6-12.5-6-12.5z" fill="#4E2A8E" />
    </svg>
  ),
  RESTAPI: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="4" fill="#2196F3" />
      <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">REST</text>
    </svg>
  ),
  gRPC: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="4" fill="#244C5A" />
      <text x="12" y="15" textAnchor="middle" fill="#24B39B" fontSize="8" fontWeight="bold">gRPC</text>
    </svg>
  ),

  // --- MOBILE APPS ---
  ReactNative: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),
  Flutter: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M14.3 2L5 11.3l2.8 2.8L17.1 4.8h-2.8zM14.3 11.3L8.7 17l5.6 5.6h2.8l-5.6-5.6 5.6-5.7h-2.8z" fill="#02569B" />
      <path d="M11.5 14.1l2.8-2.8 5.6 5.7h-2.8l-5.6-5.7z" fill="#0175C2" />
    </svg>
  ),
  Swift: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M19.6 14.7c-2.3 2.8-5.7 4.8-9.4 5.3 4-2.1 6.5-5.3 6.9-8.3-2.1 2.2-5 3.6-8.2 3.6 4.3-3.4 5.7-8 3.5-11.8 1.8 2.6 2.5 5.7 1.8 8.6 1.8-1.8 3.3-4.2 4.1-6.8.6 3.4-.1 6.8-1.9 9.4z" fill="#FA7343" />
    </svg>
  ),
  Kotlin: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M22 22H2V2h20L12 12l10 10z" fill="#7F52FF" />
      <path d="M2 22h10L2 12v10z" fill="#C757BC" />
      <path d="M12 2L2 12V2h10z" fill="#F88909" />
    </svg>
  ),
  iOS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M18.7 14.2c-.1-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-.1-.1-3.1-.4-4.8 1.1-.8.7-1.5.7-2.4 0-1.5-1.2-3.8-1.1-4.7-1-.6.1-2.4.4-3.6 2.1-1.3 2.2-1.6 5.8.5 9.4 1 1.7 2.3 3.6 4 3.5.9 0 1.6-.6 2.7-.6 1.1 0 1.7.6 2.7.6 1.7 0 2.9-1.6 3.9-3.2.7-1.1 1.2-2.3 1.2-2.4-.1-.2-2.5-1-2.6-3.7zM15.5 6.7c.8-1 1.3-2.3 1.1-3.7-1.1.1-2.5.8-3.3 1.7-.7.8-1.3 2.2-1.1 3.5 1.3.1 2.5-.5 3.3-1.5z" fill="#000000" />
    </svg>
  ),
  Android: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10H6v8zm10.5-13l1.4-2.4a.5.5 0 00-.8-.5L15.6 4.5A8.9 8.9 0 0012 3.8c-1.3 0-2.5.3-3.6.8L7 2.1a.5.5 0 00-.8.5L7.5 5A6.9 6.9 0 005 9h14c0-1.6-.6-3-1.5-4zM9 7a.8.8 0 110-1.5A.8.8 0 019 7zm6 0a.8.8 0 110-1.5A.8.8 0 0115 7z" fill="#3DDC84" />
    </svg>
  ),
  Expo: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#000000" />
      <path d="M7 8h10v2.5H9.5v3H16V16H7V8z" fill="#FFFFFF" />
    </svg>
  ),
  Ionic: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="#3880FF" />
      <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
    </svg>
  ),
  Capacitor: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#119EFF" />
      <path d="M12 6l-4 6h4l-2 6 6-7h-4l2-5z" fill="#FFFFFF" />
    </svg>
  ),
  Xamarin: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L4 9v6l8 7 8-7V9l-8-7zm0 4l5 4.5v3.5L12 18l-5-4v-3.5L12 6z" fill="#3498DB" />
    </svg>
  ),
  Dart: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M4 4l8 4 8-4-8 16L4 4z" fill="#0175C2" />
    </svg>
  ),
  ObjC: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#00599E" />
      <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">C/C++</text>
    </svg>
  ),
  PWA: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#5A0FC8" />
      <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">PWA</text>
    </svg>
  ),
  Fastlane: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="#00F260" />
      <path d="M12 6l5 12h-3l-2-5h-2l1 5H8l4-12z" fill="#000000" />
    </svg>
  ),

  // --- CLOUD & DEVOPS ---
  AWS: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M6.7 13.5c-1.4 0-2.3-.7-2.3-1.8 0-1.5 1.5-2.1 4-2.1h1.2v-.4c0-.8-.4-1.3-1.5-1.3-.8 0-1.6.3-2.1.6l-.4-1c.7-.5 1.7-.8 2.8-.8 1.9 0 2.8.9 2.8 2.4v4.3H10v-.7c-.6.6-1.5 1-2.4 1h-.9zm.5-1.1c.8 0 1.5-.4 1.9-.9v-1.1h-1c-1.4 0-2.2.3-2.2 1.1 0 .6.5.9 1.3.9zm6.6 1.1c-1.2 0-2.1-.5-2.5-1.3l.9-.6c.3.5.9.8 1.6.8.8 0 1.2-.4 1.2-.9 0-.5-.3-.8-1.4-1.1-1.4-.4-2.1-1-2.1-2 0-1.3 1.1-2.2 2.6-2.2 1.1 0 1.9.4 2.3 1.1l-.8.6c-.3-.4-.8-.7-1.5-.7-.7 0-1.1.3-1.1.8 0 .4.3.7 1.3 1 1.5.4 2.2 1.1 2.2 2.1.2 1.3-1 2.4-2.7 2.4z" fill="#FF9900" />
      <path d="M4 17c5 2.5 11 2.5 16 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  GoogleCloud: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M19.3 10.5A6 6 0 008 8.1 4.5 4.5 0 004 16.5h15a4 4 0 00.3-8z" fill="#4285F4" />
    </svg>
  ),
  Azure: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M5.5 19h13l-4.5-8-3.5 5-2.5-5.5L5.5 19z" fill="#0089D6" />
      <path d="M3.5 19l6.5-14 3.5 7.5L3.5 19z" fill="#0072C6" />
    </svg>
  ),
  Docker: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm-3 0h2v2H7V5zm12 6c-.3-.2-1.1-.3-1.8.1-.5.3-.9.8-1.2 1.3H2v1.5C2 16.5 5.5 19 11 19s9-2.5 9-7.1v-.9h-1z" fill="#2496ED" />
    </svg>
  ),
  Kubernetes: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2zm0 3.5L5.8 8.8v6.4L12 18.5l6.2-3.3V8.8L12 5.5z" fill="#326CE5" />
      <circle cx="12" cy="12" r="3" fill="#326CE5" />
    </svg>
  ),
  Nginx: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm4 13.5l-4-6v6H9.5V8.5h2.5l4 6v-6H18v9h-2z" fill="#009639" />
    </svg>
  ),
  GitHubActions: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#2088FF" />
      <path d="M8 8l4 4-4 4M13 16h3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Terraform: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M1.5 4.5l6.5 3.7v7.5L1.5 12V4.5zm7.5 4.2l6.5-3.7V12L9 15.7V8.7zm0 8.2l6.5-3.7v7.5L9 24.4v-7.5zm7.5-12.4l6.5 3.7V12l-6.5-3.7V4.5z" fill="#844FBA" />
    </svg>
  ),
  Netlify: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#00C7B7" />
      <path d="M8 12l4-4 4 4-4 4-4-4z" fill="#FFFFFF" />
    </svg>
  ),
  Cloudflare: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M19.3 10.5A6 6 0 008 8.1 4.5 4.5 0 004 16.5h15a4 4 0 00.3-8z" fill="#F38020" />
    </svg>
  ),
  Jenkins: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="#D33833" />
      <path d="M9 12h6M12 9v6" stroke="#FFFFFF" strokeWidth="2" />
    </svg>
  ),
  GitLab: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 22l-9.5-7 3-11.5 3 6.5h7l3-6.5 3 11.5L12 22z" fill="#FC6D26" />
    </svg>
  ),
  Ansible: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#EE0000" />
      <path d="M12 6l-5 12h2.5l1.2-3h3.6l.8 3H17L12 6zm-1 6.5l1.7-4.5 1.8 4.5h-3.5z" fill="#FFFFFF" />
    </svg>
  ),
  Helm: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#0F1689" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="3" fill="#0F1689" />
    </svg>
  ),
  Prometheus: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 3C8 3 6 7 6 11c0 5 4 8 6 10 2-2 6-5 6-10 0-4-2-8-6-8z" fill="#E6522C" />
    </svg>
  ),
  Grafana: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="#F46800" strokeWidth="2" fill="none" />
      <path d="M8 12c2 0 4 2 8 0" stroke="#F46800" strokeWidth="2" />
    </svg>
  ),

  // --- DATABASES ---
  PostgreSQL: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 3C7 3 3 6.5 3 11c0 3.5 2.5 6.5 6 7.5v2.5l3.5-2h.5c5 0 9-3.5 9-8s-4-8-10-8zm-2 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#4169E1" />
    </svg>
  ),
  MongoDB: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2s-5.5 5.5-5.5 11c0 3.5 2.5 6.5 5.5 7.5 3-1 5.5-4 5.5-7.5C17.5 7.5 12 2 12 2zm0 15v-9" stroke="#47A248" strokeWidth="2" fill="none" />
      <path d="M12 2s-5.5 5.5-5.5 11c0 3.5 2.5 6.5 5.5 7.5 3-1 5.5-4 5.5-7.5C17.5 7.5 12 2 12 2z" fill="#47A248" opacity="0.3" />
    </svg>
  ),
  MySQL: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 3C6.5 3 2 6.5 2 11c0 3.8 3.3 7 8 7.8v2.2l3.5-2h.5c5.5 0 10-3.5 10-8s-4.5-8-10-8z" fill="#4479A1" />
      <path d="M7 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#FFFFFF" />
    </svg>
  ),
  Redis: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 6 12 2.3 19.5 6 12 9.5zM2 12l10 5 10-5v2.5l-10 5-10-5V12zm0 5l10 5 10-5v2.5l-10 5-10-5V17z" fill="#DC382D" />
    </svg>
  ),
  Supabase: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M13.4 2.1l-11 13.2c-.4.5-.1 1.2.6 1.2h8.3l-1.6 5.4c-.2.7.7 1.2 1.2.6l11-13.2c.4-.5.1-1.2-.6-1.2h-8.3l1.6-5.4c.2-.7-.7-1.2-1.2-.6z" fill="#3ECF8E" />
    </svg>
  ),
  Firebase: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M3.8 16.6L7.2 3.1c.1-.4.7-.4.8 0l2.3 4.4L3.8 16.6zm16.4 0L14.7 6.3c-.2-.3-.7-.3-.8 0L3.8 16.6l7.7 4.3c.3.2.7.2 1 0l7.7-4.3z" fill="#FFCA28" />
      <path d="M12.9 8.2l-2.1-4c-.2-.4-.8-.4-.9 0L8 8.2l4.9 8.3 2.1-4-2.1-4.3z" fill="#FFA000" />
    </svg>
  ),
  Cassandra: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="#1287B1" />
      <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
    </svg>
  ),
  MariaDB: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="4" fill="#003545" />
      <text x="12" y="15" textAnchor="middle" fill="#00A3E0" fontSize="8" fontWeight="bold">MariaDB</text>
    </svg>
  ),
  Prisma: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M18.5 2.5l-13 15 3.5 4 13-15-3.5-4zm-8.8 16.8L5.5 15l8.8-10.2 4.2 4.8-8.8 10.2z" fill="#2D3748" />
    </svg>
  ),
  Neo4j: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" fill="#008CC1" />
      <circle cx="18" cy="6" r="3" fill="#008CC1" />
      <circle cx="12" cy="18" r="4" fill="#008CC1" />
      <path d="M6 6l6 12M18 6l-6 12" stroke="#008CC1" strokeWidth="2" />
    </svg>
  ),
  Elasticsearch: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#005571" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="#F04E98" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="#FEB6C1" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="#00A9E0" />
    </svg>
  ),
  DynamoDB: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L18 8v8l-6 3-6-3V8l6-3.5z" fill="#4053D6" />
    </svg>
  ),
  CockroachDB: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#69B3A2" />
      <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
    </svg>
  ),
  ClickHouse: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="4" width="3" height="16" fill="#FFCC00" />
      <rect x="8" y="4" width="3" height="16" fill="#FFCC00" />
      <rect x="13" y="4" width="3" height="16" fill="#FFCC00" />
      <rect x="18" y="4" width="3" height="16" fill="#FFCC00" />
    </svg>
  ),
  SQLite: () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="16" rx="4" fill="#003B57" />
      <text x="12" y="15" textAnchor="middle" fill="#00A3E0" fontSize="8" fontWeight="bold">SQL</text>
    </svg>
  )
}

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('frontend')

  const categories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code2,
      subtitle: 'BUILDING INTERACTIVE EXPERIENCES',
      items: [
        { name: 'React', icon: TechIcons.React },
        { name: 'Angular', icon: TechIcons.Angular },
        { name: 'Vuejs', icon: TechIcons.Vuejs },
        { name: 'Tailwind CSS', icon: TechIcons.TailwindCSS },
        { name: 'Bootstrap', icon: TechIcons.Bootstrap },
        { name: 'jQuery', icon: TechIcons.jQuery },
        { name: 'HTML5', icon: TechIcons.HTML5 },
        { name: 'CSS3', icon: TechIcons.CSS3 },
        { name: 'JavaScript', icon: TechIcons.JavaScript },
        { name: 'TypeScript', icon: TechIcons.TypeScript },
        { name: 'Sass', icon: TechIcons.Sass },
        { name: 'Material UI', icon: TechIcons.MaterialUI },
        { name: 'Chakra UI', icon: TechIcons.ChakraUI },
        { name: 'Ant Design', icon: TechIcons.AntDesign },
        { name: 'Fluent UI', icon: TechIcons.FluentUI },
        { name: 'NextJS', icon: TechIcons.NextJS },
        { name: 'NuxtJS', icon: TechIcons.NuxtJS },
        { name: 'Svelte', icon: TechIcons.Svelte },
        { name: 'Gatsby', icon: TechIcons.Gatsby },
        { name: 'Webpack', icon: TechIcons.Webpack },
        { name: 'Vite', icon: TechIcons.Vite },
        { name: 'Parcel', icon: TechIcons.Parcel },
        { name: 'Babel', icon: TechIcons.Babel },
        { name: 'ESLint', icon: TechIcons.ESLint },
        { name: 'Prettier', icon: TechIcons.Prettier },
        { name: 'Styled Components', icon: TechIcons.StyledComponents },
        { name: 'Emotion', icon: TechIcons.Emotion },
        { name: 'Redux', icon: TechIcons.Redux },
        { name: 'MobX', icon: TechIcons.MobX },
        { name: 'Recoil', icon: TechIcons.Recoil },
        { name: 'Storybook', icon: TechIcons.Storybook },
        { name: 'Vitest', icon: TechIcons.Vitest }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Server,
      subtitle: 'ROBUST & SCALABLE SERVER LOGIC',
      items: [
        { name: 'NodeJS', icon: TechIcons.NodeJS },
        { name: 'Express', icon: TechIcons.Express },
        { name: 'Python', icon: TechIcons.Python },
        { name: 'Django', icon: TechIcons.Django },
        { name: 'FastAPI', icon: TechIcons.FastAPI },
        { name: 'Java', icon: TechIcons.Java },
        { name: 'Spring Boot', icon: TechIcons.SpringBoot },
        { name: 'Go', icon: TechIcons.Go },
        { name: 'PHP', icon: TechIcons.PHP },
        { name: 'Laravel', icon: TechIcons.Laravel },
        { name: 'NestJS', icon: TechIcons.NestJS },
        { name: 'GraphQL', icon: TechIcons.GraphQL },
        { name: 'REST API', icon: TechIcons.RESTAPI },
        { name: 'gRPC', icon: TechIcons.gRPC },
        { name: 'Ruby', icon: TechIcons.Ruby },
        { name: 'Rails', icon: TechIcons.Rails },
        { name: 'C#', icon: TechIcons.CSharp },
        { name: '.NET', icon: TechIcons.DotNet },
        { name: 'Rust', icon: TechIcons.Rust },
        { name: 'Microservices', icon: TechIcons.Microservices },
        { name: 'Socket.io', icon: TechIcons.SocketIO },
        { name: 'Kafka', icon: TechIcons.Kafka },
        { name: 'RabbitMQ', icon: TechIcons.RabbitMQ },
        { name: 'Elixir', icon: TechIcons.Elixir }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Apps',
      icon: Smartphone,
      subtitle: 'NATIVE & CROSS-PLATFORM MOBILITY',
      items: [
        { name: 'React Native', icon: TechIcons.ReactNative },
        { name: 'Flutter', icon: TechIcons.Flutter },
        { name: 'Swift', icon: TechIcons.Swift },
        { name: 'Kotlin', icon: TechIcons.Kotlin },
        { name: 'iOS', icon: TechIcons.iOS },
        { name: 'Android', icon: TechIcons.Android },
        { name: 'Expo', icon: TechIcons.Expo },
        { name: 'Ionic', icon: TechIcons.Ionic },
        { name: 'Firebase', icon: TechIcons.Firebase },
        { name: 'PWA', icon: TechIcons.PWA },
        { name: 'Capacitor', icon: TechIcons.Capacitor },
        { name: 'Xamarin', icon: TechIcons.Xamarin },
        { name: 'Dart', icon: TechIcons.Dart },
        { name: 'Obj-C', icon: TechIcons.ObjC },
        { name: 'SQLite', icon: TechIcons.SQLite },
        { name: 'Fastlane', icon: TechIcons.Fastlane }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & Devops',
      icon: Cloud,
      subtitle: 'AUTOMATED DEPLOYMENT & INFRASTRUCTURE',
      items: [
        { name: 'AWS', icon: TechIcons.AWS },
        { name: 'Google Cloud', icon: TechIcons.GoogleCloud },
        { name: 'Azure', icon: TechIcons.Azure },
        { name: 'Docker', icon: TechIcons.Docker },
        { name: 'Kubernetes', icon: TechIcons.Kubernetes },
        { name: 'Nginx', icon: TechIcons.Nginx },
        { name: 'GitHub Actions', icon: TechIcons.GitHubActions },
        { name: 'Terraform', icon: TechIcons.Terraform },
        { name: 'Netlify', icon: TechIcons.Netlify },
        { name: 'Cloudflare', icon: TechIcons.Cloudflare },
        { name: 'Jenkins', icon: TechIcons.Jenkins },
        { name: 'GitLab CI', icon: TechIcons.GitLab },
        { name: 'Ansible', icon: TechIcons.Ansible },
        { name: 'Helm', icon: TechIcons.Helm },
        { name: 'Prometheus', icon: TechIcons.Prometheus },
        { name: 'Grafana', icon: TechIcons.Grafana }
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: Database,
      subtitle: 'HIGH-PERFORMANCE DATA STORES',
      items: [
        { name: 'PostgreSQL', icon: TechIcons.PostgreSQL },
        { name: 'MongoDB', icon: TechIcons.MongoDB },
        { name: 'MySQL', icon: TechIcons.MySQL },
        { name: 'Redis', icon: TechIcons.Redis },
        { name: 'Supabase', icon: TechIcons.Supabase },
        { name: 'Firebase', icon: TechIcons.Firebase },
        { name: 'Cassandra', icon: TechIcons.Cassandra },
        { name: 'MariaDB', icon: TechIcons.MariaDB },
        { name: 'Prisma', icon: TechIcons.Prisma },
        { name: 'Neo4j', icon: TechIcons.Neo4j },
        { name: 'Elasticsearch', icon: TechIcons.Elasticsearch },
        { name: 'DynamoDB', icon: TechIcons.DynamoDB },
        { name: 'CockroachDB', icon: TechIcons.CockroachDB },
        { name: 'ClickHouse', icon: TechIcons.ClickHouse },
        { name: 'SQLite', icon: TechIcons.SQLite }
      ]
    }
  ]

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0]
  const ActiveIcon = activeCategory.icon

  return (
    <section className="mb-24 pb-6 sm:pb-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
        {/* Left Column: Heading, Subtitle & Interactive Vertical Tabs Sidebar */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div>
            {/* Top Eyebrow Subtitle */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#2196F3] uppercase font-sans">
                TECHNOLOGY STACK
              </span>
              <span className="w-10 h-[2px] bg-[#2196F3] rounded-full"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0f172a] tracking-tight mb-4 font-sans leading-[1.15]">
              Future Ready{' '}
              <span className="block text-[#2196F3]">
                Technology Stack
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 font-sans max-w-md">
              We work with modern technologies to build fast, responsive and scalable web applications that deliver great user experiences.
            </p>
          </div>

          {/* Category Tabs (Vertical List on Desktop, Horizontal Pill Row on Mobile) */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 sm:gap-2.5 pb-2 lg:pb-0 scrollbar-none max-w-full">
            {categories.map((category) => {
              const IconComp = category.icon
              const isActive = activeTab === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl text-left transition-all duration-300 shrink-0 lg:w-full group cursor-pointer ${
                    isActive
                      ? 'bg-[#e0f2fe]/90 text-[#2196F3] font-bold border border-sky-200/90 shadow-sm shadow-sky-100'
                      : 'bg-slate-50/80 lg:bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-100 lg:border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isActive
                          ? 'bg-[#2196F3] text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800'
                      }`}
                    >
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-bold font-sans tracking-wide whitespace-nowrap">
                      {category.name}
                    </span>
                  </div>

                  {isActive && (
                    <ArrowRight className="w-4 h-4 text-[#2196F3] ml-2.5 hidden lg:inline-block shrink-0" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Interactive White Panel Display Card */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <div className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/80 shadow-xl shadow-slate-200/40 p-5 sm:p-7 lg:p-8 flex flex-col h-full transition-all duration-300 overflow-hidden">
            {/* Top Bar inside Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#2196F3] text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                  <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black !text-[#0f172a] font-sans tracking-tight">
                  {activeCategory.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:block w-10 lg:w-12 h-[1px] bg-slate-200"></span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase font-sans">
                  {activeCategory.subtitle}
                </span>
              </div>
            </div>

            {/* Grid of Tech Stack Items */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3.5 sm:gap-4">
              {activeCategory.items.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#2196F3]/40 hover:-translate-y-1 rounded-2xl p-2.5 sm:p-3 lg:p-3.5 flex flex-col items-center justify-center gap-2 transition-all duration-300 group cursor-pointer h-[100px] sm:h-[108px] lg:h-[112px] w-full"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center shrink-0">
                      <IconComponent />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 group-hover:text-[#2196F3] text-center leading-tight transition-colors font-sans w-full px-0.5 line-clamp-2">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
