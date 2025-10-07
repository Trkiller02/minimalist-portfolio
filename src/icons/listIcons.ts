import HTML from "../icons/HTML.astro";
import JavaScript from "../icons/JavaScript.astro";
import Tailwind from "../icons/Tailwind.astro";
import CSS from "../icons/CSS.astro";
import Express from "./Express.astro";
import TypeScript from "../icons/TypeScript.astro";
import Node from "../icons/Node.astro";
import React from "../icons/React.astro";
import Git from "../icons/Git.astro";
import Github from "./Github.astro";
import Globe from "./Globe.astro";
import Phone from "./Phone.astro";
import Mail from "./Mail.astro";
import Next from "./Next.astro";
import Sql from "./Sql.astro";
import NestJS from "./NestJS.astro";
import AstroIcon from "./AstroIcon.astro";
import Orm from "./Orm.astro";
import PostgreSQL from "./PostgreSQL.astro";

//List Icons
export const ICONS_ENUM: Record<
	string,
	(_props: Record<string, unknown>) => unknown
> = {
	// Contact Icons
	Phone,
	Mail,
	Globe,
	Github,
	// Skills Icons
	HTML,
	JavaScript,
	CSS,
	TypeScript,
	React,
	Git,
	Express,
	NestJS,
	Astro: AstroIcon,
	PostgreSQL: PostgreSQL,
	MySQL: Sql,
	"Tailwind CSS": Tailwind,
	"Node.js": Node,
	"Next.js": Next,
	"JavaScript / TypeScript ORMs": Orm,
} as const;

//List Icons
export const ICONS_ENUM_KEYPAD: Record<string, string> = {
	// Contact Icons

	Mail: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
 style="margin-right: 8px" 
  ><path
    d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
  ></path></svg
>`,
	Github: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  style="margin-right: 8px" 
  ><path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
  ></path></svg
>
`,
	Globe: `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  style="margin-right: 8px"
  ><path
    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"
  ></path></svg
>`,
} as const;
