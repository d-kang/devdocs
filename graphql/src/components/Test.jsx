const associatedProductsById = {
  1: { name: 'face cream', id: 3 },
  123: { name: 'foot cream', id: 3 },
  234: { name: 'lotion', id: 234 },
  456: { name: 'cream', id: 456 },
  678: { name: 'conditioner', id: 678 },
  1134: { name: 'face lotion', id: 1134 },
  2356: { name: 'hand lotion', id: 2356 },
  1236: { name: 'shampoo', id: 1236 },
  4563: { name: 'perfume', id: 4563 },
  6764: { name: 'soap', id: 6764 },
};

const hi = () => 'hello world';

const ingredientsList = [
  {
    ingredientId: '238',
    associatedProductIds: [234, 456, 1, 123, 2356, 1236],
  },
  {
    ingredientId: '239',
    associatedProductIds: [678, 234, 4563, 431, 6764, 1134],
  },
];

const result = ingredientsList.map(ingredientItem => {
  const associatedProductsList = ingredientItem.associatedProductIds.map(
    id => associatedProductsById[id]
  );

  return {
    ...ingredientItem,
    associatedProductIds: associatedProductsList,
  };
});

console.log(JSON.stringify(result, null, 2));

// result =>>>
// [
//   {
//     "ingredientId": "238",
//     "associatedProductIds": [
//       {
//         "name": "lotion",
//         "id": 234
//       },
//       {
//         "name": "cream",
//         "id": 456
//       },
//       {
//         "name": "face cream",
//         "id": 3
//       },
//       {
//         "name": "foot cream",
//         "id": 3
//       },
//       {
//         "name": "hand lotion",
//         "id": 2356
//       },
//       {
//         "name": "shampoo",
//         "id": 1236
//       }
//     ]
//   },
//   {
//     "ingredientId": "239",
//     "associatedProductIds": [
//       {
//         "name": "conditioner",
//         "id": 678
//       },
//       {
//         "name": "lotion",
//         "id": 234
//       },
//       {
//         "name": "perfume",
//         "id": 4563
//       },
//       null,
//       {
//         "name": "soap",
//         "id": 6764
//       },
//       {
//         "name": "face lotion",
//         "id": 1134
//       }
//     ]
//   }
// ]

// const result = [
//   {
//     ingredientId: '238',
//     associatedProductIds: [
//       { name: 'lotion', id: 1 },
//       { name: 'cream', id: 2 },
//       { name: 'face cream', id: 3 },
//     ],
//   },
//   {
//     ingredientId: '239',
//     associatedProductIds: [
//       { name: 'eye lash', id: 1 },
//       { name: 'soap bar', id: 2 },
//       { name: 'blah', id: 3 },
//     ],
//   },
// ];
