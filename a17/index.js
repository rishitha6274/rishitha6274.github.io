function add(...values){
    const total =  values.reduce((sum, value) => sum + value, 0);
    console.log(total)
}
add(5,6,7,8,9,5)
