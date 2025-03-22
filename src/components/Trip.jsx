import TripData from "./TripData"
import "./TripStyles.css"
import img1 from "../components/photos/5.jpg"
import img2 from "../components/photos/annie-spratt-WCgioEcEVNc-unsplash.jpg"
import img3 from "../components/photos/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={img1}
                heading = "Trip in Indonesia"
                text = "Indonesia,officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />

                <TripData
                image={img2}
                heading = "Trip in India"
                text = "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country in the world by area and the most populous country.In the early mediaeval era, Christianity, Islam, Judaism, and Zoroastrianism became established on India's southern and western coasts."
                />

                <TripData
                image={img3}
                heading = "Trip in France"
                text = "Indonesia,officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
            </div>
        </div>
    )
}

export default Trip;