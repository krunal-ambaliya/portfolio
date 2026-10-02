import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6" }) => {
  const norm = name.toLowerCase();

  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2C6.5 2 6.8 4.3 6.8 4.3l.03 2.4h5.2v.7H4.5S2 7.1 2 12.4s2.2 5.1 2.2 5.1h1.3v-1.8s-.1-2.2 2.2-2.2h5.3s2.1.1 2.1-2.1V6.3S15.6 2 11.9 2zm-2.4 1.7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c5.4 0 5.1-2.3 5.1-2.3l-.03-2.4h-5.2v-.7h7.5s2.5.3 2.5-5-2.2-5.1-2.2-5.1h-1.3v1.8s.1 2.2-2.2 2.2h-5.3s-2.1-.1-2.1 2.1v5.1s-.5 4.3 3.2 4.3zm2.4-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5v-6h2.2v4.8c.4.7 1.2.9 1.9.9 1 0 1.6-.5 1.6-1.5 0-1.1-.7-1.4-2.1-2l-.7-.3c-1.8-.7-2.6-1.6-2.6-3.2 0-2 1.6-3.2 3.8-3.2 1.5 0 2.8.6 3.5 1.6l-1.6 1.3c-.5-.7-1.1-1-1.9-1-.8 0-1.3.4-1.3 1 0 .7.5 1 1.7 1.5l.7.3c2.2.9 3 1.8 3 3.5 0 2.2-1.7 3.4-4.2 3.4-2.2 0-3.6-.9-4.3-2.1z" fill="#000000" />
      </svg>
    );
  }

  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  if (norm.includes('bootstrap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path d="M7.5 6.5h4.6c1.6 0 2.8.8 2.8 2.1 0 1-.6 1.7-1.6 1.9 1.3.2 2.1 1.1 2.1 2.3 0 1.5-1.3 2.7-3.2 2.7H7.5V6.5zm2.3 3.5h2.1c.6 0 1-.3 1-.8s-.4-.8-1-.8H9.8V10zm0 3.6h2.4c.7 0 1.2-.4 1.2-.9s-.5-.9-1.2-.9H9.8v1.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes('html5') || norm === 'html') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.5 17 6.5 1.8 6.5-1.8L20 3H4z" fill="#E34F26" />
        <path d="M12 4.5v15.7l5.2-1.4 1.2-14.3H12z" fill="#EF652A" />
        <path d="M7.5 7.5h9l-.2 2.3H9.7l.2 2.4h6.7l-.6 6.3-4 1.1-4-1.1-.3-3.2h2.2l.1 1.6 2 .5 2-.5.2-2.4H7.2L7.5 7.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes('css3') || norm === 'css') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.5 17 6.5 1.8 6.5-1.8L20 3H4z" fill="#1572B6" />
        <path d="M12 4.5v15.7l5.2-1.4 1.2-14.3H12z" fill="#33A9DC" />
        <path d="M7.5 7.5h9l-.2 2.3H9.7l.2 2.4h6.7l-.6 6.3-4 1.1-4-1.1-.3-3.2h2.2l.1 1.6 2 .5 2-.5.2-2.4H7.2L7.5 7.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes('mysql') || norm === 'sql') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3.5" stroke="#00758F" strokeWidth="1.8" fill="#F29111" fillOpacity="0.2" />
        <path d="M4 7v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V7" stroke="#00758F" strokeWidth="1.8" />
        <path d="M4 12v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5" stroke="#00758F" strokeWidth="1.8" />
      </svg>
    );
  }

  if (norm === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.7l-8.3-8.3c-.8-.8-2-.8-2.8 0L8.7 4.2 11 6.5c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.2 2.2c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.4-1.9L12 9.8v4.9c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.5-.4.8-.5V9.6c-.3-.1-.5-.3-.8-.5-.6-.6-.6-1.5-.1-2.1L7.5 4.6 2.4 9.7c-.8.8-.8 2 0 2.8l8.3 8.3c.8.8 2 .8 2.8 0l8.1-8.1c.8-.7.8-2 0-2.8z" />
      </svg>
    );
  }

  if (norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  if (norm.includes('vs code') || norm.includes('vscode')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2.5L7.2 10.8 3.5 7.8 2 8.7l3 3.3-3 3.3 1.5.9 3.7-3 10.3 8.3 4.5-2.2V4.7l-4.5-2.2zm0 4.9v9.2l-6-4.6 6-4.6z" fill="#007ACC" />
      </svg>
    );
  }

  if (norm.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 6.5 5.5 6.5 8c0 1.2.2 2.8-.5 4.3-.8 1.8-2 2.7-2 4.2 0 2.5 3.5 3.5 8 3.5s8-1 8-3.5c0-1.5-1.2-2.4-2-4.2-.7-1.5-.5-3.1-.5-4.3 0-2.5-1.5-6-5.5-6z" fill="#FFA500" />
        <circle cx="10" cy="7.5" r="1" fill="#000000" />
        <circle cx="14" cy="7.5" r="1" fill="#000000" />
        <path d="M12 9.5c-1 0-1.5.7-1.5 1.2 0 .5.7 1.3 1.5 1.3s1.5-.8 1.5-1.3c0-.5-.5-1.2-1.5-1.2z" fill="#E65100" />
      </svg>
    );
  }

  if (norm.includes('rest') || norm.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="#2563EB" strokeWidth="1.8" />
        <path d="M7 12h3m4 0h3M12 9v6" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7" cy="12" r="1" fill="#2563EB" />
        <circle cx="17" cy="12" r="1" fill="#2563EB" />
      </svg>
    );
  }

  if (norm.includes('wordpress')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#21759B">
        <circle cx="12" cy="12" r="10" />
        <path d="M3.5 12c0 3.8 2.5 7.1 6.1 8.2L5 8.7C4.1 9.7 3.5 10.8 3.5 12zm13.1-.5c0-1.2-.4-2-0.8-2.7-.5-.8-1-1.5-1-2.4 0-1 .7-1.9 1.8-1.9.1 0 .2 0 .2.02C15.3 3.6 13.7 3 12 3c-3 0-5.7 1.5-7.3 3.8l5.2 14.3 1.5-4.4-2.1-5.9c-.3-.9-.6-1.5-.6-2.1 0-.6.4-1.2 1.3-1.2.7 0 1.2.5 1.2 1.2 0 .4-.1.8-.2 1.2L13 16.3l2.8-7.9c.5-.9.8-1.7.8-2.4zm-4.3 8.8l-2.4-7-2.6 7.4c1.1.4 2.3.6 3.5.6 0 0 .8-.1 1.5-1zm3.8-.9l-3.3-9.5 2.8-7.8c2.6 1.7 4.4 4.6 4.4 7.9 0 3.7-2 6.9-3.9 9.4z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (norm.includes('responsive') || norm.includes('design')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <path d="M6 20h12M12 16v4" strokeLinecap="round" />
        <rect x="15" y="8" width="5" height="7" rx="1" fill="#8B5CF6" fillOpacity="0.2" />
      </svg>
    );
  }

  // Default fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
