const url = `https://finfam.herokuapp.com/api/v1`

class ExpenseModel {
    static all = () => {
        return fetch(`${url}/expenses`, {
        })
            .then(res => res.json())
    }

    static show = (id) => {
        return fetch(`${url}/expenses/${id}`).then(res => res.json())
    }

    static create = (expenseData) => {
        console.log(expenseData)
        return fetch(`${url}/expenses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expenseData)
        })
            .then(res => res.json())
    }

    static update = (expenseData, props) => {
        return fetch(`${url}/expenses/${props}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expenseData)
        })
            .then(res => res.json())
    }

    static delete = (expenseData) => {
        return fetch(`${url}/expenses/${expenseData}`, {
            method: "DELETE",}
        )
    }
}

export default ExpenseModel
