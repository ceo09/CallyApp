// import { CardProps } from "../Types/Types"
// import { aboutUs } from "../constant"



// // const Card = (Props: CardProps) => {
// //     return (
// //         <section>
// //             <div>
// //                 <h1 className="text-center text-white text-xl pt-10 font-Poppins">{Props[0]}</h1>
// //                 <h3 className="text-center text-white text-3xl pt-3 pb-5 font-[poppins]">{Props[1]}</h3>

// //                 <div className="container md:h-[410px] md:ml-8 md:grid md:grid-cols-4 md:gap-4 justify-items-center grid grid-rows-4 gap-y-5">

// //                     <div className="w-[300px] md:h-[400px] bg-white rounded-md">

// //                     <h1 className="text-center pt-4 text-indigo-800 text-2xl font-Poppins">{Props.title}</h1>
// //                     <p className="text-center p-5 text-indigo-800">{Props.text}</p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }

// // const Aboutus = () => {
// //     const aaa = aboutUs.map((aa) => {
// //         return (
// //             <Card {...aa}/>
// //         )
// //     })
// //     return aaa
// // }

// // export default Card;



// // import React from 'react';

// // type CardProps = {
// //     title: string;
// //     text: string;
// // };

// // const aboutUs = [
// //     'ONLINE TRAVEL AGENCY',
// //     'We Help Travelers',
// //     {
// //         title: "TRAVEL",
// //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolorem laborum enim perspiciatis aperiam amet quo sint voluptatem molestiae eaque similique veritatis eos repellendus voluptas vero laboriosam aspernatur architecto suscipit dicta officiis beatae. Autem ipsum numquam aliquid repudiandae deleniti. Id.'
// //     },
// //     {
// //         title: "BENEFITS",
// //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolorem laborum enim perspiciatis aperiam amet quo sint voluptatem molestiae eaque similique veritatis eos repellendus voluptas vero laboriosam aspernatur architecto suscipit dicta officiis beatae. Autem ipsum numquam aliquid repudiandae deleniti. Id.'
// //     },
// //     {
// //         title: "ABOUT",
// //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolorem laborum enim perspiciatis aperiam amet quo sint voluptatem molestiae eaque similique veritatis eos repellendus voluptas vero laboriosam aspernatur architecto suscipit dicta officiis beatae. Autem ipsum numquam aliquid repudiandae deleniti. Id.'
// //     },
// //     {
// //         title: "AWARDS",
// //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolorem laborum enim perspiciatis aperiam amet quo sint voluptatem molestiae eaque similique veritatis eos repellendus voluptas vero laboriosam aspernatur architecto suscipit dicta officiis beatae. Autem ipsum numquam aliquid repudiandae deleniti. Id.'
// //     },
// // ];

// const Card: React.FC<CardProps> = ({ title, text }) => {
//     return (
//         <section>
//             <div>
//                 <h1 className="text-center text-white text-xl pt-10 font-Poppins">{title}</h1>
//                 <h3 className="text-center text-white text-3xl pt-3 pb-5 font-[poppins]">{text}</h3>

//                 <div className="container md:h-[410px] md:ml-8 md:grid md:grid-cols-4 md:gap-4 justify-items-center grid grid-rows-4 gap-y-5">

//                     <div className="w-[300px] md:h-[400px] bg-white rounded-md">

//                         <h1 className="text-center pt-4 text-indigo-800 text-2xl font-Poppins">{title}</h1>
//                         <p className="text-center p-5 text-indigo-800">{text}</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const Aboutus: React.FC = () => {
//     const aaa = aboutUs.map((aa, index) => {
//         if (typeof aa === 'string') {
//             return (
//                 <div key={index} className="text-center text-white text-xl pt-10 font-Poppins">{aa}</div>
//             );
//         } else {
//             return (
//                 <Card key={index} title={aa.title} text={aa.text} />
//             );
//         }
//     });

//     return (
//         <div>
//             {aaa}
//         </div>
//     );
// };

// export default Aboutus;
