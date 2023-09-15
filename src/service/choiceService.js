import axios from "axios";
import{ REACT_APP_API_URL } from "../../.env"

//const BACK_END_URL = 'http://localhost:5000';

/**
 * Lista todas as opções de uma enquete
 */
export function getPollChoices(pollId) {
    return axios.get(`${REACT_APP_API_URL}/poll/${pollId}/choice`);
}


/**
 * Cria uma opção da enquete
 */
export function postChoice(body) {
    return axios.post(`${REACT_APP_API_URL}/choice`, body)
}


/**
 * Vota em uma opção da enquete
 */
export function voteChoice(choiceId) {
    return axios.post(`${REACT_APP_API_URL}/choice/${choiceId}/vote`)
}
