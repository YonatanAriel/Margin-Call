import MainContext from "@/context/mainContext";
import AppRoutes from "@/routes/appRoutes";
import HomeLink from "./homeLink";

function Layout() {
  return (
    <MainContext>
      <HomeLink />
      <AppRoutes />
    </MainContext>
  );
}
export default Layout;
