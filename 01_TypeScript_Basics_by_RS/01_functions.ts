function add(x: number, y: number): number {
    return x + y;
}
add(5, 10); // Returns 15
console.log('Sum:', add(5, 10));



let user: { name: string; age: number; location : string } = {
    name: "John Doe",
    age: 30,
    location: "New York"
};
console.log('User:', user);