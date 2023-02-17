import { getPoliticians, getBills, getInterests, getDonationsToPoliticians, getPACs, getDonationsToPACs, getCorporations } from "./dataAccess.js"
// import { politicianDonationListItem } from "./PoliticianDonations.js"


const politicianListItems = (politician) => {
    const bills = getBills()
    const interests = getInterests()
    const donationsToPoliticians = getDonationsToPoliticians()
    const PACs = getPACs()
    const donationsToPACs = getDonationsToPACs()
    const corporations = getCorporations()
    const matchedBill = bills.find((bill) => politician.id === bill.politicianId)
    const matchedInterest = interests.find((interest) => interest.billId === matchedBill.id)
    const matchedDonations = donationsToPoliticians.filter((donation) => donation.politicianId === politician.id)
    const matchedPACs = PACs.filter((PAC) => matchedDonations.find((matchedDonation) => matchedDonation.PACId === PAC.id))
    const matchedDonationsToPACs = donationsToPACs.filter((donationToPAC) => matchedPACs.find((matchedPAC) => donationToPAC.PACId === matchedPAC.id))

    const matchedCorporations = corporations.filter((corporation) => matchedDonationsToPACs.find((matchedDonationToPAC) => corporation.id === matchedDonationToPAC.corporationId))

    let html = ""
html += `<article class="politicians">
                <section class="politician">
                    <header class="politician__name">
                        <h1>${politician.firstName} ${politician.lastName}</h1>
                    </header>
                    <div class="politician__info">
                        <div>Age: ${politician.age}</div>            
                    </div>
                    <div class="politician__bills">
                    <h2>Sponsored Bill0</h2>
                    <div>
                    ${matchedBill.name} (Interest: ${matchedInterest.name})
                    </div>
                </div>
                <div class="politician__funders">
                    <h2>Related PACs</h2>
                    ${matchedPACs.map((PAC) => `<li>${PAC.name}</li>`)}
                    <ul>
                        
                    </ul>
                </div>
                <div class="politician__influencers">
                    <h3>Influencing Corporations</h3>
                    <ul>
                        ${matchedCorporations.map((matchedCorporation) => `<li>${matchedCorporation.name}</li>`)}
                    </ul>
                </div>
            </section>
        </article>`
return html
}

export const politiciansList = () => {
    const politicians = getPoliticians()
    let html = ""
    let listItems = politicians.map(politicianListItems)
    html += `${listItems.join("")}`
    return html
}