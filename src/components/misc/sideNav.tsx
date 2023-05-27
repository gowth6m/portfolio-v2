import {
  faBriefcase,
  faDiagramProject,
  faEnvelope,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function SideNav() {
  return (
    <div className="side-nav text-right">
      <Link href={""} className="text-sm">
        <FontAwesomeIcon icon={faHouse} className="h-[18px]" />
      </Link>

      <Link href={""} className="text-sm">
        <FontAwesomeIcon icon={faUser} className="h-[18px]" />
      </Link>

      <Link href={""} className="text-sm">
        <FontAwesomeIcon icon={faBriefcase} className="h-[18px]" />
      </Link>

      <Link href={""} className="text-sm">
        <FontAwesomeIcon icon={faDiagramProject} className="h-[18px]" />
      </Link>

      <Link href={""} className="text-sm">
        <FontAwesomeIcon icon={faEnvelope} className="h-[18px]" />
      </Link>
    </div>
  );
}
