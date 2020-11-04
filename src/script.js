let clip;
let reader = new FileReader();

typeSelect.addEventListener('input', e=>loadData(e))

loadBut.addEventListener('click', ()=>{
    navigator.clipboard.read().then(clipData => {
        clip = clipData[0];
        generateList(clipData[0].types);
        console.log(clipData);
    });
})

saveBut.addEventListener('click', ()=>{
    navigator.clipboard.write([new ClipboardItem({ [typeSelect.value]: new Blob([dataIn.value], {type: typeSelect.value})})])
})

copyTxtBut.addEventListener('click', ()=>navigator.clipboard.writeText(dataIn.value))

function generateList(nameArray){
    typeSelect.textContent = '';
    addElement('none')
    nameArray.forEach(e => addElement(e));
}

function addElement(a){
    let n = document.createElement('option');
    n.textContent = a;
    n.value = a;
    typeSelect.appendChild(n);
}

function loadData(e) {
    if (e.target.value == 'none') {
        dataIn.style.display = 'block';
        imgIn.style.display = 'none';
        dataIn.value = '';
        sizeDisplay.innerHTML = 0;
    } else clip.getType(e.target.value).then(blob=>{
        sizeDisplay.innerHTML = blob.size;
        if (e.target.value.substr(0,6) == 'image/'){
            dataIn.style.display = 'none';
            imgIn.style.display = 'block';
            imgIn.src = URL.createObjectURL(blob);
        } else {
            dataIn.style.display = 'block';
            imgIn.style.display = 'none';
            blob.text().then(text=>{
                dataIn.value = text;
            })
        }
        console.log(blob);
    });
}

// website size stuff
window.addEventListener('resize', ()=>sizeFun());
function sizeFun(){
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}