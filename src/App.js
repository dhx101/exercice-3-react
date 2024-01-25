import "./App.css";
import Header from "./Componet/Header/Header";
import Product from "./Componet/Product/Product";
import { data } from "./db/db";

function App() {
	return (
		<>
			<Header></Header>
			<Product item={data.product}></Product>
		</>
	);
}

export default App;
