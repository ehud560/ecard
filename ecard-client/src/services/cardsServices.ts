import axios from "axios";
import Card from "../interfaces/Card";


let api: string = `${process.env.REACT_APP_API}/cards`;

export function getCards() {
    return axios.get(api, {
        headers: {
            Authorization: JSON.parse(sessionStorage.getItem("token") as string)
                .token,
        },
    });
}

export function getCardById(_id: number) {
    return axios.get(`${api}/${_id}`, {
        headers: {
            Authorization: JSON.parse(sessionStorage.getItem("token") as string)
                .token,
        },
    });
}

// export function getCardByCreatorId(CreatorId: string) {
//     return axios.get(`${api}?creatorId=${CreatorId}`);
// }

export function addCard(newCard: Card) {
    return axios.post(api, newCard, {
        headers: {
            Authorization: JSON.parse(sessionStorage.getItem("token") as string)
                .token,
        },
    });
}

export function updateCard(updatedCard: Card, _id: number) {
    return axios.put(`${api}/${_id}`, updatedCard, {
        headers: {
            Authorization: JSON.parse(sessionStorage.getItem("token") as string)
                .token,
        },
    });
}

export function deleteCard(_id: string) {
    return axios.delete(`${api}/${_id}`, { headers: { Authorization: JSON.parse(sessionStorage.getItem("token") as string).token } });
}