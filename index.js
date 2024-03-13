setTimeout(()=>{
    let count=0;
    let a=document.querySelector("#a").innerHTML
    let id1=setInterval(()=>{
        count+=1
        document.querySelector("#a").innerHTML=count
        if(count==a){
            clearInterval(id1)
        }

    })

    let count1=0
    let b=document.querySelector("#b").innerHTML
        setTimeout(()=>{
         let id2=setInterval(()=>{
            count1+=1
            document.querySelector("#b").innerHTML=count1
            if(count1==b){
                clearInterval(id2)
            }
         })
        },10000)

        let count2=0
        let c=document.querySelector("#c").innerHTML
        setTimeout(()=>{
             let id3=setInterval(()=>{
                count2+=1
                document.querySelector("#c").innerHTML=count2
                if(count2==c){
                    clearInterval(id3)
                }
             })
        },20000)

        let count3=0
        let d=document.querySelector("#d").innerHTML
        setTimeout(()=>{
             let id4=setInterval(()=>{
                count3+=1
                document.querySelector("#d").innerHTML=count3
                if(count3==d){
                    clearInterval(id4)
                }
             })
        },33000)
},10000)
