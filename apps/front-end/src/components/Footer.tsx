"use client";

import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const Footer = () => {
  const handleRedirectToContactUs = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
        <div className="space-y-2 text-center md:text-left">
          <p>© {new Date().getFullYear()} B2B. All rights reserved.</p>
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          <Link onClick={handleRedirectToContactUs} to="/" className="flex items-center gap-1 hover:text-foreground">
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
