const getTotalBalanceByGender = (users, gender) => {
const totalBalance = users
    .filter((user) => {
    return user.gender === gender;
    })
    .reduce((sum, user) => {
    return sum + user.balance;
    }, 0);
return totalBalance;
};

const getAllUsers = [
{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
},
{
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
},
{
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
},
{
    name: "Elma Head",
    gender: "female",
    balance: 2278,
},
{
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
},
{
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
},
{
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
},
];

console.log(getTotalBalanceByGender(getAllUsers, "male")); // 12053

console.log(getTotalBalanceByGender(getAllUsers, "female")); // 8863