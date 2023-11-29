import "bootstrap/dist/css/bootstrap.css";
import MySplider from "./MySplider";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function MyNewCarousel() {
  // custom productDetails
  const productDetails = {
    Name: "productDetails : Name",
    Capacity: "10TB",
    Brand: "Seagate",
    Interface: "SATA 6Gb/s",
    Speed: "7200 RPM",
    Cache: "256MB",
    Usage: "Internal",
    "Advanced Features": [
      "Optimized for creative professionals, gamers, and system builders",
      "Supports multi-tier caching technology",
      "Designed for 24/7 operation",
    ],
  };

  const imageURLs = [image1, image2, image3, image4, image5];
  const productData = [];
  for (let i in imageURLs) {
    productData.push({
      imageUrl: imageURLs[i],
      productDetails,
    });
  }

  return (
    <>
      <div className="container">
        <MySplider
          height={800}
          productData={productData}
          perPage={1}
          title={"MyNewCarousel"}
        />
      </div>
    </>
  );
}

export default MyNewCarousel;
