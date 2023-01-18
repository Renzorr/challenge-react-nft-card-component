import Card_info from "./Card_Info";
import Card_owner from "./Card_Owner";
import Card_picture from "./Card_Picture";

import { useMotionValue, useTransform, motion } from "framer-motion";

function Card() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <div>
      <motion.main
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="card"
      >
        <h1>NFT Preview Card Component</h1>
        <motion.div style={{  rotateX, rotateY, z: 10000 }}>
          <Card_picture />
        </motion.div>
        <Card_info />
        <Card_owner />
      </motion.main>
    </div>
  );
}

export default Card;
