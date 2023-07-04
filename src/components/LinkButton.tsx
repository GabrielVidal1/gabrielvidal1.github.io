import React from "react";

interface LinkButtonProps {
  to: string;
  name?: string;
  icon?: string;
}

const getLinkIconAndName = (to: string) => {
  if (to.includes("github")) {
    return {
      icon: "github",
      name: "Github - " + to.match(/github.com\/(.*)/)?.[1],
      className: "bg-red-200",
    };
  }
  return {
    icon: "link",
    name: to,
    className: "link",
  };
};

const LinkButton: React.FC<LinkButtonProps> = ({ to, icon, name }) => {
  const style = getLinkIconAndName(to);

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <button
        className={`p-2 px-4 m-1 bg-slate-400 rounded-sm shadow-md hover:shadow-lg text-black ${style.className}`}
      >
        {name ?? style.name}
      </button>
    </a>
  );
};
export default LinkButton;
