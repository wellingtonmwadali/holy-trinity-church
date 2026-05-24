import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  bgColorClass: string;
  imageSrc: string;
  imageAlt: string;
  imageOpacityClass?: string;
  children: ReactNode;
}

export default function ServiceCard({
  bgColorClass,
  imageSrc,
  imageAlt,
  imageOpacityClass = "opacity-20",
  children,
}: ServiceCardProps) {
  return (
    <div className={`${bgColorClass} p-8 text-white relative overflow-hidden group`}>
      <div className={`absolute inset-0 ${imageOpacityClass} transition-transform duration-700 group-hover:scale-105`}>
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
