import Image from "next/image";
import Link from "next/link";

export const PokemonCard = ({ name, image }) => {
  return (
    <div className="border rounded-lg shadow-lg h-max bg-slate-100">
      <Image
        width={1200}
        height={720}
        src={image}
        alt={name}
        className="w-full h-64  bg-white rounded-lg object-contain"
      />
      <h2 className="text-lg font-bold mt-2 capitalize pl-4 py-2">{name}</h2>
      <Link href={name} className="text-blue-500 w-full inline-block p-4">
        Details →
      </Link>
    </div>
  );
};
