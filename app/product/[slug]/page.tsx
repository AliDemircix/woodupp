function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <div>My Product: {params.slug}</div>;
}

export default ProductDetailPage;
