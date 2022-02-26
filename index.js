const keyArr1 = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]
const keyArr2 = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
]

function h (z){
    let text = []
    text = z
    let newText = []

    for(let i=0; i<keyArr1.length; i++){
        for (let j=0; j<10; j++){
            text.forEach((e)=>{
                if (e==keyArr1[i][j]){
                    newText.push(keyArr1[i][9-j])
                }
            })
        }
    }
    return newText.join('')
}

function v (z){
    let text = []
    text = z
    let newText = []

    for(let i=0; i<keyArr1.length; i++){
        for (let j=0; j<10; j++){
            text.forEach((e)=>{
                if (e==keyArr1[i][j]){
                    newText.push(keyArr1[3-i][j])
                }
            })
        }
    }
    return newText.join('')
}

function shift(a, z){
    let text = []
    text = z
    let b = parseInt(a)
    let newText = []

    for(let i=0; i<keyArr2.length; i++){
            text.forEach((e)=>{
                if (e==keyArr2[i]){
                    if (i+b > keyArr2.length){
                        newText.push(keyArr2[i+b-keyArr2.length])
                    } else if(i+b < 0){
                        newText.push(keyArr2[keyArr2.length+b+1])
                    } else if (i+b == 40){
                        newText.push(keyArr2[0])
                    } else {
                        newText.push(keyArr2[i+b])
                    }
                }
            })
    }
    return newText.join('')
}

function encode (c, t) {
    let resArr = []
    let resTxt = t
    let code = c.split(',')

    for (let i = 0; i<code.length; i++){
        if(code[i] == 'h'){
            resArr.push(h(resTxt.split('')))
            resTxt = resArr.join('')
            resArr.splice(0,resArr.length)
        } else if (code[i] == 'v'){
            resArr.push(v(resTxt.split('')))
            resTxt = resArr.join('')
            resArr.splice(0,resArr.length)
        } else {
            resArr.push(shift(code[i], resTxt.split('')))
            resTxt = resArr.join('')
            resArr.splice(0,resArr.length)
        }
    }
    return resTxt
}

let code= prompt(`Insert transform method (h / v / number) and use "," to split. e.g: h,v,v,2`)
let text= prompt('Insert your text and we will encode')

alert(encode(code, text));
