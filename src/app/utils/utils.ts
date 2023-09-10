
export async function Planner(days: number, destination: string) {
  
  const url = `https://ai-trip-planner.p.rapidapi.com/?days=${days}&destination=${destination}`;

  const headers = {
    'X-RapidAPI-Key': '593339e85emshd1227b6b2b51096p13bebfjsn2779a7908c13',
    'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
  };

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const result = await response.json();

  return result;
}

// {
//   "plan": [
//     {
//       "day": 1,
//       "activities": [
//         {
//           "time": "9:00 AM",
//           "description": "Arrive at London Heathrow Airport and check-in to hotel"
//         },
//         {
//           "time": "1:00 PM",
//           "description": "Explore the famous British Museum"
//         },
//         {
//           "time": "4:00 PM",
//           "description": "Take a stroll along the iconic River Thames"
//         },
//         {
//           "time": "7:00 PM",
//           "description": "Dine at a traditional British pub"
//         }
//       ]
//     },
//     {
//       "day": 2,
//       "activities": [
//         {
//           "time": "9:00 AM",
//           "description": "Visit the historic Tower of London"
//         },
//         {
//           "time": "12:00 PM",
//           "description": "Enjoy a Thames River Cruise"
//         },
//         {
//           "time": "3:00 PM",
//           "description": "Explore the vibrant Covent Garden Market"
//         },
//         {
//           "time": "7:00 PM",
//           "description": "Watch a classic play at West End Theatre"
//         }
//       ]
//     },
//     {
//       "day": 3,
//       "activities": [
//         {
//           "time": "10:00 AM",
//           "description": "Take a guided tour of Buckingham Palace"
//         },
//         {
//           "time": "1:00 PM",
//           "description": "Indulge in a traditional afternoon tea experience"
//         },
//         {
//           "time": "3:00 PM",
//           "description": "Visit the renowned Westminster Abbey"
//         },
//         {
//           "time": "7:00 PM",
//           "description": "Enjoy a dinner cruise on the River Thames"
//         }
//       ]
//     },
//     {
//       "day": 4,
//       "activities": [
//         {
//           "time": "9:00 AM",
//           "description": "Explore the vibrant Camden Market"
//         },
//         {
//           "time": "12:00 PM",
//           "description": "Visit the picturesque Primrose Hill for a panoramic view of London"
//         },
//         {
//           "time": "3:00 PM",
//           "description": "Discover the artistic wonders of Tate Modern"
//         },
//         {
//           "time": "7:00 PM",
//           "description": "Sample diverse cuisines at Borough Market"
//         }
//       ]
//     },
//     {
//       "day": 5,
//       "activities": [
//         {
//           "time": "10:00 AM",
//           "description": "Take a tour of the iconic Tower Bridge"
//         },
//         {
//           "time": "1:00 PM",
//           "description": "Visit the impressive St Paul's Cathedral"
//         },
//         {
//           "time": "3:00 PM",
//           "description": "Explore the vibrant South Bank area"
//         },
//         {
//           "time": "7:00 PM",
//           "description": "Enjoy a musical performance at the Royal Albert Hall"
//         }
//       ]
//     }
//   ],
//   "key": "30-london, uk",
//   "_id": "64fb5bcaf6b3b2b979a0f1c9"
// }

// // Assuming you have the JSON data stored in a variable called 'responseData'
// const responseData = {
//   // ... (the JSON data you provided)
// };

// // Iterate through each day's plan
// responseData.plan.forEach(dayPlan => {
//   // 'dayPlan' represents one day's plan, including its 'day' and 'activities' array
  
//   const day = dayPlan.day; // Extract the 'day' for the current dayPlan
  
//   // Iterate through each activity on the day
//   dayPlan.activities.forEach(activity => {
//     // 'activity' represents one activity within the 'activities' array
    
//     const time = activity.time; // Extract the 'time' for the current activity
//     const description = activity.description; // Extract the 'description' for the current activity

//     // Now you can use 'day', 'time', and 'description' as needed
//     console.log(`Day ${day}, Time: ${time}, Description: ${description}`);
//     // Print or use the 'day', 'time', and 'description' for each activity
//   });
// });
