import Button from 'components/button'
import DealBox from 'components/deal-box'
import { EnvelopeIcon, LockIcon, RepeatIcon } from 'components/icons'

import { AlmondBreeze, Bread, Dairy, Farmer, Fish, Fruit, Meat, Milk, Wheat } from 'assets/images'

const grid = [
  { title: 'Fruits & Vegetables', image: Fruit },
  { title: 'Frozen Seafoods', image: Fish },
  { title: 'Dairy Products', image: Dairy },
  { title: 'Wheat and Grains', image: Wheat },
  { title: 'Bread and Pastries', image: Bread },
  { title: 'Raw Meats', image: Meat },
]

const HomePage = () => {
  const categoryGrid = grid.map(item => {
    return (
      <div className="d-flex flex-column align-items-center" key={item.title}>
        <div className="category-img">
          <img src={item.image} alt={item.title} className="p-4" />
        </div>
        <h5 className="pt-3">{item.title}</h5>
      </div>
    )
  })

  return (
    <main>
      <section className="homepage-slider bg-section">
        <div className="container-fluid">
          <div className="row gx-5 p-5">
            <div className="col-lg-8">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="false"
                data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active p-5">
                    <div className="text-red pb-4">
                      <h1 className="fs-0 w-40 fw-bold">Fresh New Fruits Available</h1>
                      <p className="fs-5 w-35">New arrivals with fruits in season, essential for the spring</p>
                    </div>
                    <Button size="md" className="shop-button">
                      Shop Now
                    </Button>
                  </div>
                  <div className="carousel-item p-5">
                    <div className="text-brown pb-5">
                      <h2 className="fs-0 w-40 fw-bold">Freshly Baked Goods</h2>
                      <p className="fs-5 w-35">
                        Fresh from the oven, local farmers use fresh ingredients for the bread
                      </p>
                    </div>
                    <Button size="md" className="shop-button">
                      Shop Now
                    </Button>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-box overflow-hidden">
                <div className="text-light p-5">
                  <h1 className="fw-bold w-60">GOT PRODUCTS TO SELL</h1>
                  <p className="fs-5">Post an advert to sell now, let us help you reach customers </p>
                  <Button size="sm" className="shop-button mt-5">
                    Sell Now
                  </Button>
                </div>
                <img src={Farmer} alt="" className="img-fluid ms-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore-section p-5">
        <span className="heading d-flex align-items-center justify-content-between pb-3">
          <h3>Explore Categories</h3>
          <p className="m-0">See All</p>
        </span>
        <div className="category-section grid">{categoryGrid}</div>
      </section>
      <div className="promo-banner container overflow-hidden">
        <div className="row text-light g-0">
          <div className="col-lg-3">
            <div className="promo-details p-3">
              <p className="fs-5 fw-bold text-uppercase pb-3">20% off</p>
              <h1 className="display-1 ">Almond Breeze</h1>
              <p className="fs-4 fw-light pt-4">March 28 - April 4</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={AlmondBreeze} alt="Almond Breeze" className="img-fluid m-auto" />
          </div>
          <div className="col-lg-3">
            <div className="deals d-flex text-end align-items-end flex-column py-4">
              <h1 className="fs-1 m-0 py-2">Easter Sale</h1>
              <p className="fs-5 py-2">100% made from almonds, full of nutrients and less calories than normal milk</p>
              <Button className="shop-button mt-4" size="lg" variant="outlined">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="deals-section p-5 mb-5">
        <span className="heading d-flex align-items-center justify-content-between pb-4">
          <h3>Popular Deals</h3>
          <p className="m-0">See All</p>
        </span>
        <div className="deals-grid ">
          <DealBox color="orange">
            <div className="row">
              <div className="col-lg-8 p-2">
                <h2 className="fw-bold">100% Pure Orange Juice</h2>
                <p className="fs-5">Fresh orange juice with no added preservatives</p>
              </div>
              <div className="col-lg-4">
                <img src="https://i.imgur.com/kB2iRQx.png" alt="orange" className="img-fluid" />
              </div>
            </div>
          </DealBox>
          <DealBox className="d-flex" color="salmon">
            <div>
              <span className="d-flex align-items-center">
                <h2 className="fw-bold">₦2,500.00</h2>
                <s>₦4,500.00</s>
              </span>
              <h5 className="pt-3 fw-bold w-75">CANNED FISH SALMON</h5>
              <p className="fw-bold pt-5">250g</p>
            </div>
            <img src="https://i.imgur.com/4dJuDn5.png" alt="" className="img-fluid" />
          </DealBox>
          <DealBox color="pink">
            <div className="text-light">
              <h2 className="fw-bold">whole milk</h2>
              <p className="fs-5 w-75">Fresh milk and lactose-free providing all the ingredients</p>
              <div className="pt-5 fw-bold">
                ONLY
                <h3>₦1,800.00</h3>
              </div>
            </div>
            <img src={Milk} alt="" className="img-fluid" />
          </DealBox>
          <DealBox color="brown">
            <div className="text-light py-3">
              <h2 className="fw-bold">Wheat Bread</h2>
              <p className="fs-5 w-75">Whole-grain wheat bread, freshly-baked</p>
            </div>
            <img src="https://i.imgur.com/ZVUhFI4.png" alt="" className="img-fluid" />
          </DealBox>
        </div>
      </section>
      <section className="bg-section p-5">
        <div className="title-grid d-flex align-items-center justify-content-between pb-4">
          <h3 className="fw-bold">Best Sellers</h3>
          <div>All</div>
          <div>Fruits & Vegetables</div>
          <div>Frozen Seafoods</div>
          <div>Dairy Products</div>
          <div>Wheat and Grains</div>
          <div>Bread and Pastries</div>
          <div>Raw Meats</div>
        </div>
        <div className="container-fluid px-5">
          <div className="row px-5">
            <div className="col-lg-8">
              <div className="d-flex flex-column">
                <DealBox color="dark-orange">
                  <div className="deal-text text-light">
                    <h3 className="fw-bolder w-75">YOUR EVERYDAY ITEMS DELIVERED AT YOUR DOORSTEP</h3>
                    <h1 className="ps-5 text-uppercase w-75">For Free</h1>
                    <p className="pt-5 mt-3 small">Terms and Conditions Apply</p>
                  </div>
                  <img src="https://i.imgur.com/MAjy2h8.png" alt="" className="img-fluid position-relative" />
                </DealBox>
                <DealBox color="green">
                  <div className="flex-column text-light">
                    <h1 className="fw-bolder">GROCERY SUPER DEALS</h1>
                    <h5 className="fs-5 ">Save more on your groceries</h5>
                  </div>
                  <img src="https://i.imgur.com/9oB1oOH.png" alt="" className="img-fluid position-relative" />
                </DealBox>
              </div>
            </div>
            <div className="col-lg-4">
              <DealBox className="with-bg h-100 d-flex flex-column text-center p-5">
                <h1 className="red-text fw-bolder">15% OFF</h1>
                <h4 className="fw-semibold">For new users, sign up for this exclusive promo</h4>
                <form action="" method="post" className="d-flex flex-column align-items-center">
                  <div className="input-group py-3">
                    <span className="input-icon position-relative">
                      <EnvelopeIcon className="position-absolute" size="xl" />
                    </span>
                    <input type="email" name="email" placeholder="Email address" className="form-control p-4 w-100" />
                  </div>
                  <div className="input-group py-2">
                    <span className="input-icon position-relative">
                      <LockIcon className="position-absolute" size="xl" />
                    </span>
                    <input type="password" name="password" placeholder="Password" className="form-control p-4 w-100" />
                  </div>
                  <div className="input-group py-3">
                    <span className="input-icon position-relative">
                      <RepeatIcon className="position-absolute" size="xl" />
                    </span>
                    <input
                      type="password"
                      name="confirm-password"
                      placeholder="Confirm Password"
                      className="form-control p-4 w-100"
                    />
                  </div>
                  <Button className="btn-register fw-bold" size="lg">
                    Register Now
                  </Button>
                </form>
              </DealBox>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
