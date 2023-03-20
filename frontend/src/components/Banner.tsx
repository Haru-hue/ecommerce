import HomepageBanner from "..//assets/images/homepage-new-shop-banner.png";
import Rating from "./Rating";

export default function Banner () {
    return (
        <section className="bg-section">
            <div className="container-fluid d-flex justify-content-center py-5">
                <img src={HomepageBanner} />
            </div>
            <Rating stars={[4]}/>
        </section>
    )
}