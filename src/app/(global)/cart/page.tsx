import { Suspense } from "react";
import CartContent from "@/components/ui/CartContent";
import "./cart.css";

export default function CartPage() {
  return (
    <Suspense fallback={null}>
      <CartContent />
    </Suspense>
  );
}
