// localStorage.setItem('data', 5)
// console.log(localStorage.getItem('data'))

// let a = [1, 2, 3]
// localStorage.setItem('data', JSON.stringify(a))
// let b = localStorage.getItem('data')
// b = JSON.parse(b)
// console.log(b)
// console.log(typeof b)


let xhttp = new XMLHttpRequest()

//создали новый объект

xhttp.onreadystatechange = function () {
	// Когда будет меняться состояние объекта мы будем вызывать функцию
	if (this.readyState == 4 && this.status == 200) {

		myfunc(this.responseText)

	}

}

xhttp.open('GET', 'https://automarine25.ru/', true)
xhttp.send()

function(myfunc(data)) {
	console.log(data)
}


