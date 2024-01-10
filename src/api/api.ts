const getData = fetch('https://fakestoreapi.com/products/')
	.then((res) => res.json())
	.then((json) => {});

export default getData;
