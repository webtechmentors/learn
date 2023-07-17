console.log = function (...objects) {
	if (objects?.length === 1 && typeof objects[0] === 'undefined') {
		document.write("undefined");
		document.write("<br/>");
		return;
	}

	if (objects?.length === 1 && Array.isArray(objects[0])) {
		document.write("[" + objects[0].join(", ") + "]");
		document.write("<br/>");
		return;
	};

	const result = objects.join(" ");
	document.write(result);
	document.write("<br/>");
}
