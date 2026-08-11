import Image from "next/image";
import styles from "./ProductViewer.module.css";

interface ProductViewerProps {
  view?: "front" | "back";
  className?: string;
  altText?: string;
}

export function ProductViewer({
  view = "front",
  className = "",
  altText = "Premium Artha Coffee Cup",
}: ProductViewerProps) {
  const imageSrc =
    view === "front"
      ? "/assets/products/coffee-cup/coffee-cup-front.webp"
      : "/assets/products/coffee-cup/coffee-cup-back.webp";

  return (
    <div className={`${styles.productContainer} ${className}`} aria-label={altText}>
      {/* 
        This foundation sets up the cinematic Product asset for TASK-010. 
        TASK-011+ will expand on this with Framer Motion, scroll-driven movement,
        and camera transitions.
      */}
      <Image
        src={imageSrc}
        alt={altText}
        width={800}
        height={800}
        priority // Ensures this hero image is not lazy loaded, optimizing initial page load
        className={styles.productImage}
        quality={90} // High quality for luxury aesthetic
      />
    </div>
  );
}
