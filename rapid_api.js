const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '600582103fmsh6eef50cd7310127p1c62c8jsn1b31998e9e44',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};
async function fetchData(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}}

function displayData(data){
    const container = document.getElementById('#container')
    data.results
}



fetchData()
