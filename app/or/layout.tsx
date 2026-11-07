import { Noto_Sans_Oriya } from "next/font/google";

const oriya = Noto_Sans_Oriya({
  subsets: ["oriya"],
  variable: "--font-oriya",
  display: "swap",
});

/** Odia-language section: sets lang="or" and adds an Odia web font after the Latin font stack. */
export default function OdiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="or" className={`${oriya.variable} odia`}>
      {children}
    </div>
  );
}
