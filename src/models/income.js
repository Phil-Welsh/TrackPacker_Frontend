const url = `https://finfam.herokuapp.com/api/v1`

class IncomeModel {
    static all = () => {
        return fetch(`${url}/incomes`, {
        })
            .then(res => res.json())
    }

    static show = (id) => {
        return fetch(`${url}/incomes/${id}`).then(res => res.json())
    }

    static create = (incomeData) => {
        return fetch(`${url}/incomes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(incomeData)
        })
            .then(res => res.json())
    }

    static update = (incomeData, props) => {
        return fetch(`${url}/incomes/${props}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(incomeData)
        })
            .then(res => res.json())
    }

    static delete = (incomeData) => {
        return fetch(`${url}/incomes/${incomeData}`, {
            method: "DELETE",}
        )
    }
}

export default IncomeModel
