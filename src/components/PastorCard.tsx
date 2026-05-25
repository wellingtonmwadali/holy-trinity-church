import Image from "next/image";

interface PastorCardProps {
  imageSrc: string;
  name: string;
  title: string;
}

export default function PastorCard({ imageSrc, name, title }: PastorCardProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-full h-96 rounded-2xl overflow-hidden mb-4 shadow-lg relative">
        <Image quality={100} 
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 font-serif">{name}</h3>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
    </div>
  );
}
