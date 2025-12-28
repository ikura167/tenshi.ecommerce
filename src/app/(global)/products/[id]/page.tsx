import "./productDetail.css";
import ProductDetail from "./productDetail";

interface Product {
  id: string;
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Page({ params }: { params: Product }) {
  return <ProductDetail params={params} />;
}
