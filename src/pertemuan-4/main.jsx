import { createRoot } from "react-dom/client";
import './tailwind.css'
import FrameworkList from "./frameworkList";
import ResponsiveDesign from "./ResponsiveDesign";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ProductList from "./ProductList";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <FrameworkListSearchFilter/> */}
            {/* <ResponsiveDesign/> */}
            <ProductList/>
        </div>
    )
