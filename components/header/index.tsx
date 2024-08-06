import { ROUTES } from "@/utils/route-definition";
import Image from "next/image";

import Link from "next/link";

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="flex items-center justify-between gap-8 p-4 border-b-2 border-purple-500">
      <div className="flex items-center justify-between gap-8">
        <Link
          href={{
            pathname: ROUTES.ROOT,
          }}
        >
          <Image
            src="/back.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>
      </div>
      {title}
      <Link
        href={{
          pathname: ROUTES.ROOT,
        }}
      >
        <Image
          src="/logo.svg"
          width={80}
          height={80}
          alt="Efekt Perła Wschodu"
        />
      </Link>
    </header>
  );
};
