import { Navbar } from "./Navbar";

export function Header() {
	return (
		<header className="w-full flex p-10 h-20 bg-gray-200 ">
			<div className="flex items-start">
				<Navbar />
			</div>
		</header>
	);
}
