import Image from "next/image";
import Link from "next/link";

const Blog4 = () => {
    return (
        <div className="blog4 sp">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 m-auto text-center">
                    <div className="heading4">
                        <span className="span" data-aos="zoom-in-left" data-aos-duration="700">Blog & News 👋</span>
                        <h2 className="title tg-element-title">See Our Latest Blog & News</h2>
                    </div>
                </div>
            </div>

            <div className="space30"></div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="blog4-box" data-aos="zoom-in-up" data-aos-duration="900">
                        <div className="image image-anime">
                        <Image src="/assets/img/blog/blog-img1.jpg" alt="img" width={636} height={457}   />
                        </div>
                        <div className="heading4">
                          <div className="tags">
                            <a href="#" className="date">
                            <Image src="/assets/img/icons/date3.png" alt="img" width={20} height={20}   />
                                Feb 24, 24</a>
                            <a href="#" className="date outhor">
                            <Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   />
                                 M.Rahman</a>
                          </div>
                            <h3><Link href="/blog/blog-details">Get the Scoop: Our Latest News & Announcements</Link></h3>
                            <div className="space16"></div>
                            <p>Whether you're looking to navigate your career path or enhance.</p>
                            <div className="space16"></div>
                            <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="blog4-box" data-aos="zoom-in-up" data-aos-duration="700">
                        <div className="image image-anime">
                        <Image src="/assets/img/blog/blog-img2.jpg" alt="img" width={636} height={457}   />
                        </div>
                        <div className="heading4">
                          <div className="tags">
                          <a href="#" className="date">
                            <Image src="/assets/img/icons/date3.png" alt="img" width={20} height={20}   />
                                Feb 24, 24</a>
                            <a href="#" className="date outhor">
                            <Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   />
                                 M.Rahman</a>
                          </div>
                            <h3><Link href="/blog/blog-details">Industry Insights: Latest News & Developments</Link></h3>
                            <div className="space16"></div>
                            <p>Our blog serves as an invaluable and comprehensive resource for both job seekers looking for opportunities and employers seeking top talent.</p>
                            <div className="space16"></div>
                            <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                        </div> 
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
};

export default Blog4;