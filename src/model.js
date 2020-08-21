import img1 from "./assets/img/1.png";

export const model = [
         {
           type: "title",
           value: "defaultTitle",
           options: {
             styles: "background: navy; color:#fff; text-align:center",
             tag: "h2",
           },
         },
         {
           type: "text",
           value:
             "lorem ipsum dolor sit amet, consecteture wwjgawjgjawg jgwajg aw",
           options: {
             styles: "background: red; color:yellow",
           },
         },
         {
           type: "textColumns",
           value: ["1 example", "2 example", "3 example"],
           options: {
             styles: "background: yellow; color:green; padding:5px",
           },
         },
         {
           type: "image",
           value: img1,
           options: {
             alt: "img1",
           },
         },
       ];