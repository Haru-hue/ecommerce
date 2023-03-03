export default function Homepage () {
    return (
        <main>
            <section className="homepage-slider bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">A</div>
                        <div className="col-lg-3">B</div>
                    </div>
                </div>
            </section>
            <section className="explore-section">
                <div className="heading">
                    <span>
                        <h1>Explore Categories | </h1>
                        <p>See All</p>
                    </span>
                </div>
                <div className="category-section">
                    <div>Fruits & Vegetables</div>
                    <div>Frozen Seafoods</div>
                    <div>Dairy Products</div>
                    <div>Wheat and Grains</div>
                    <div>Bread and Pastries</div>
                    <div>Raw Meats</div>
                </div>
            </section>
            <div className="promo-banner container">
                <div className="row">
                    <div className="col-lg-3">
                        20% off
                    </div>
                    <div className="col-lg-6">
                        Almond Breeze
                    </div>
                    <div className="col-lg-3">
                        Easter Sale
                    </div>
                </div>
            </div>
            <section className="deals-section">
                <span className="heading">
                    <h1>Popular Deals | </h1>
                    <p>See All {'->'}</p>
                </span>
                <div className="deals-grid">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </section>
            <section className="bg-section">
                <div className="title-grid d-flex">
                    <h3>Best Sellers</h3>
                    <div>All</div>
                    <div>Fruits & Vegetables</div>
                    <div>Frozen Seafoods</div>
                    <div>Dairy Products</div>
                    <div>Wheat and Grains</div>
                    <div>Bread and Pastries</div>
                    <div>Raw Meats</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="d-flex flex-column">
                                <div className="deals-box">1</div>
                                <div className="deals-box">2</div>
                            </div>
                        </div>
                        <div className="col-lg-5">User Sign Up</div>
                    </div>
                </div>
            </section>
        </main>
    )
}