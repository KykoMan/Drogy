export type NavItem = {
	title: string;
	href: string;
};

const navItems: NavItem[] = [
	{ title: "Home", href: "/" },
	{ title: "O projektu", href: "/about" },
	{ title: "Rozhovory", href: "/interviews" },
	{ title: "Kontakty", href: "/contact" },
];

export default navItems;

