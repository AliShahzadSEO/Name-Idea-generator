"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ className }) => {
  const pathName = usePathname();
  const pathArr = pathName.split("/").filter((path) => path);
  

  return (
    <div className={`flex items-center ${className}`}>
      <li key="home" className="flex items-center">
        <Link href="/">Home</Link>
        {pathArr.length > 0 && (
          <svg
            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
        )}
      </li>
      {pathArr.map((path, index) => {
        const href = "/" + pathArr.slice(0, index + 1).join("/");
        const isLast = index === pathArr.length - 1;
        if (path === "categories") {
          <Link href={"/"}>{decodeURIComponent(path)}</Link>;
        }
        return (
          <li className="list-none flex items-center" key={href}>
            {isLast ? (
              <span>{decodeURIComponent(path)}</span>
            ) : (
              <>
                {path === "categories" ? (
                  <Link href="/">{decodeURIComponent(path)}</Link>
                ) : (
                  <Link href={href}>{decodeURIComponent(path)}</Link>
                )}
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 9l4-4-4-4"
                  />
                </svg>
              </>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
