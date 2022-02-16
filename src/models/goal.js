const url = `https://finfam.herokuapp.com/api/v1`

class GoalModel {
    static all = () => {
        return fetch(`${url}/goals`, {
        })
            .then(res => res.json())
    }

    static show = (id) => {
        return fetch(`${url}/goals/${id}`).then(res => res.json())
    }

    static create = (goalData) => {
        return fetch(`${url}/goals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goalData)
        })
            .then(res => res.json())
    }

    static update = (goalData, props) => {
        return fetch(`${url}/goals/${props}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goalData)
        })
            .then(res => res.json())
    }

    static delete = (goalData) => {
        return fetch(`${url}/goals/${goalData}`, {
            method: "DELETE",}
        )
    }
}

export default GoalModel
