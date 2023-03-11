const ProductPage = () => {
  return (
    <main className="product-page">
      <section className="product-desc">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src="" alt="" className="img-fluid product-box" />
              <div className="view">1</div>
            </div>
            <div className="col-lg-4">
              <div className="desc">
                <div className="product-links"></div>
                <h2>Almond Breeze</h2>
                <div className="ratings">
                  <b>3 reviews</b>
                </div>
                <h4>₦2,500</h4>
                <ul>
                  <li>
                    <span>Icon</span>
                    Non-negotiable
                  </li>
                  <li>
                    <span>Icon</span>
                    March 28, 2023
                  </li>
                  <li>
                    <span>Icon</span>
                    Sagamu, Ogun State
                  </li>
                </ul>
              </div>
              <ul className="product-specs">
                <li>Availabity: In Stock</li>
                <li>Condition: Very Good</li>
                <li>Shelf Life: 30 Days</li>
              </ul>
              <button className="btn-show">Show contact</button>
            </div>
            <div className="col-lg-4">
              <ul className="tips">
                <li>
                  <h3>
                    <span>Icon</span>
                    Be Cautious
                  </h3>
                </li>
                <li>
                  <h3>
                    <span>Icon</span>
                    Avoid Scams
                  </h3>
                </li>
                <li>
                  <h3>
                    <span>Icon</span>
                    Secure Payments
                  </h3>
                </li>
              </ul>
              <div className="farmer-contact">
                <div className="row">
                  <div className="col-lg-4">Icon</div>
                  <div className="col-lg-8">
                    <h3>Mark Smith</h3>
                    <div className="ratings"></div>
                  </div>
                </div>
                <button className="farmer-contact">Contact Me</button>
              </div>
              <button className="submit btn-ad">Post an Ad Like This</button>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="details-box">
                <button>Description</button>
                <button>Reviews (3)</button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="end-0 position-absolute"> Report abuse</div>
              <div className="details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other-product">
        <h3>Related Products</h3>
        <div className="products-grid">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
