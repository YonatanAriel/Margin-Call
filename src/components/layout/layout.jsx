import MainContext from "@/context/mainContext";
import AppRoutes from "@/routes/appRoutes";

function Layout() {
  return (
    <MainContext>
      <AppRoutes />
    </MainContext>
  );
}
export default Layout;
