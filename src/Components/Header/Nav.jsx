"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDown from './DropDown';
import { useState, useEffect } from 'react';

export default function Nav({ setMobileToggle }) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // Set active item based on current path
    setActiveItem(pathname);
  }, [pathname]);
  return (
    <ul className="cs_nav_list fw-medium">
      <li className={`menu-item ${activeItem === '/home' ? 'active' : ''}`}>
        <Link
          href="/home"
          onClick={() => setMobileToggle(false)}
          className="nav-link"
        >
          Home
        </Link>
      </li>

      <li className={`menu-item ${activeItem === '/about' ? 'active' : ''}`}>
        <Link
          href="/about"
          onClick={() => setMobileToggle(false)}
          className="nav-link"
        >
          About Us
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
              About Light
              </Link>
            </li>
            <li>
              <Link href="/aboutdark" onClick={() => setMobileToggle(false)}>
              About Dark
              </Link>
            </li>                        
          </ul>
        </DropDown> */}

      </li>

      {/* <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link href="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonial
              </Link>
            </li>  
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>         
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>                        
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
                Project
              </Link>
            </li>           
            <li>
              <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Project Details
              </Link>
            </li> 
            <li>
              <Link href="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>       */}

      {/* <li className="menu-item-has-children">
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        Project  
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/project" onClick={() => setMobileToggle(false)}>
              Project Light
              </Link>
            </li>
            <li>
              <Link href="/projectdark" onClick={() => setMobileToggle(false)}>
              Project Dark
              </Link>
            </li>            
            <li>
              <Link href="/project/project-details" onClick={() => setMobileToggle(false)}>
                Project Details Left
              </Link>
            </li>
            <li>
              <Link href="/project/project-details-right" onClick={() => setMobileToggle(false)}>
              Project Details Right
              </Link>
            </li>
            <li>
              <Link href="/project/project-details-center" onClick={() => setMobileToggle(false)}>
              Project Details Center
              </Link>
            </li> 
            <li>
              <Link href="/projectdark/project-details-dark" onClick={() => setMobileToggle(false)}>
                Project Details Left Dark
              </Link>
            </li>
            <li>
              <Link href="/projectdark/project-details-right-dark" onClick={() => setMobileToggle(false)}>
                Project Details Right Dark
              </Link>
            </li> 
            <li>
              <Link href="/projectdark/project-details-center-dark" onClick={() => setMobileToggle(false)}>
                Project Detail Center Dark
              </Link>
            </li>                                                              
          </ul>
        </DropDown>

      </li>       */}
      <li className={`menu-item ${activeItem === '/service' ? 'active' : ''}`}>
        <Link
          href="/service"
          onClick={() => setMobileToggle(false)}
          className="nav-link"
        >
          Services
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services Light
              </Link>
            </li>
            <li>
              <Link href="/servicedark" onClick={() => setMobileToggle(false)}>
                Services Dark
              </Link>
            </li>           
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details Left
              </Link>
            </li>
            <li>
              <Link href="/service/service-details-right" onClick={() => setMobileToggle(false)}>
                Service Details Right
              </Link>
            </li>
            <li>
              <Link href="/service/service-details-center" onClick={() => setMobileToggle(false)}>
                Service Details Center
              </Link>
            </li> 
            <li>
              <Link href="/servicedark/service-details-dark" onClick={() => setMobileToggle(false)}>
                Service Details Left Dark
              </Link>
            </li>
            <li>
              <Link href="/servicedark/service-details-right-dark" onClick={() => setMobileToggle(false)}>
                Service Details Right Dark
              </Link>
            </li>
            <li>
              <Link href="/servicedark/service-details-center-dark" onClick={() => setMobileToggle(false)}>
                Service Detail Center Dark
              </Link>
            </li>                       
          </ul>
        </DropDown> */}

      </li>
      <li className={`menu-item ${activeItem === '/blog' ? 'active' : ''}`}>
        <Link
          href="/blog"
          onClick={() => setMobileToggle(false)}
          className="nav-link"
        >
          Blog
        </Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blog Light
              </Link>
            </li> 
            <li>
              <Link href="/blogdark" onClick={() => setMobileToggle(false)}>
                Blog Dark
              </Link>
            </li>                      
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left
              </Link>
            </li>
            <li>
              <Link href="/blog/blog-details-right" onClick={() => setMobileToggle(false)}>
              Blog Details Right
              </Link>
            </li>  
            <li>
              <Link href="/blog/blog-details-center" onClick={() => setMobileToggle(false)}>
              Blog Details Center
              </Link>
            </li> 
            <li>
              <Link
                href="/blogdark/blog-details-dark"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left Dark
              </Link>
            </li>
            <li>
              <Link href="/blogdark/blog-details-right-dark" onClick={() => setMobileToggle(false)}>
              Blog Details Right Dark
              </Link>
            </li>  
            <li>
              <Link href="/blogdark/blog-details-center-dark" onClick={() => setMobileToggle(false)}>
              Blog Detail Center Dark
              </Link>
            </li>           

          </ul>
        </DropDown> */}
      </li>
    </ul>
  );
}
