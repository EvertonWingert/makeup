import { Product } from "../types/Product";

interface IProductCardProps {
	product: Product;
}

function formatPrice(price: number) {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(price);
}

export function ProductCard({ product }: IProductCardProps) {
	return (
		<div className="group relative">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none  ">
				<img src={product.image_link} alt={product.name} className="w-full h-full   lg:w-full lg:h-full" />
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<a href="#">
							<span aria-hidden="true" className="absolute inset-0" />
							{product.name}
						</a>
					</h3>
					<p className="mt-1 text-sm text-gray-500">{product.product_type}</p>
				</div>
				<p className="text-sm font-medium text-gray-900">{formatPrice(product.price)}</p>
			</div>
		</div>
	);
}
