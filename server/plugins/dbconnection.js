import mongoose from "mongoose";
const mongodbUri = useRuntimeConfig().mongodbUri;
export default async () => {
  try {
    console.log(`連線資料庫${mongodbUri}...`);
    await mongoose.connect(mongodbUri);
    console.log("資料庫連線成功");
  } catch (error) {
    console.error("連線失敗，理由：", error);
  }
};
