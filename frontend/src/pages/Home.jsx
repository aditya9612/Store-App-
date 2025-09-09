import sliderBg from "../assets/images/slider-bg.jpg";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import p10 from "../assets/images/p10.png";
import p11 from "../assets/images/p11.png";
import p12 from "../assets/images/p12.png";


export default function Home() {
  return (
    <>
      {/* Slider Section */}
      <section className="slider_section">
        <div className="slider_bg_box">
          <img src={sliderBg} alt="slider background" />
        </div>

        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid error
                        repudiandae earum suscipit fugiat molestias, veniam, vel
                        architecto veritatis delectus repellat modi impedit
                        sequi.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* copy more slides if needed */}
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid error
                        repudiandae earum suscipit fugiat molestias, veniam, vel
                        architecto veritatis delectus repellat modi impedit
                        sequi.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid error
                        repudiandae earum suscipit fugiat molestias, veniam, vel
                        architecto veritatis delectus repellat modi impedit
                        sequi.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Shop With Us</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  {/* Add SVG here */}
                </div>
                <div className="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  {/* Add SVG here */}
                </div>
                <div className="detail-box">
                  <h5>Free Shipping</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  {/* Add SVG here */}
                </div>
                <div className="detail-box">
                  <h5>Best Quality</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p1} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Men&apos;s Shirt</h5>
                  <h6>$75</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p2} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Men&apos;s Shirt</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p3} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Women&apos;s Dress</h5>
                  <h6>$68</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p4} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Women&apos;s Dress</h5>
                  <h6>$70</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p5} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Women&apos;s Dress</h5>
                  <h6>$75</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p6} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Women&apos;s Dress</h5>
                  <h6>$58</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p7} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Women&apos;s Dress</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p8} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Men&apos;s Shirt</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p9} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Men&apos;s Shirt</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p10} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Men&apos;s Shirt</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div>

              <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p11} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Men&apos;s Shirt</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div> 
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src={p12} alt="product" />
                </div>
                <div className="detail-box">
                  <h5>Women&apos;s Dress</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div>
          </div>
           <div class="btn-box">
               <a href="">
               View All products
               </a>
            </div>
        </div>
      </section>
       <section class="subscribe_section">
         <div class="container-fuild">
            <div class="box">
               <div class="row">
                  <div class="col-md-6 offset-md-3">
                     <div class="subscribe_form ">
                        <div class="heading_container heading_center">
                           <h3>Subscribe To Get Discount Offers</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <form action="">
                           <input type="email" placeholder="Enter your email"/>
                           <button>
                           subscribe
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
