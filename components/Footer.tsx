import Socials from "@/components/Socials";

export default function Footer() {
  return (
    <footer className="footer items-center p-4">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 Xyza Rivera</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Socials/>
      </div>
    </footer>
  );
}
