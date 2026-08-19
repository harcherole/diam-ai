import AppRouter from "./router";
import useScrollTop from "./hooks/useScrollTop";

export default function App() {
  useScrollTop();
  return <AppRouter />;
}
