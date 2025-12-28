import "./productDetail.css";
import ProductDetail from "./productDetail";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Page(params: { id: string }) {
  return <ProductDetail id={params.id} />;
}
