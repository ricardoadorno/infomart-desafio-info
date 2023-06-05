import Link from "next/link";
import { CategoriesCard } from "./styles";
import Image from "next/image";

interface CategoryCardProps {
  name: string;
  imageUrl: string;
  slug: string;
}

export default function CategoryCard({
  name,
  imageUrl,
  slug,
}: CategoryCardProps) {
  return (
    <CategoriesCard>
      <Image src={imageUrl} width={322} height={420} alt={name} />
      <h3>{name}</h3>
      <Link href={`/categories/${slug}`}>
        <button>Confira</button>
      </Link>
    </CategoriesCard>
  );
}
