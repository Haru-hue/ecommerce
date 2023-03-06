import Button from "../components/button";
import farmer from "../images/farmer.png"
import wheat from '../images/wheat.png'
import fruit from '../images/fruit-veg.png'
import fish from '../images/fish.png'
import dairy from '../images/dairy.png'
import meat from '../images/meat.png'
import bread from '../images/bread.png'
import alb from '../images/almond-breeze.png'
import DealBox from "../components/deal-box";
import Slider from "react-slick";

export default function Homepage () {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1
      };

    const grid = [{ title: 'Fruits & Vegetables', image: fruit}, {title: 'Frozen Seafoods', image: fish}, {title: 'Dairy Products', image: dairy}, 
    {title: 'Wheat and Grains', image: wheat}, {title: 'Bread and Pastries', image: bread}, {title: 'Raw Meats', image: meat}]

    const categoryGrid = grid.map((item, index) => {
        return (
            <div className="d-flex flex-column align-items-center" key={index}>
                <div className="category-img"><img src={item.image} alt={item.title} className='p-5'/></div>
                <h4>{item.title}</h4>
            </div>
        )
    })

    return (
        <main>
            <section className="homepage-slider bg-section">
                <div className="container-fluid">
                    <div className="row gx-5 p-5">
                        <div className="col-lg-9">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active p-5">
                                        <div className="text-red pb-5">
                                            <h2>Fresh New Fruits Available</h2>
                                            <p>New arrivals with fruits in season, essential for the spring</p>
                                        </div>
                                        <Button size="sm" className="shop-button pt-5">Shop Now</Button>
                                    </div>
                                    <div className="carousel-item p-5">
                                        <div className="text-brown pb-5">
                                            <h2>Freshly Baked Goods</h2>
                                            <p>Fresh from the oven, local farmers use fresh ingredients for the bread</p>
                                        </div>
                                        <Button size="sm" className="shop-button pt-5">Shop Now</Button>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="slider-box overflow-hidden">
                                <div className="text-light p-4">
                                    <h2>GOT PRODUCTS TO SELL</h2>
                                    <p>Post an advert to sell now, let us help you reach customers </p>
                                    <Button size="sm" className="shop-button pt-5">Sell Now</Button>
                                </div>
                                <img src={farmer} alt="" className="img-fluid ms-4 mt-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="explore-section p-5">
                <span className="heading d-flex align-items-center justify-content-between">
                    <h1>Explore Categories</h1>
                    <p>See All</p>
                </span>
                <div className="category-section grid">
                   {categoryGrid}
                </div>
            </section>
            <div className="promo-banner container overflow-hidden">
                <div className="row text-light g-0">
                    <div className="col-lg-3">
                        <div className="promo-details">
                            <p className="small">20% off</p>
                            <h3>Almond Breeze</h3>
                            <p>March 28 - April 4</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={alb} alt="Almond Breeze" className="img-fluid m-auto" />
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
                <span className="heading d-flex align-items-center justify-content-between">
                    <h1>Popular Deals</h1>
                    See All {'->'}
                </span>
                <div className="deals-grid ">
                    <Slider {...settings}>
                        <DealBox color="orange">
                            <h2>100% Pure Orange Juice</h2>
                            <p>Fresh orange juice with no added preservatives</p>
                        </DealBox>
                        <DealBox color="salmon">
                            <span>
                                <h2>₦2,500.00</h2>
                                <s>₦4,500.00</s>
                            </span>
                            <h6>CANNED FISH SALMON</h6>
                            <p>250g</p>
                        </DealBox>
                        <DealBox color="pink">
                            <h2>whole milk</h2>
                            <p>Fresh milk and lactose-free providing all the ingredients</p>
                            <h3>ONLY
                            ₦1,800.00</h3>
                        </DealBox>
                        <DealBox color="brown">
                            <h2>Wheat Bread</h2>
                            <p>Whole-grain wheat bread, freshly-baked</p>
                        </DealBox>
                    </Slider>
                </div>
            </section>
            <section className="bg-section p-5">
                <div className="title-grid d-flex align-items-center justify-content-between">
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