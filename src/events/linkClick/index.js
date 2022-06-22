export function clickOnLink(node) {
	const handleClick = (event) => {
		if (event.target.tagName.toLowerCase() === 'a' || (event.target.tagName.toLowerCase() === 'span' && event.target.parentElement.tagName.toLowerCase() === 'a')) {
			node.dispatchEvent(new CustomEvent("link-clicked"));
		};
	};

	node.addEventListener("click", handleClick, true);

	return {
		destroy() {
			node.removeEventListener("click", handleClick, true);
		},
	};
}
