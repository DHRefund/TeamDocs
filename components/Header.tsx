import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex">
        <Image src="/assets/icons/logo-icon.svg" alt="Logo" width={32} height={32} className="mr-2 " />
        <p className="text-2xl font-bold">
          <span className="text-primary">Team</span>
          <span className="text-secondary">Docs</span>
        </p>
      </Link>

      {children}
    </div>
  );
};

export default Header;
