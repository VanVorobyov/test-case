const getData = fetch('https://fakestoreapi.com/products/').then((res) =>
	res.json()
);

export default getData;
