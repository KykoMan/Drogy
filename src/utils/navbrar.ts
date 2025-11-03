export type NavItem = {
	title: string;
	href: string;
};

const navItems: NavItem[] = [
	{ title: "Home", href: "/" },
	{ title: "O projektu", href: "/about" },
	{ title: "Kontakty", href: "/contact" },
	{ title: "Blog", href: "/blog" },
];

export default navItems;

