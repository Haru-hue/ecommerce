import { useLocation } from "react-router";
import { GoogleStoreBadge } from "../assets/images";

import {
  CopyrightIcon,
  EnvelopeSolidIcon,
  HouseIcon,
  MoneyBillIcon,
  PhoneIcon,
  ShieldIcon,
  TagsIcon,
  UserGroupIcon,
} from "../components/icons";

export default function Footer() {
  const location = useLocation();
  const isHidden = location.pathname.startsWith("/user")
    ? "footer hidden"
    : "footer";

  return (
    <footer className="container-fluid">
      <div className={isHidden}>
        <ul className="services-section d-flex justify-content-between p-5 w-75 m-auto">
          <li className="service d-flex align-items-center ">
            <ShieldIcon size="xl" />
            <span className="d-flex flex-column ps-3 lh-1">
              <h5 className="fw-bold">Shop with Confidence</h5>
              <p className="small text-muted">We got you covered</p>
            </span>
          </li>
          <li className="service d-flex align-items-center">
            <TagsIcon size="xl" />
            <span className="d-flex flex-column ps-3 lh-1">
              <h5 className="fw-bold">Great Offers</h5>
              <p className="small text-muted">Discounted items up to 70%</p>
            </span>
          </li>
          <li className="service d-flex align-items-center">
            <MoneyBillIcon size="xl" />
            <span className="d-flex flex-column ps-3 lh-1">
              <h5 className="fw-bold">Become a Seller</h5>
              <p className="small text-muted">Make money with our help</p>
            </span>
          </li>
          <li className="service d-flex align-items-center">
            <UserGroupIcon size="xl" />
            <span className="d-flex flex-column ps-3 lh-1">
              <h5 className="fw-bold">24/7 Customer Support</h5>
              <p className="small text-muted">Round-the-clock assistance</p>
            </span>
          </li>
        </ul>
        <div className="footer-bottom p-5">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="fw-bold">
                FarmHub - Connecting Farmers to Buyers
              </h5>
              <p className="ext-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="pt-3">
                <li className="d-flex">
                  <PhoneIcon className="text-muted" />
                  <span className="d-flex flex-column lh-0 ps-2">
                    <p className="text-muted">Hotline:</p>
                    <h3 className="fw-bold">+234 (705) 923 0778</h3>
                  </span>
                </li>
                <li className="d-flex align-items-center pt-3 text-muted">
                  <HouseIcon />
                  <p className="ps-3 m-0">Babcock University</p>
                </li>
                <li className="d-flex align-items-center pt-3 text-muted">
                  <EnvelopeSolidIcon />
                  <p className="ps-3 m-0">ukojoshy@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="fw-bold pb-3">About Us</h5>
              <ul className="text-muted">
                <li className="small py-1">About FarmHub</li>
                <li className="small py-1">Terms & Conditions</li>
                <li className="small py-1">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="fw-bold pb-3">Support Center</h5>
              <ul className="text-muted">
                <li className="small py-1">Safety Tips</li>
                <li className="small py-1">About Us</li>
                <li className="small py-1">FAQ</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="fw-bold pb-3">FarmHub Retail</h5>
              <ul className="text-muted">
                <li className="small py-1">Sell with FarmHub</li>
                <li className="small py-1">Become a Sales Consultant</li>
                <li className="small py-1">Accessibility</li>
                <li className="small py-1">Advertise with Us</li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="fw-bold pb-3">Resources</h5>
              <div className="play-icon">
                <img
                  src={GoogleStoreBadge}
                  alt="google store badge"
                  className="img-fluid w-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright p-4 text-muted">
        <CopyrightIcon /> 2023 <b className="text-dark">FarmHub.</b> by Uko
        Joshua. All Rights Reserved
      </div>
    </footer>
  );
}
