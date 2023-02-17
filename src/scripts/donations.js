import { getDonationsToPACs, getPACs, getCorporations } from "./dataAccess.js";

// const donationListItem = (PAC) => {
//     const donationsToPACs = getDonationsToPACs()
//     const corporations = getCorporations()
//     const matchedDonationsToPAC = donationsToPACs.filter((donationToPAC) => donationToPAC.PACId === PAC.id)
//     const matchedCorporations = corporations.filter((corporation) => matchedDonationsToPAC.find((matchedDonation) => matchedDonation.corporationId === corporation.id))


//     let html = `<article class="pacs">
//             <section class="pac">
//                 <header class="pac__name">
//                     <h2>${PAC.name}</h1>
//                 </header>
//                 <div class="pac__info">
//                     <div>${PAC.address}</div>
//                 </div>
//                 <div class="pac__donors">
//                     <h4>Donors</h2>
//                     <ul>`
//         donationsToPACs.map(donation =>
//             corporations.map(corporation => {
//                 if (donation.PACId === PAC.id && donation.corporationId === corporation.id) {
//                     html += `<li> ${corporation.name} (${donation.amount}) </li>`
//                 }
//             })
//         )
//         html += `</ul>
//                     </div>
//                 </section>
//             </article>`
//     return html
// }

// export const donationList = () => {
//     const PACs = getPACs()
//     let html = ""
//     let listItems = PACs.map(donationListItem)
//     html += `${listItems.join("")}`
//     return html
// } 