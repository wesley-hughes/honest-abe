import { fetchBills, fetchCorporations, fetchDonationsToPACS, fetchDonationsToPoliticians, fetchInterests, fetchPACs, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"


const mainContainer = document.querySelector("#container")


async function renderApp() {
await Promise.all([
    fetchPoliticians(),
    fetchCorporations(),
    fetchDonationsToPACS(),
    fetchPACs(),
    fetchDonationsToPoliticians(),
    fetchBills(),
    fetchInterests()
])

mainContainer.innerHTML = HonestAbe()
}

renderApp()