let weather = "sunny";
if(weather === "sunny") {
    console.log("It is sunny outside!");
}
else if (weather === "rainy"){
    console.log("It is rainy outside!");
}
else if (weather === "cloudy"){
    console.log("It is cloudy outside!");
}
else if (weather === "snowy"){
    comsole.log("it is snowy outside!");
}
else{
    console.log("it is a beautiful day outside, but I cannot describe it in words!")
}

switch(weather){
    case "sunny":
        console.log("it is sunny outside!");
        break;

    case "snowy":
        console.log("it is snowy outside");
        break;

    case "rainy":
        console.log("it is rainy outside");
        break;

    case "cloudy":
        console.log("it is cloudy outside");
        break;

    default:
        console.log("It is a beautiful day outside, but I cannot describe it in ")

}

const answer = prompt ("What is the capital of Nigeria").toLowerCase();

if (answer === "abuja")
{
    alert("Correct!");
}
else if (answer === "lagos")
{
    alert("Okay Grandpa");
}
else if (answer === "calabar")
{
    alert("Ancestor you go collect kola?");
}
else
{
    alert("Eh for where? Mmm?")

}
 