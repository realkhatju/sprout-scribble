interface Params {
  params: {
    id: string;
  };
}

export default function Product({ params }: Params) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
      <p>This is the product details page for product ID: {params.id}</p>
    </div>
  );
}
