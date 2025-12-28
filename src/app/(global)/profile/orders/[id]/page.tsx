import "./orderDetail.css";
import OrderDetailPage from "./orderDetail";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Page(params: { id: string }) {
  return <OrderDetailPage id={params.id} />;
}
