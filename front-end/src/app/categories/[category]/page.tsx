interface CategoryProps {
    params: { category: string }
  }
  
  export default function Category({ params: { category } }: CategoryProps) {
    return (
      <h1>{category}</h1>
    )
  }