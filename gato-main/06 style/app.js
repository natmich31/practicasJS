const cambiar=()=>{
    let div=document.querySelector("#item")
    let colorFondo=document.querySelector("#color").value
    let colorTexto=document.querySelector("#colort").value
    let figura=document.querySelector("#figura").value
        let br=(figura=="1")?"0%":"100%"
        let texto=document.querySelector("#texto").value
        let ancho=document.querySelector("#ancho").value
        let alto=document.querySelector("#alto").value
        div.style.width=ancho+"px"
        div.style.height=alto+"px"
        div.innerHTML=texto
        div.style.boderRadius=br
        div.style.background=colorFondo
        div.style.color=colorTexto
        const cambiar=()=>{
            document.querySelector("#valor").innerHTML=document.querySelector("#v").value;
            }

        }