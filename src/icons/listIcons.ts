import HTML from "../icons/HTML.astro";
import JavaScript from "../icons/JavaScript.astro";
import Tailwind from "../icons/Tailwind.astro";
import CSS from "../icons/CSS.astro";
import TypeScript from "../icons/TypeScript.astro";
import Node from "../icons/Node.astro";
import React from "../icons/React.astro";
import Git from "../icons/Git.astro";
import Github from "./Github.astro";
import Phone from "./Phone.astro";
import Mail from "./Mail.astro";
import Globe from "./Globe.astro";
import Next from "./Next.astro";
import Sql from "./Sql.astro";
import Express from "./Express.astro";
import NestJS from "./NestJS.astro";
import Astro from "./Astro.astro";

//List Icons
export const ICONS_ENUM: Record<string, any> = {
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
  MySQL: Sql,
  "Tailwind CSS": Tailwind,
  "Node.js": Node,
  "Next.js": Next,
  "Astro.js": Astro,
};
