import { getPoliticians, getDonationsToPoliticians , getDonationsToPACs, getPACs } from "./dataAccess.js";



export const politicianDonationListItem = (politician) => {
            const donationsToPoliticians = getDonationsToPoliticians()
            const donationsToPACs = getDonationsToPACs()
            const PACs = getPACs()
            const matchedDonationsToPoliticians = donationsToPoliticians.filter((donationToPolitician) => donationToPolitician.politicianId === politician.id)
            const matchedPACs = PACs.filter((PAC) => matchedDonationsToPoliticians.find((matchedDonation) => matchedDonation.PACId === PAC.id))
            const matchedDonationItems = donationsToPACs.filter((donationToPAC) => matchedDonationsToPoliticians.find((matchedDonation) => matchedDonation.PACId === donationToPAC.PACId))

            let html = `
                        <h2>PAC Donations</h2>
                        <ul>`
                        matchedPACs.map(matchedPAC => {
                            matchedDonationItems.map(matchedDonation => {
                             
                                    html+= `<li>${matchedPAC.name}, (${matchedDonation.amount})</li>`
                                
                            })
                        })
                html+= `</ul>
                        </div>
                        </section>
                        </article>`
            return html
        }


