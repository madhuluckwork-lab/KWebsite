import Image from "next/image";
import { cn } from "@/lib/utils";

interface KlaimosLogoProps {
  height?: number;
  mobileHeight?: number;
  className?: string;
  invert?: boolean;
}

export function KlaimosLogo({
  height = 32,
  mobileHeight,
  className,
  invert = false,
}: KlaimosLogoProps) {
  const mobile = mobileHeight ?? Math.round(height * 0.6);
  return (
    <Image
      src="/klaimos_logo.png"
      alt="Klaimos.ai"
      width={Math.round(height * 3.5)}
      height={height}
      className={cn(
        "object-contain",
        invert && "brightness-0 invert",
        className,
      )}
      style={{
        height: `clamp(${mobile}px, 8vw, ${height}px)`,
        width: "auto",
      }}
    />
  );
}
