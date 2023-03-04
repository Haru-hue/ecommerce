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
            <section className="explore-section p-5">
                <span className="heading">
                    <h1>Explore Categories | </h1>
                    <p>See All</p>
                </span>
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
                        <div className="promo-details">
                            <p className="small">20% off</p>
                            <h3>Almond Breeze</h3>
                            <p>March 28 - April 4</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        Almond Breeze
                    </div>
                    <div className="col-lg-3">
                        <div className="deals">
                            <h4>Easter Sale</h4>
                            <p>100% made from almonds, full of nutrients and less calories than normal milk</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="deals-section p-5">
                <span className="heading">
                    <h1>Popular Deals | </h1>
                    See All {'->'}
                </span>
                <div className="deals-grid">
                    <div className="deal-box">
                        <h2>100% Pure Orange Juice</h2>
                        <p>Fresh orange juice with no added preservatives</p>
                    </div>
                    <div className="deal-box">
                        <span>
                            <h2>₦2,500.00</h2>
                            <s>₦4,500.00</s>
                        </span>
                        <h6>CANNED FISH SALMON</h6>
                        <p>250g</p>
                    </div>
                    <div className="deal-box">
                        <h2>whole milk</h2>
                        <p>Fresh milk and lactose-free providing all the ingredients</p>
                        <h3>ONLY
                        ₦1,800.00</h3>
                    </div>
                    <div className="deal-box">
                        <h2>Wheat Bread</h2>
                        <p>Whole-grain wheat bread, freshly-baked</p>
                    </div>
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
                                <div className="deals-box">
                                    <div className="deal-text">
                                        <h3>YOUR EVERYDAY ITEMS DELIVERED AT YOUR DOORSTEP</h3>
                                        <h1>For Free</h1>
                                        <p>Terms and Conditions Apply</p>
                                    </div>
                                </div>
                                <div className="deals-box">
                                    <h3>GROCERY SUPER DEALS</h3>
                                    <h5>Save more on your groceries</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h2>15% OFF</h2>
                            <h3>For new users, sign up for this exclusive promo</h3>
                            <form action="" method="post">
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                    <input type="email" name="" id="" placeholder="Email address" className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                                    <input type="password" name="" id="" placeholder="Password" className="form-control"/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fa-solid fa-repeat"></i></span>
                                    <input type="password" name="" id="" placeholder="Confirm Password" className="form-control"/>
                                </div>
                                <button type="submit" className="btn-register">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}