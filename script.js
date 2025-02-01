//your JS code here. If required.
let data = []

let form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
	e.preventDefault()
	let title = document.querySelector("#title")
	let val1 = title.value
	let author = document.querySelector("#author")
	let val2 = author.value
	let isbn = document.querySelector("#isbn")
	let val3 = Number(isbn.value)
	data.push(val1,val2,val3)
	//console.log(data)
	title.value = ""
	author.value = ""
	isbn.value = ""
	let td1 = document.createElement("td")
	td1.innerText = data[0]
	let td2 = document.createElement("td")
	td2.innerText = data[1]
	let td3 = document.createElement("td")
	td3.innerText = data[2]
	let td4 = document.createElement("td")
	let del = document.createElement("button")
    del.innerText = "Delete"
    del.className = "delete" 
	td4.append(del)
	let tr = document.createElement("tr")
	tr.append(td1,td2,td3,td4)
	let tbody = document.querySelector("#book-list")
	tbody.append(tr)
	data.length = 0
	del.addEventListener("click", (e) => {
		tbody.removeChild(tr)
	})
})

