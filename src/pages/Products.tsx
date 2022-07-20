import { useState, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../types/Product";

export function Products() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState("");

	const handleChange = (event: any) => {
		setData(event.target.value);
	};

	const { search } = useLocation();

	const fetchMake = async () => {
		const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json${search}`);
		const json = await response.json();
		return json;
	};
	const filteredProductsByName = useMemo(
		() => products.filter((product) => product.product_type.toLowerCase().includes(data.toLowerCase())),
		[products, data]
	);
	useEffect(() => {
		setLoading(true);
		fetchMake().then((data) => {
			setProducts(data);
			setLoading(false);
		});
	}, [search]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<main className="bg-gray-100 min-h-screen">
			<section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
				<h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Produtos Maybelline</h1>
				<div className="mt-4">
					<div>
						<select
							name=""
							id=""
							className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
							onChange={handleChange}
						>
							<option value="">All</option>
							<option value="bronzer">Bronzer</option>
							<option value="lipstick">Lipstick</option>
							<option value="mascara">Mascara</option>
							<option value="eyeliner">Eyeliner</option>
							<option value="eyebrow">Eyebrow</option>
							<option value="foundation">Foundation</option>
							<option value="blush">Blush</option>
							<option value="lip_liner">Lipliner</option>
						</select>
					</div>
				</div>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{filteredProductsByName.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			</section>
		</main>
	);
}
