import { Router } from "express";
import xmlParser from "express-xml-bodyparser";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import InitMiddleware from "@middleware/InitMiddleware";
import adminRouter from "@controller/Admin";
import userRouter from "@controller/User";
import productRouter from "@controller/Product";
import categoryRouter from "@controller/Category";
import cartRouter from "@controller/Cart";
import orderRouter from "@controller/Order";
import addressRouter from "@controller/Address";
import bannerRouter from "@controller/Banner";
import qiniuToken from "@controller/Token";
const router = Router();
router.use(compression());
router.use(helmet({ policy: "https://www.fancystore.cn" }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));
router.use(xmlParser({}));
router.use(cookieParser("fancystore"));
router.use(InitMiddleware);
router.use("/api/user", userRouter);
router.use("/api/product", productRouter);
router.use("/api/category", categoryRouter);
router.use("/api/cart", cartRouter);
router.use("/api/order", orderRouter);
router.use("/api/address", addressRouter);
router.use("/api/banner", bannerRouter);
router.use("/api/admin", adminRouter);
router.use("/api/token", qiniuToken);
export default router;
