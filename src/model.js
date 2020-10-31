import img1 from "./assets/img/1.png";

export const model = [
         {
           type: "title",
           value: "Page constructor",
           options: {
             styles:
               "background: antiquewhite; color:black; text-align:center;padding:20px 0;font-size:30px;",
             tag: "h2",
           },
         },
         {
           type: "text",
           value:
             "lorem ipsum dolor sit amet, consecteture wwjgawjgjawg jgwajg aw",
           options: {
             styles:
               "background: antiquewhite; color:#000; padding: 20px 0; padding-left:15px;font-size:25px;",
           },
         },
         {
           type: "textColumns",
           value: ["1 example", "2 example", "3 example"],
           options: {
             styles:
               "background: antiquewhite; color:#000; padding: 50px 15px;font-size: 20px;",
           },
         },
         {
           type: "image",
           value: img1,
           options: {
             alt: "img1",
             styles:
               "background: antiquewhite; padding:40px 0; padding-left:15px",
           },
         },
       ];