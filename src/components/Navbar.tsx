import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<nav className="w-full flex navbar h-full">
			<ul className="flex gap-5 text-xl ">
				<Link to="/" className="text-black">
					Home
				</Link>

				<li className="text-black text-xl bold cursor-pointer" onClick={toggle}>
					Produtos
					{isOpen ? (
						<ul className="flex flex-col bg-gray-200 py-10 pl-5 pr-10 gap-5 text-xl text-start rounded-b-xl rounded-tr-xl transition-all">
							<Link to="products?brand=maybelline" className="text-black">
								Maybelline
							</Link>
							<Link to="products?brand=loreal" className="text-black">
								Loreal
							</Link>
							<Link to="products?brand=nars" className="text-black">
								Nars
							</Link>
							<Link to="products?brand=lancome" className="text-black">
								Lancome
							</Link>
							<Link to="products?brand=covergirl" className="text-black">
								CoverGirl
							</Link>
						</ul>
					) : (
						""
					)}
				</li>
			</ul>
		</nav>
	);
}
