import Image from "next/image";
import Link from "next/link";

const Blog7 = () => {
    return (
        <div className="blog blog-inline blog-page bg1 sp">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto text-center">
                    <div className="heading1 main">
                        <h2>View More Blog</h2>
                    </div>
                </div>
            </div> 
            <div className="space30"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                <Image src="/assets/img/blog/blog2-img2.png" alt="img" width={636} height={457}   />
                </div>
                <div className="heading1">
                  <div className="tags">
                    <a href="#" className="date"><Image src="/assets/img/icons/date.png" alt="img" width={20} height={20}   /> 10/02/2024</a>
                    <a href="#" className="date outhor"><Image src="/assets/img/icons/user.png" alt="img" width={12} height={14}   /> Ben Cutting</a>
                  </div>
                  <h4><Link href="/blog/blog-details">Get the Scoop: Our Latest News & Announcements</Link></h4>
                  <div className="space16"></div>
                  <p>Whether you're looking to navigate your career path or enhance.</p>
                  <div className="space16"></div>
                  <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="blog2-box">
                <div className="image">
                <Image src="/assets/img/blog/blog2-img1.png" alt="img" width={636} height={457}   />
                </div>
                <div className="heading1">
                  <div className="tags">
                  <a href="#" className="date"><Image src="/assets/img/icons/date.png" alt="img" width={20} height={20}   /> 10/02/2024</a>
                  <a href="#" className="date outhor"><Image src="/assets/img/icons/user.png" alt="img" width={12} height={14}   /> Ben Cutting</a>
                  </div>
                  <h4><Link href="/blog/blog-details">Industry Insights: Latest News & Developments</Link></h4>
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

export default Blog7;