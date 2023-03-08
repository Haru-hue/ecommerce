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
import milk from "../images/milk.png";

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
                            <div id="carouselExampleControls" class="carousel slide" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active p-5">
                                        <div className="text-red pb-5">
                                            <h1 className="fs-0 w-40 fw-bold">Fresh New Fruits Available</h1>
                                            <p className="fs-5 w-25">New arrivals with fruits in season, essential for the spring</p>
                                        </div>
                                        <Button size="md" className="shop-button">Shop Now</Button>
                                    </div>
                                    <div className="carousel-item p-5">
                                        <div className="text-brown pb-5">
                                            <h2 className="fs-0 w-40 fw-bold">Freshly Baked Goods</h2>
                                            <p className="fs-5 w-25">Fresh from the oven, local farmers use fresh ingredients for the bread</p>
                                        </div>
                                        <Button size="md" className="shop-button mt-4 fw-bold">Shop Now</Button>
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
                                    <h2 className="fw-bold">GOT PRODUCTS TO SELL</h2>
                                    <p>Post an advert to sell now, let us help you reach customers </p>
                                    <Button size="sm" className="shop-button mt-5">Sell Now</Button>
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
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>100% Pure Orange Juice</h2>
                                    <p>Fresh orange juice with no added preservatives</p>
                                </div>
                                <div className="col-lg-4">
                                    <img src="https://i.imgur.com/kB2iRQx.png" alt="orange" className="img-fluid"/>
                                </div>
                            </div>
                        </DealBox>
                        <DealBox color="salmon">
                            <div className="row">
                                <div className="col-lg-8">
                                    <span>
                                        <h2>₦2,500.00</h2>
                                        <s>₦4,500.00</s>
                                    </span>
                                    <h6>CANNED FISH SALMON</h6>
                                    <p>250g</p>
                                </div>
                                <div className="col-lg-4">
                                    <img src="https://i.imgur.com/4dJuDn5.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </DealBox>
                        <DealBox color="pink">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>whole milk</h2>
                                    <p>Fresh milk and lactose-free providing all the ingredients</p>
                                    <h3>ONLY
                                    ₦1,800.00</h3>
                                </div>
                                <div className="col-lg-4">
                                    <img src={milk} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </DealBox>
                        <DealBox color="brown">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2>Wheat Bread</h2>
                                    <p>Whole-grain wheat bread, freshly-baked</p>
                                </div>
                                <div className="col-lg-4">
                                    <img src="https://i.imgur.com/ZVUhFI4.png" alt="" className="img-fluid" />
                                </div>
                            </div>
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
                <div className="container-fluid">
                    <div className="row px-5">
                        <div className="col-lg-8">
                            <div className="d-flex flex-column">
                              <DealBox color="dark-orange">
                                <div className="deal-text">
                                    <h3>YOUR EVERYDAY ITEMS DELIVERED AT YOUR DOORSTEP</h3>
                                    <h1>For Free</h1>
                                   <p>Terms and Conditions Apply</p>
                                </div>
                                <img src="https://i.imgur.com/MAjy2h8.png" alt="" className="img-fluid" />
                              </DealBox>
                                <DealBox color="green">
                                    <h3>GROCERY SUPER DEALS</h3>
                                    <h5>Save more on your groceries</h5>
                                    <img src="https://i.imgur.com/9oB1oOH.png" alt="" className="img-fluid" />
                                </DealBox>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <DealBox className='with-bg d-flex flex-column text-center'>
                                <h2>15% OFF</h2>
                                <h3>For new users, sign up for this exclusive promo</h3>
                                <form action="" method="post" className="d-flex flex-column align-items-center">
                                    <div className="input-group py-2 w-75">
                                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                        <input type="email" name="" id="" placeholder="Email address" className="form-control p-3"/>
                                    </div>
                                    <div className="input-group py-2 w-75">
                                        <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                                        <input type="password" name="" id="" placeholder="Password" className="form-control p-3"/>
                                    </div>
                                    <div className="input-group py-2 w-75">
                                        <span className="input-group-text"><i className="fa-solid fa-repeat"></i></span>
                                        <input type="password" name="" id="" placeholder="Confirm Password" className="form-control p-3"/>
                                    </div>
                                    <button type="submit" className="btn-register">Register Now</button>
                                </form>
                            </DealBox>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}