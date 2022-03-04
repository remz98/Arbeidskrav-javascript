const handleliste = document.querySelector("#Handleliste");
const inpVare = document.querySelector("#inpvare");

inpVare.onchange = () => {
handleliste.innerHTML += `
<li> ${inpVare.value} </li>
`;

inpVare.value = "";
 }
 
 
 