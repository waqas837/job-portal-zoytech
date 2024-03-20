// import db, { connectDB } from "../config/db";
// import qoutesModel from "../model/qoutesModel";
// connectDB();
// export async function POST(req, res) {
//   try {
//     const { quote, author } = await req.json();
//     const qoutes = new qoutesModel({
//       quote,
//       author,
//     });
//     let res = await qoutes.save();
//     // console.log("we have res from databse", res);
//     return Response.json({ success: true });
//   } catch (error) {
//     console.log("err", error);
//   }
// }
