import "./DestinationStyles.css"
import img1 from "../components/photos/1.jpg"
import img2 from "../components/photos/2.jpg"
import img3 from "../components/photos/5.jpg"
import img4 from "../components/photos/8.jpg"
import DestinationData from "./DestinationData"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot within a time frame.</p>
            <DestinationData
            cName = "first-des"
            heading="Taal Valcano, Batangas"
            text="Located in the province of Batangas, Philippines, Taal Volcano is a large caldera filled by Taal Lake. It is the second most active volcano in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.Taal Volcano Hike: A popular hike that offers a spectacular view of the volcano and lake from Tagaytay Ridge. Volcano Island: Accessible by boat from Talisay or San Nicolas, offering a unique experience to explore the volcanic island and its craters"
            image1 = {img1}
            image2 = {img2}
            />

            <DestinationData
            cName = "first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Mt. Daguldul is a coastal mountain located in the province of Batangas, specifically in Sitio Biga, Barangay Hugom, San Juan, Batangas. It offers a marvelous view of nearby Batangas mountains and beaches.Mt. Daguldul has an elevation of 672 meters above sea level (MASL) or 2204 feet.
            The mountain has three different trails: a beach or seaside trail, a woodland and forest trail, and a grassland trail at the top of the mountain. The trail is well-established, with some parts covered by trees, and offers a refreshing feel due to its proximity to the sea. The mountain is considered a minor climb with a difficulty of 3/9."
            image1 = {img3}
            image2 = {img4}
            />
        </div>
    )
}

export default Destination;