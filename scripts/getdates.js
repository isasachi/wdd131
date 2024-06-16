const date = new Date();

const currentYear = document.getElementById('currentYear');
currentYear.innerHTML = date.getFullYear();

const lastModified = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.innerHTML = `Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full",
        timeStyle: "short"
	}
).format(lastModified)}`