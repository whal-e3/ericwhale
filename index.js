const year = new Date().getFullYear();
let age = 0;
if (new Date().getMonth() + 1 < 6) {
	age = year - 1997 - 1;
} else if (new Date().getMonth() + 1 === 6) {
	if (new Date().getDate() < 26) {
		age = year - 1997 - 1;
	} else {
		age = year - 1997;
	}
} else {
	age = year - 1997;
}
document.querySelector('#age').innerText = age;
