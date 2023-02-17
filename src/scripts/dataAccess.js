const applicationState = {}
const API = "http://localhost:8088"

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.politicians = data
        )
}

export const getPoliticians = () => applicationState.politicians.map(politician => ({ ...politician }))


export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.corporations = data
        )
}

export const getCorporations = () => applicationState.corporations.map(corporation => ({ ...corporation }))


export const fetchPACs = () => {
    return fetch(`${API}/PACs`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.PACs = data
        )
}

export const getPACs = () => applicationState.PACs.map(PAC => ({ ...PAC }))


export const fetchDonationsToPACS = () => {
    return fetch(`${API}/donationsToPACs`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.donationsToPACs = data
        )
}

export const getDonationsToPACs = () => applicationState.donationsToPACs.map(donationToPAC => ({ ...donationToPAC }))


export const fetchDonationsToPoliticians = () => {
    return fetch(`${API}/donationsToPoliticians`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.donationsToPoliticians = data
        )
}

export const getDonationsToPoliticians = () => applicationState.donationsToPoliticians.map(donationToPolitician => ({ ...donationToPolitician }))


export const fetchBills = () => {
    return fetch(`${API}/bills`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.bills = data
        )
}

export const getBills = () => applicationState.bills.map(bill => ({ ...bill }))


export const fetchInterests = () => {
    return fetch(`${API}/interests`)
        .then(res => res.json())
        .then(
            (data) =>
                applicationState.interests = data
        )
}

export const getInterests = () => applicationState.interests.map(interest => ({ ...interest }))