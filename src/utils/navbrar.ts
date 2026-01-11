export type NavItem = {
	title: string;
	href: string;
};
/**
 * Navigation items for the Navbar component.
 */
const navItems: NavItem[] = [
	{ title: "O projektu", href: "/aboutUs" },
	{ title: "Typy drog", href: "/drugs" },
	{ title: "Kontakty", href: "/contact" },
	{ title: "Prevence", href: "/prevention" },
];

export default navItems;

